import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styles/pages/ChatRoomTemplate';
import { TelegramLogo } from '@phosphor-icons/react';
import * as T from '../../styles/molecules/BottomChatBar';
import SockJS from 'sockjs-client/dist/sockjs';
import ChatContentList from '../organisms/ChatContentList';
import { Box, Card, CardContent, Typography } from '@mui/material';
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
  userId: number;
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
  const messageAreaRef = useRef(null);

  // 메시지 너비를 동적으로 계산하는 함수
  const calculateMessageWidth = (message: string) => {
    const messageLength = message.length;
    // 원하는 너비 계산 로직을 여기에 추가
    return messageLength * 10; // 예시: 글자 당 10px로 계산
  };

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
      const newMessage = {
        chatContent: messageContent,
        memberId: chat.userId,
        messageType: 'CHAT',
      };
      stompClient.send(
        `/api/app/${chat.chatRoomId}`,
        {},
        JSON.stringify(newMessage),
      );
      setMessageInput('');
    }
  };

  return (
    <S.Container>
      <div className="chat-page">
        <ul className="messageArea" ref={messageAreaRef}>
          {messages.map((message, index) => (
            <li key={index} className="chat-message">
              {chat.userId === message.userId ? (
                <div className="mine">
                  <Box padding={`1rem`}>
                    <Card
                      sx={{
                        backgroundColor: '#ffd89d',
                        borderRadius: '1.5rem',
                      }}
                    >
                      <CardContent>
                        <Typography>{message.chatContent}</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </div>
              ) : (
                <p className="yours">
                  {' '}
                  <Box padding={`1rem`}>
                    <Card
                      sx={{
                        border: 'solid',
                        color: '#f1bb6a',
                        borderRadius: '1.5rem',
                      }}
                    >
                      <CardContent>
                        <Typography>{message.chatContent}</Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </p>
              )}
            </li>
          ))}
        </ul>
        <ChatContentList roomId={chat.chatRoomId} />
      </div>
      <div className="username-page">
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