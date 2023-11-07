import ChatRoomTemplate2 from '../components/template/ChatRoomTemplate2';
import Container from '../components/atoms/Container';

const ChatRoom = () => {
  const roomId = 1; // 예시로 roomId를 설정
  const memberId = 2; // 예시로 memberId를 설정

  return (
    <Container>
      <ChatRoomTemplate2 roomId={roomId} memberId={memberId} />
    </Container>
  );
};

export default ChatRoom;
