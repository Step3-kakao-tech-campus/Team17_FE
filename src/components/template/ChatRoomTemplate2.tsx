import React, { useEffect, useState } from 'react';

// In NodeJS, TypeScript or ES6
// These libraries have been developed using typescript, and the typings are included in the distribution.
// you can import classes like the following:
import { Client } from '@stomp/stompjs';

// [채팅] - 메시지 전송 response값들
interface ChatMessage {
  chatId: number;
  userId: number;
  chatContent: string;
  messageType: string;
  contentTime: string;
}

interface ChatRoomTemplate2Props {
  roomId: number;
  memberId: number;
}

const ChatRoomTemplate2: React.FC<ChatRoomTemplate2Props> = ({
  roomId,
  memberId,
}) => {
  const [chatMessage, setChatMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const client = new Client({
    brokerURL: 'ws://localhost:5173/chat-connect',
  });
  console.log('연결 되었니..?');

  useEffect(() => {
    // Creat a STOMP client
    // STOMP JavaScript clients will communicate to a STOMP server using a ws:// or wss:// URL.
    // STOMP client 설정 및 연결
    console.log('useEffect 연결 되었니..?');

    client.onConnect = (frame) => {
      console.log(frame);
      console.log('useEffect 연결 되었니..?');
      client.subscribe(`/queue/chat-sub/${roomId}`, (message) => {
        const newMessage: ChatMessage = JSON.parse(message.body);
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
      });
    };

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [roomId]);

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
        destination: `/app/chat-send/${roomId}`,
        body: JSON.stringify(newMessage),
      });

      setChatMessage('');
    } else {
      console.error('STOMP client is not connected. Message not sent.');
    }
  };

  return (
    <div>
      <div>
        <h2>채팅방</h2>
        <div>
          {chatHistory.map((message) => (
            <div key={message.chatId}>
              <p>{message.chatContent}</p>
              <small>{message.contentTime}</small>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="메시지 입력"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default ChatRoomTemplate2;
