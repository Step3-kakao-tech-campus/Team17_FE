import { useState } from 'react';

const MessageForm = () => {
    // 사용자가 MessageForm 컴포넌트에서 메시지를 입력합니다.
    // MessageForm은 App 컴포넌트에서 handleSendMessage 함수를 호출하고 사용자의 메시지를 전달합니다.
    };

    // const MessageForm = ({ onSendMessage }) => {
    //     // const [message, setMessage] = useState('');
      
    //     const handleSubmit = (event) => {
    //       event.preventDefault();
    //       onSendMessage(message);
    //       setMessage('');
    //     };
      
    //     return (
    //       <form className="message-form" onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           className="message-input"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //         />
    //         <button className="send-button" type="submit">
    //           Send
    //         </button>
    //       </form>
    //     );
    //   };