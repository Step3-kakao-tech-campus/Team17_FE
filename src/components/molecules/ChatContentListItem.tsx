import * as S from '../../styles/molecules/ChatListItem';

interface ChatContent {
  id: number;
  content: string;
  messageType: string;
  memberId: number;
}

type ChatListItemProps = {
  chatcontent: ChatContent;
  myuserId: number;
};

const ChatListItem = ({ chatcontent, myuserId }: ChatListItemProps) => {
  const { content } = chatcontent;

  return (
    <S.Container>
      {chatcontent.memberId === myuserId ? (
        <S.MyChatTextWrapper className="mine">
          <S.ChatTextWrapper className="mine">
            <div>
              <div>
                <S.TextContent className="mine"> {content}</S.TextContent>
              </div>
            </div>
          </S.ChatTextWrapper>
        </S.MyChatTextWrapper>
      ) : (
        <div className="yours">
          <S.ChatTextWrapper className="yours">
            <div>
              <div>
                <S.TextContent className="yours"> {content}</S.TextContent>
              </div>
            </div>
          </S.ChatTextWrapper>
        </div>
      )}
    </S.Container>
  );
};

export default ChatListItem;
