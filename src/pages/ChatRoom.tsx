import ChatRoomTemplate2 from '../components/template/ChatRoomTemplate2';
import Container from '../components/atoms/Container';
import ChatRoomBanner from '../components/organisms/ChatRoomBanner';
import { useLocation } from 'react-router-dom';

interface ChatRoomTemplate {
  roomId: number;
  memberId: number;
  chatContent: String;
}

const ChatRoom = () => {
  const { state } = useLocation();

  const roomId = 1; // 예시로 roomId를 설정
  const memberId = 2; // 예시로 memberId를 설정
  const chatContent = 'test 채팅 내용';
  return (
    <Container>
      <ChatRoomBanner userInfo={state} />
      <ChatRoomTemplate2
        roomId={roomId}
        memberId={memberId}
        chatContent={chatContent}
      />
    </Container>
  );
};

export default ChatRoom;
