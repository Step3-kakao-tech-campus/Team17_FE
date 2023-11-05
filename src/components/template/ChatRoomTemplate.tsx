import * as S from '../../styles/templates/ChatListTemplate';
import ChatRoomBanner from '../organisms/ChatRoomBanner';
import BottomChatBar from '../molecules/BottomChatBar';
// import { useEffect, useRef, useState } from 'react';
// import { CompatClient, Stomp } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';

// interface ChatDetail {
//   chatId: number;
//   userId: number;
//   chatContent: string;
//   messageType: string;
//   contentTime: string;
// }

const ChatListTemplate = () => {
  // const [chatmessage, setchatMessage] = useState<ChatDetail>();
  // const [roomId, setRoomId] = useState('');

  // console.log('메시지', chatmessage);
  // console.log('룸 아이디', roomId);

  // useEffect(() => {
  //   const client = useRef<CompatClient>();

  //   const connectHandler = () => {
  //     client.current = Stomp.over(() => {
  //       const sock = new SockJS('ws://localhost:5173/chat-connect');
  //       return sock;
  //     });
  //     client.current.connect(
  //       {
  //         // 여기에서 유효성 검증을 위해 header를 넣어줄 수 있음.
  //         // ex)
  //         // Authorization: token,
  //       },
  //       () => {
  //         // callback 함수 설정, 대부분 여기에 sub 함수 씀
  //         client.current!.subscribe(
  //           `/queue/chat-sub/${roomId}`,
  //           (message) => {
  //             setchatMessage(JSON.parse(message.body));
  //           },
  //           {
  //             // 여기에도 유효성 검증을 위한 header 넣어 줄 수 있음
  //           },
  //         );
  //       },
  //     );
  //   };

  //   connectHandler();

  //   return () => {
  //     // disconnect
  //   };
  // }, []);

  return (
    <S.Container>
      <ChatRoomBanner />
      <S.ChatRoom>채팅방</S.ChatRoom>
      <BottomChatBar />
    </S.Container>
  );
};

export default ChatListTemplate;
