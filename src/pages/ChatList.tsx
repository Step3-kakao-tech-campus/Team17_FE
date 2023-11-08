// import React from 'react'
import ChatListTemplate from '../components/template/ChatListTemplate';
import BottomNavBar from '../components/molecules/BottomNavBar';
import ProfileBanner from '../components/molecules/ProfileBanner';
import Container from '../components/atoms/Container';

const ChatList = () => {
  return (
    <Container>
      <ProfileBanner isOwner={false} />
      <ChatListTemplate />
      <BottomNavBar />
    </Container>
  );
};

export default ChatList;
