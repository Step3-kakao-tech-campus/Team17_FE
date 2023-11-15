import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ChatListItem';
import { useNavigate } from 'react-router-dom';
interface Chat {
  chatRoomId: number;
  memberId: number;
  memberNickname: string;
  memberImage: string;
  chatContent: string;
  walkType: string;
  matchId: number;
  isDogOwner: boolean;
}
type ChatListItemProps = {
  chat: Chat;
};
const ChatListItem = ({ chat }: ChatListItemProps) => {
  const navigate = useNavigate();
  const {
    memberId,
    memberNickname,
    memberImage,
    chatContent,
    walkType,
    matchId,
    chatRoomId,
    isDogOwner,
  } = chat;
  const enterroom = () => {
    navigate('/chatroom', {
      state: {
        userinfo: {
          userId: memberId,
          name: memberNickname,
          userImage: memberImage,
          walkType: walkType,
          chatRoomId: chatRoomId,
          isDogOwner: isDogOwner,
          matchingId: matchId,
        },
      },
    });
  };
  // console.log('상대방 id', memberId);
  return (
    <S.Container onClick={enterroom}>
      <S.ProfileImgWrapper>
        <Image
          src={memberImage || '/images/default_profile.png'}
          alt="임시프로필이미지"
          size="4"
        />
      </S.ProfileImgWrapper>
      <S.TextWrapper>
        <div>
          <S.NameAndWalkTypeWrapper>
            <span className="username">{memberNickname}</span>
            <span>산책 현황</span>&nbsp;
            {walkType === 'ACTIVATE' ? (
              <span className="walking" />
            ) : (
              <span className="wait" />
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
