import * as S from '../../styles/templates/ChatListTemplate';
import ChatRoomBanner from '../organisms/ChatRoomBanner';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';
import { useEffect, useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

interface ChatDetail {
  chatId: number;
  userId: number;
  chatContent: string;
  messageType: string;
  contentTime: string;
}

const ChatListTemplate = () => {
  const [chatmessage, setchatMessage] = useState<ChatDetail>();
  const [roomId, _setRoomId] = useState('');

  console.log('메시지', chatmessage);
  console.log('룸 아이디', roomId);

  useEffect(() => {
    // Creat a STOMP client
    const client = useRef<CompatClient>();

    const connectHandler = () => {
      client.current = Stomp.over(() => {
        const sock = new SockJS('http://localhost:5173/chat-connect');
        return sock;
      });
      client.current.connect(() => {
        // callback 함수 설정, 대부분 여기에 sub 함수 씀
        client.current!.subscribe(
          `/queue/chat-sub/${roomId}`,
          (message) => {
            setchatMessage(JSON.parse(message.body));
          },
          {
            // 여기에도 유효성 검증을 위한 header 넣어 줄 수 있음
          },
        );
      });
    };

    connectHandler();

    // const sendHandler = () => {
    //   console.log('room Id:' + roomId);
    //   client.current!.send(
    //     '/pub/chat/message',
    //     {},

    //     // const chat = JSON.stringify({
    //     //   type: 'TALK',
    //     //   roomId: roomId,
    //     //   // sender: user.name,
    //     //   message: chatmessage,
    //     // }),
    //     // config.headers['chat'] = `${chat}`;
    //   );
    // };

    return () => {
      // disconnect
    };
  }, []);

  return (
    <S.Container>
      <ChatRoomBanner />
      <S.ChatRoom>채팅방</S.ChatRoom>
      <T.ContainerFluid>
        <T.Form
          onClick={(e: React.FormEvent) => {
            e.preventDefault();
            // Handle the submit form submission here
          }}
        >
          <T.Input type="send" placeholder="메시지 보내기" aria-label="Send" />
          <T.SearchButton>
            <TelegramLogo size={30} />
          </T.SearchButton>
        </T.Form>
      </T.ContainerFluid>
    </S.Container>
  );
};

export default ChatListTemplate;
