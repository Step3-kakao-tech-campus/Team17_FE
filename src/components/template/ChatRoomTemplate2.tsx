import React, { useEffect, useState } from 'react';
import * as S from '../../styles/templates/ChatListTemplate';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';
import SockJS from 'sockjs-client/dist/sockjs';
import BottomChatBar from '../molecules/BottomChatBar';

const colors: string[] = [
  '#2196F3',
  '#32c787',
  '#00BCD4',
  '#ff5652',
  '#ffc107',
  '#ff85af',
  '#FF9800',
  '#39bbb0',
];

interface ChatMessage {
  chatContent: string;
  memberId: number;
  messageType: string;
}

interface IdRequest {
  chatRoomId: number;
  userId: number;
  name: string;
  userImage: string;
  walkType: string;
  matchingId: number;
  isDogOwner: boolean;
}

type ChatRoomTemplateProps = {
  chat: IdRequest;
};

const ChatRoomTemplate2 = ({ chat }: ChatRoomTemplateProps) => {
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stompClient, setStompClient] = useState<Stomp | null>(null);
  console.log('chat', chat);
  useEffect(() => {
    // WebSocket connection
    const socket = new SockJS(
      'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect',
    );
    const stomp = Stomp.over(socket);

    stomp.connect({}, () => {
      setStompClient(stomp);
      stomp.subscribe(
        `/api/topic/chat-sub/${chat.chatRoomId}`,
        (payload: any) => {
          console.log('3. stomp 구독 완료');
          const message: ChatMessage = JSON.parse(payload.body);
          console.log('messagee', message);
          setMessages((prevMessages) => [...prevMessages, message]);
        },
      );
    });

    const _onConnected = () => {
      // Your code for handling connection
    };

    const onError = (error: any) => {
      // Handle WebSocket connection error
      console.log('WebSocket connection error: ', error);
    };
  }, []);

  const sendMessage = (event: any) => {
    event.preventDefault();
    const messageContent = messageInput.trim();
    if (messageContent && stompClient) {
      console.log('확인해보자', chat.userId);
      const chatMessage = {
        chatContent: messageContent,
        memberId: chat.userId,
        messageType: 'CHAT',
      };
      stompClient.send(
        `/api/app/${chat.chatRoomId}`,
        {},
        JSON.stringify(chatMessage),
      );
      setMessageInput('');
    }
  };

  return (
    <S.Container>
      <div id="chat-page">
        <ul id="messageArea">
          {messages.map((message, index) => (
            <li key={index} className="chat-message">
              <p>{message.chatContent}</p>
            </li>
          ))}
        </ul>
      </div>
      <div id="username-page">
        <T.Form>
          <T.Input
            type="text"
            id="message"
            placeholder="메세지를 입력하세요"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <TelegramLogo size={40} color={'#e29c62'} onClick={sendMessage} />
        </T.Form>
      </div>
    </S.Container>
  );
};

export default ChatRoomTemplate2;
