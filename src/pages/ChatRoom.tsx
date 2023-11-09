import ChatRoomTemplate2 from '../components/template/ChatRoomTemplate2';
import Container from '../components/atoms/Container';
import ChatRoomBanner from '../components/organisms/ChatRoomBanner';
import { useLocation } from 'react-router-dom';

const ChatRoom = () => {
  const { state } = useLocation();

  // const messageType = "CHAT"
  // const roomId = 1; // 예시로 roomId를 설정
  const memberId = 1; // 예시로 memberId를 설정
  // const chatContent = 'test 채팅 내용';
  console.log('chatroom page로 가져온 state값 조회', state);
  console.log('state값 중 chatRoomId 추출', state.userinfo.chatRoomId);
  console.log('state값 중 memberId 추출', state.userinfo.memberId);
  return (
    <Container>
      <ChatRoomBanner />
      <ChatRoomTemplate2
        room_Id={state.userinfo.chatRoomId}
        memberId={memberId}
        // memberId={state.userinfo.memberId}
        // chatContent={chatContent}
      />
    </Container>
  );
};

export default ChatRoom;
