// import React from 'react'
import ChatListTemplate from '../components/template/ChatRoomTemplate';
import ChatRoomBanner from '../components/organisms/ChatRoomBanner';
import Container from '../components/atoms/Container';

const ChatRoom = () => {
  return (
    <Container>
      <ChatRoomBanner />
      <ChatListTemplate />
    </Container>
  );
};

export default ChatRoom;
