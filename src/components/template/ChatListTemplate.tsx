import ChatList from '../organisms/ChatList';
import styled from 'styled-components';

const ChatRoom = styled.div`
  text-align: center;
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ChatListTemplate = () => {
  return (
    <>
      <ChatRoom>채팅방</ChatRoom>
      <ChatList />
    </>
  );
};

export default ChatListTemplate;
