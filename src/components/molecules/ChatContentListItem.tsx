import * as S from '../../styles/molecules/ChatListItem';

interface ChatContent {
  id: number;
  content: string;
  messageType: string;
  memberId: number;
}

type ChatListItemProps = {
  chatcontent: ChatContent;
};

const ChatListItem = ({ chatcontent }: ChatListItemProps) => {
  console.log('chatcont 확인용 log', chatcontent);
  const { content } = chatcontent;
  return (
    <S.Container>
      <S.TextWrapper>
        <div>
          <S.ListChatText>
            <span>{content}</span>
          </S.ListChatText>
        </div>
      </S.TextWrapper>
    </S.Container>
  );
};

export default ChatListItem;
