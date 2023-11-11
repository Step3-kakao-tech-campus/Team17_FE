import React, { useEffect, useState } from 'react';
import * as S from '../../styles/templates/ChatListTemplate';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';
import SockJS from 'sockjs-client/dist/sockjs';

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
  memberId: number;
  idDogOwner: boolean;
  matchingId: number;
  name: string;
  userImage: string;
  walkType: string;
}

type ChatRoomTemplateProps = {
  chat: IdRequest;
};
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ChatRoomTemplate2 = ({ chat }: ChatRoomTemplateProps) => {
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stompClient, setStompClient] = useState<Stomp | null>(null);

  useEffect(() => {
    console.log('operate');
    // Initialize the WebSocket connection
    const socket = new SockJS(`${BASE_URL}/api/connect`);
    const stomp = Stomp.over(socket);
    console.log('1. stomp 클라이언트 생성 완료');

    stomp.connect(
      {},
      () => {
        console.log('2. stomp 연결 완료');
        setStompClient(stomp);

        // 이 부분을 수정: 구독은 연결 시에 수행되어야 함
        stomp.subscribe(
          `/api/topic/chat-sub/${chat.chatRoomId}`,
          (data: any) => {
            onMessageReceived(data);
          },
        );
      },
      onError,
    );
  }, []);

  const onError = (error: any) => {
    // Handle WebSocket connection error
    console.log('WebSocket connection error: ', error);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    if (stompClient) {
      const chatMessage: ChatMessage = {
        messageType: 'CHAT',
        memberId: chat.memberId,
        chatContent: messageInput,
      };

      stompClient.send(
        `/api/app/${chat.chatRoomId}`,
        {},
        JSON.stringify(chatMessage),
      );
      setMessageInput('');
    } else {
      console.error('WebSocket connection is not established.');
    }
  };

  const onMessageReceived = (payload: any) => {
    console.log('3. stomp 구독 완료');
    const message: ChatMessage = JSON.parse(payload.body);
    console.log('messagee', message);
    setMessages((prevMessages) => [...prevMessages, message]);
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
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <TelegramLogo size={30} onClick={sendMessage} />
        </T.Form>
      </div>
    </S.Container>
  );
};

export default ChatRoomTemplate2;
