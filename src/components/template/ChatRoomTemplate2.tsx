import React, { useEffect, useState } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client/dist/sockjs';
import * as S from '../../styles/templates/ChatListTemplate';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';

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

// Props로 전달받는게 맞는가? useLocation써서 State값을 여기서 받나..?
interface IdRequest {
  chatRoomId: number;
  memberId: number;
  // chatContent: string;
}
type ChatRoomTemplateProps = {
  chat: IdRequest;
};

const ChatApp = ({ chat }: ChatRoomTemplateProps) => {
  const [username, setUsername] = useState<string>('');
  const [messageInput, setMessageInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stompClient, setStompClient] = useState<Stomp>();
  const [chatContent, setChatContent] = useState<string>('');

  useEffect(() => {
    // Initialize the WebSocket connection
    var socket = new SockJS(
      'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect',
    );
    const stomp = Stomp.over(socket);
    stomp.brokerURL =
      'ws://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect';
    console.log('1. stomp 클라이언트 생성 완료');
    stomp.connect({}, onConnected, onError);
    setStompClient(stomp);
  }, []);

  const onConnected = () => {
    console.log('2. stomp 연결 완료');
    // Subscribe to the Public Topic
    if (stompClient) {
      // @ts-ignore
      stompClient.subscribe(
        `/api/topic/chat-sub/${chat.chatRoomId}`,
        onMessageReceived,
      );
    }
  };

  const onError = (error: any) => {
    // Handle WebSocket connection error
    console.log('WebSocket connection error: ', error);
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('chatContent', chatContent);

    if (true) {
      const chatMessage: ChatMessage = {
        messageType: 'CHAT',
        memberId: chat.memberId,
        chatContent: messageInput,
      };
      console.log('message값 확인', chatMessage);
      // @ts-ignore
      stompClient.send(
        `/api/app/${chat.chatRoomId}`,
        {},
        JSON.stringify(chatMessage),
      );
      setMessageInput('');
    }
  };

  const onMessageReceived = (payload: any) => {
    console.log('3. stomp 구독 완료');
    const message: ChatMessage = JSON.parse(payload.body);
    // Handle incoming messages and update the state accordingly
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <S.Container>
      <div>
        {username ? (
          <div id="chat-page">
            <ul id="messageArea">
              {messages.map((message, index) => (
                <li key={index} className="chat-message">
                  <p>{message.chatContent}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
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
        )}
      </div>
    </S.Container>
  );
};

export default ChatApp;
