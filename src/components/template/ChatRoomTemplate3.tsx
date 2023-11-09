// import SockJS from 'sockjs-client';
// import { Stomp } from '@stomp/stompjs';
// import React, { useEffect, useState } from 'react';
// import { Component, FormEvent } from 'react';
// import { Client, IMessage } from '@stomp/stompjs';

// // [채팅] - 메시지 전송 request값들
// interface ChatMessage {
//   chatContent: string;
//   memberId: string;
//   messageType: string;
// }

// // [채팅] - 메시지 전송 response값들
// interface Message {
//   chatId: number;
//   userId: number;
//   messageType: string;
//   chatContent: string;
//   contentTime: string;
// }

// const colors = [
//   '#2196F3',
//   '#32c787',
//   '#00BCD4',
//   '#ff5652',
//   '#ffc107',
//   '#ff85af',
//   '#FF9800',
//   '#39bbb0',
// ];

// const ChatRoomTemplate3 = () => {
//   //   const [username, setUsername] = useState<string>('');
//   const [connecting, setConnecting] = useState<boolean>(false);
//   const [stompClient, setStompClient] = useState<Client | null>(null);

//   useEffect(() => {
//     console.log('실행되니?');
//     if (username && stompClient === null) {
//       const socket = new SockJS('/chat/connect');
//       const client = new Client({
//         webSocketFactory: () => socket,
//         debug: (str) => console.log(str),
//       });

//       client.activate();
//       client.onConnect = () => {
//         // Connected callback
//         setStompClient(client);
//         onConnected();
//       };
//       client.onStompError = onError;
//     }
//   }, [username, stompClient]);

//   const onConnected = () => {
//     if (stompClient) {
//       stompClient.subscribe('/topic/chat-sub/1', onMessageReceived);
//       setConnecting(false);
//     }
//   };

//   const onError = (error: any) => {
//     // Handle error
//     console.log(error);
//     // You can update state or show an error message here
//   };

//   const onMessageReceived = (message: IMessage) => {
//     const messageContent: string = message.body || ''; // Access the message content

//     try {
//       const parsedMessage: any = JSON.parse(messageContent);
//       // Handle the parsed message
//     } catch (error) {
//       console.error('Error parsing message:', error);
//     }
//   };

//   const handleConnect = () => {
//     if (username) {
//       setUsernamePageHidden(true);
//       setChatPageHidden(false);
//     }
//   };
//   ㄴ;

//   const setUsernamePageHidden = (isHidden: boolean) => {
//     // Implement logic to hide or show the username page
//   };

//   const setChatPageHidden = (isHidden: boolean) => {
//     // Implement logic to hide or show the chat page
//   };

//   return (
//     <div>
//       <div id="username-page">
//         {username ? null : (
//           <form>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <button type="button" onClick={handleConnect}>
//               Join Chat
//             </button>
//           </form>
//         )}
//       </div>

//       <div id="chat-page">
//         <div className="connecting">{connecting && 'Connecting...'}</div>
//         {/* Render chat content and messages here */}
//       </div>
//     </div>
//   );
// };

// export default ChatRoomTemplate3;
