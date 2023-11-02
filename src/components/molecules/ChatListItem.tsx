import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ChatListItem';
import { GrainsSlash } from '@phosphor-icons/react';

type ChatListItemProps = {
  chat: {
    userId: number;
    userImage: string;
    chatContent: string;
    walkType: string;
    matchId: number;
  };
};

const ChatListItem = ({ chat }: ChatListItemProps) => {
  // request url = api/chat/list
  console.log('chat', chat);
  const { userId, userImage, chatContent, walkType } = chat;

  return (
    <S.Container>
      <S.ProfileImgWrapper>
        <Image src={userImage} alt="임시프로필이미지" size="3.5" />
      </S.ProfileImgWrapper>
      <S.TextWrapper>
        <div>
          <S.NameAndWalkTypeWrapper>
            {userId}&nbsp; {/* 프로필 이름이 아닌 userId로 일단 대체*/}
            <span>산책 현황</span>&nbsp;
            {walkType === '산책중' ? (
              <GrainsSlash size={10} color="#01c522" />
            ) : (
              <GrainsSlash size={10} color="#3d3d3d" />
            )}
          </S.NameAndWalkTypeWrapper>
        </div>
        <div>
          <S.ListChatText>
            <span>{chatContent}</span>
          </S.ListChatText>
        </div>
      </S.TextWrapper>
    </S.Container>
  );
};

export default ChatListItem;
