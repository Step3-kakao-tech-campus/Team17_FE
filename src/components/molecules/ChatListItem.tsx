import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ChatListItem';
import { useNavigate } from 'react-router-dom';

type ChatListItemProps = {
  chat: {
    chatRoomId: number;
    memberId: number;
    memberNickname: string;
    memberImage: string;
    chatContent: string;
    walkType: string;
    matchId: number;
  };
};

const ChatListItem = ({ chat }: ChatListItemProps) => {
  const navigate = useNavigate();
  // request url = api/chat/list
  console.log('chat', chat);

  const enterroom = () => {
    console.log('Apply clicked');
    navigate('/chatroom', {
      state: {
        userinfo: {
          name: memberNickname,
          userImage: memberImage,
          walkType: walkType,
        },
      },
    });
  };
  const { memberNickname, memberImage, chatContent, walkType } = chat;
  return (
    <S.Container onClick={enterroom}>
      <S.ProfileImgWrapper>
        <Image src={memberImage} alt="임시프로필이미지" size="4" />
      </S.ProfileImgWrapper>
      <S.TextWrapper>
        <div>
          <S.NameAndWalkTypeWrapper>
            {/*{memberNickname}*/}
            <span className="username">안녕</span>
            {/* 프로필 이름이 아닌 userId로 일단 대체*/}
            <span>산책 현황</span>&nbsp;
            {walkType === '산책중' ? (
              <span className="walking" />
            ) : (
              <span className="wait" />
            )}
          </S.NameAndWalkTypeWrapper>
        </div>
        <div>
          <S.ListChatText>
            <span>안녕{chatContent}</span>
          </S.ListChatText>
        </div>
      </S.TextWrapper>
    </S.Container>
  );
};

export default ChatListItem;
