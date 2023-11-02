import * as S from '../../styles/templates/ChatListTemplate';
import ChatRoomBanner from '../organisms/ChatRoomBanner';
import BottomChatBar from '../molecules/BottomChatBar';

const ChatListTemplate = () => {
  return (
    <S.Container>
      <ChatRoomBanner />
      <S.ChatRoom>채팅방</S.ChatRoom>
      <BottomChatBar />
    </S.Container>
  );
};

export default ChatListTemplate;
