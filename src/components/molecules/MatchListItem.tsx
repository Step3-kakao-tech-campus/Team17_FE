import Image from '../atoms/Image';
import * as S from '../../styles/molecules/MatchListItem';
import { PostChatRoom } from '../../apis/chat';
import { useNavigate } from 'react-router-dom';

interface Apply {
  id: number;
  certification: string;
  experience: string;
  matchId: number;
  notimemberId: number;
  member: Member;
}

interface Member {
  username: string;
  image: string;
  appMemberId: number;
}

type ListItemProps = {
  apply: Apply;
};

const MatchListItem = ({ apply }: ListItemProps) => {
  const navigate = useNavigate();
  const { matchId, notimemberId, certification, experience, member } = apply;

  const handleApply = () => {
    navigate(`/applyinquiry/${apply.id}`);
  };

  const handleAccept = () => {
    // 채팅방을 생성한다.
    PostChatRoom(notimemberId, member.appMemberId, matchId) //나중에 고치기
      .then((_response) => {
        navigate('/chatlist');
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          PostChatRoom(notimemberId, member.appMemberId, apply.id) //나중에 고치기
            .then((_response) => {
              navigate('/chatlist');
            })
            .catch((_error) => {
              navigate('/chatlist');
            });
        } else {
          navigate('/chatlist');
        }
      });
  };

  return (
    <S.Container>
      <S.UserInfo>
        <S.ProfileImgWrapper onClick={handleApply}>
          <Image
            src={member.image || '/images/default_profile.png'}
            size="4"
            alt="지원자 임시 이미지"
          />
        </S.ProfileImgWrapper>
        <S.TextWrapper onClick={handleApply}>
          <S.InfoWrapper>
            <S.ListTitle>닉네임 : {member.username}</S.ListTitle>
            <S.ListTitle>자격증 : {certification}</S.ListTitle>
            <S.ListTitle>경험 : {experience}</S.ListTitle>
          </S.InfoWrapper>
        </S.TextWrapper>
      </S.UserInfo>
      <S.ButtonWrapper>
        <S.AcceptButton onClick={handleAccept}>수락</S.AcceptButton>
        <S.RejectButton>거절</S.RejectButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default MatchListItem;
