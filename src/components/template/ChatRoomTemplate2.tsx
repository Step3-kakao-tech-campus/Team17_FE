import React, { useEffect, useState } from 'react';
import * as S from '../../styles/templates/ChatListTemplate';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client/dist/sockjs';
import ChatContentList from '../organisms/ChatContentList';
// [채팅] - 메시지 전송 response값들
interface ChatMessage {
  chatId: number;
  userId: number;
  chatContent: string;
  messageType: string;
  contentTime: string;
}

interface ChatRoomTemplate2Props {
  room_Id: number;
  memberId: number;
  // chatContent: string;
}

const ChatRoomTemplate2: React.FC<ChatRoomTemplate2Props> = ({
  room_Id,
  memberId,
}) => {
  console.log(
    'sockjs client 생성 전 data 확인용',
    'roomid : ',
    room_Id,
    'memberid : ',
    memberId,
  );
  const [chatMessage, setChatMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  var socket = new SockJS(
    'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect',
  );

  //create stomp client (stomp 클라이언트 생성)
  const client = Stomp.over(socket);
  console.log('연결 되었니..?');

  //stomp connect (stomp 연결 api), roomid를 가져와야할듯..?
  useEffect(() => {
    client.onConnect = () => {
      //stomp subscribe (stomp 구독 api)
      client.subscribe(`api/topic/chat-sub/${room_Id}`, (message) => {
        const newMessage: ChatMessage = JSON.parse(message.body);
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
      });
    };

    client.activate();
    return () => {
      client.deactivate();
    };
  }, [room_Id]);

  //stomp send (stomp 전송 api)
  const handleSendMessage = () => {
    if (client.connected) {
      const newMessage: ChatMessage = {
        chatId: Date.now(),
        messageType: 'CHAT',
        userId: memberId,
        chatContent: chatMessage,
        contentTime: new Date().toUTCString(),
      };
      client.publish({
        destination: `api/app/${room_Id}`,
        body: JSON.stringify(newMessage),
      });
      setChatMessage('');
    } else {
      console.error('STOMP client is not connected. Message not sent.');
    }
  };
  return (
    <S.Container>
      <ChatContentList />
      <T.ContainerFluid>
        <T.Form>
          {chatHistory.map((message) => (
            <div key={message.chatId}>
              <p>{message.chatContent}</p>
              <small>{message.contentTime}</small>
            </div>
          ))}
          <T.Input
            type="text"
            placeholder="메시지 입력"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <T.SearchButton onClick={handleSendMessage}>
            <TelegramLogo size={30} />
          </T.SearchButton>
        </T.Form>
      </T.ContainerFluid>
    </S.Container>
  );
};
export default ChatRoomTemplate2;
