// import { useEffect, useState } from 'react';
// import SockJS from 'sockjs-client/dist/sockjs';
// import '../../../public/chat.css';

// const ChatComponent = () => {
//   const [username, _setUsername] = useState('');
//   const [stompClient, setStompClient] = useState(null);
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [messageInput, setMessageInput] = useState('');

//   interface ChatMessage {
//     chatContent: string;
//     memberId: number;
//     messageType: string;
//   }

//   useEffect(() => {
//     // WebSocket connection
//     const socket = new SockJS(
//       'http://port-0-team17-be-12fhqa2llo9i5lfp.sel5.cloudtype.app/api/connect',
//     );
//     const stomp = Stomp.over(socket);

//     stomp.connect({}, () => {
//       setStompClient(stomp);
//       stomp.subscribe('/api/topic/chat-sub/1', () => onMessageReceived);
//     });
//   }, []);

//   const _onConnected = () => {
//     // Your code for handling connection
//   };

//   const _onError = (error: any) => {
//     // Your error handling code
//   };

//   const onMessageReceived = (payload: any) => {
//     console.log('3. stomp 구독 완료');
//     const message: ChatMessage = JSON.parse(payload.body);
//     console.log('messagee', message);
//     setMessages((prevMessages) => [...prevMessages, message]);
//   };

//   const sendMessage = (event: any) => {
//     event.preventDefault();
//     const messageContent = messageInput.trim();
//     if (messageContent && stompClient) {
//       const chatMessage = {
//         chatContent: messageContent,
//         memberId: 1,
//         messageType: 'CHAT',
//       };
//       stompClient.send('/api/app/1', {}, JSON.stringify(chatMessage));
//       setMessageInput('');
//     }
//   };

//   return (
//     <div id="chat-page">
//       <div className="chat-container">
//         <div className="chat-header">
//           <h2>채팅 기능 통합 테스트</h2>
//         </div>
//         <div className="connecting">연결중...</div>
//         <ul id="messageArea">
//           {messages?.map((message, index) => (
//             <li key={index} className="chat-message">
//               {message.chatContent}
//             </li>
//           ))}
//         </ul>
//         <form id="messageForm" name="messageForm" onSubmit={sendMessage}>
//           <div className="form-group">
//             <div className="input-group clearfix">
//               <input
//                 type="text"
//                 id="message"
//                 placeholder="Type a message..."
//                 autoComplete="off"
//                 className="form-control"
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//               />
//               <button type="submit" className="primary">
//                 전송
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
