import ChatList from '../organisms/ChatList';
import * as S from '../../styles/templates/ChatListTemplate';

const ChatListTemplate = () => {
  return (
    <S.Container>
      <S.ChatRoom>채팅방</S.ChatRoom>
      <ChatList />
    </S.Container>
  );
};

export default ChatListTemplate;
