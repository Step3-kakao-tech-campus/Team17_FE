import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ChatListItem';
import { GrainsSlash } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface Chat {
  id: number;
  chatRoomId: number;
  memberId: number;
  memberNickname: string;
  memberImage: string;
  chatContent: string;
  walkType: string;
  matchId: number;
}

type ChatListItemProps = {
  chat: Chat;
};

const ChatListItem = ({ chat }: ChatListItemProps) => {
  const navigate = useNavigate();
  console.log('chat', chat);
  const {
    memberId,
    memberNickname,
    memberImage,
    chatContent,
    walkType,
    chatRoomId,
  } = chat;

  const enterroom = () => {
    console.log('Apply clicked');
    navigate('/chatroom', {
      state: {
        userinfo: {
          memberId: memberId,
          name: memberNickname,
          userImage: memberImage,
          walkType: walkType,
          chatRoomId: chatRoomId,
        },
      },
    });
  };
  return (
    <S.Container onClick={enterroom}>
      <S.ProfileImgWrapper>
        <Image src={memberImage} alt="임시프로필이미지" size="3.5" />
      </S.ProfileImgWrapper>
      <S.TextWrapper>
        <div>
          <S.NameAndWalkTypeWrapper>
            {memberNickname}&nbsp; {/* 프로필 이름이 아닌 userId로 일단 대체*/}
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
