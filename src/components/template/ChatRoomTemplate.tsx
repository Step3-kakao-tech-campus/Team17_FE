import * as S from '../../styles/templates/ChatListTemplate';
import ChatRoomBanner from '../organisms/ChatRoomBanner';
import BottomChatBar from '../molecules/BottomChatBar';
import { useEffect, useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const ChatListTemplate = () => {
  const [message, setMessage] = useState('');
  console.log('메시지', message);
  useEffect(() => {
    const client = useRef<CompatClient>();

    const connectHaner = () => {
      client.current = Stomp.over(() => {
        const sock = new SockJS('http://localhost:5137/chat-connect');
        return sock;
      });
      client.current.connect(
        {
          // 여기에서 유효성 검증을 위해 header를 넣어줄 수 있음.
          // ex)
          // Authorization: token,
        },
        () => {
          // callback 함수 설정, 대부분 여기에 sub 함수 씀
          client.current!.subscribe(
            `/queue/chat-sub/${room_id}`,
            (message) => {
              setMessage(JSON.parse(message.body));
            },
            {
              // 여기에도 유효성 검증을 위한 header 넣어 줄 수 있음
            },
          );
        },
      );
    };

    connectHaner();

    return () => {
      //disconnect
    };
  }, []);

  return (
    <S.Container>
      <ChatRoomBanner />
      <S.ChatRoom>채팅방</S.ChatRoom>
      <BottomChatBar />
    </S.Container>
  );
};

export default ChatListTemplate;
