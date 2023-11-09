// import * as S from '../../styles/templates/ChatListTemplate';
// import { TelegramLogo } from '@phosphor-icons/react';
// import * as T from '../../styles/molecules/BottomChatBar';
// import { useEffect, useRef, useState } from 'react';
// import { Stomp } from '@stomp/stompjs';
// import SockJS from 'sockjs-client/dist/sockjs';

// interface ChatDetail {
//   chatId: number;
//   userId: number;
//   chatContent: string;
//   messageType: string;
//   contentTime: string;
// }

// interface ChatRoomTemplateProps {
//   roomId: number;
//   memberId: number;
//   chatContent: String;
// }

// const ChatRoomTemplate: React.FC<ChatRoomTemplateProps> = ({
//   roomId,
//   memberId,
//   chatContent,
// }) => {
//   const [chatMessage, setChatMessage] = useState<string>('');
//   const [chatHistory, setChatHistory] = useState<ChatDetail[]>([]);

//   console.log('메시지', chatMessage);
//   console.log('메시지', chatHistory);
//   console.log('룸 아이디', roomId);
//   console.log('멤버아이디', memberId);
//   console.log('채팅내용', chatContent);

//   var socket = new SockJS(
//     'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/chat/connect',
//   );

//   const client = Stomp.over(socket);
//   console.log('연결 되었니..?');
//   if (client.connected) {
//     console.log('연결완료');
//   }

//   useEffect(() => {
//     // Creat a STOMP client
//     client.onConnect = (frame) => {
//       console.log('useEffect 연결 되었니..?');
//       client.subscribe(`/topic/chat-sub/${roomId}`, (message) => {
//         const newMessage: ChatDetail = JSON.parse(message.body);
//         setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
//       });
//     };

//     client.activate();

//     return () => {
//       client.deactivate();
//     };
//   }, [roomId]);

//   const handleSendMessage = () => {
//     if (client.connected) {
//       const newMessage: ChatDetail = {
//         chatId: Date.now(),
//         messageType: 'CHAT',
//         userId: memberId,
//         chatContent: chatMessage,
//         contentTime: new Date().toUTCString(),
//       };

//       client.publish({
//         destination: `/app/${roomId}`,
//         body: JSON.stringify(newMessage),
//       });

//       setChatMessage('');
//     } else {
//       console.error('STOMP client is not connected. Message not sent.');
//     }
//   };

//   return (
//     <S.Container>
//       <S.ChatRoom>채팅방</S.ChatRoom>
//       <T.ContainerFluid>
//         <T.Form
//           onClick={(e: React.FormEvent) => {
//             e.preventDefault();
//             // Handle the submit form submission here
//           }}
//         >
//           <T.Input type="send" placeholder="메시지 보내기" aria-label="Send" />
//           <T.SearchButton onClick={handleSendMessage}>
//             <TelegramLogo size={30} />
//           </T.SearchButton>
//         </T.Form>
//       </T.ContainerFluid>
//     </S.Container>
//   );
// };

// export default ChatRoomTemplate;
