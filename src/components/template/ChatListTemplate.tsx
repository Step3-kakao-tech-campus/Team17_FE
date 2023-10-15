import ChatList from "../organisms/ChatList"
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 90vw; 
    margin: 0 5vw; 
  }
  @media screen and (min-width: 769px) {
    width: 78vw; 
    margin: 0 10vw; 
  }
`;

const ChatRoom = styled.div`
  text-align: center;
  font-size: 32px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const ChatListTemplate = () => {
  return (
    <Container>
        <ChatRoom>채팅방</ChatRoom>
        <ChatList />
    </Container>
  )
}

export default ChatListTemplate