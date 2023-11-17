import Image from '../atoms/Image';
import * as S from '../../styles/molecules/MatchListItem';
import { PostChatRoom } from '../../apis/chat';
import { useNavigate } from 'react-router-dom';

interface Apply {
  certification: string;
  experience: string;
  matchId: number;
  notiMemberId: number;
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
  const { matchId, notiMemberId, certification, experience, member } = apply;
  // console.log('appl', apply);

  const handleApply = () => {
    navigate(`/applyinquiry`, {
      state: {
        applicationId: apply.matchId,
      },
    });
  };

  const handleAccept = () => {
    // console.log('notimemberId', notiMemberId);
    // console.log('member.appMemberId', member.appMemberId);
    // console.log('matchId', matchId);
    // 채팅방을 생성한다.
    PostChatRoom(notiMemberId, member.appMemberId, matchId) //나중에 고치기
      .then((_response) => {
        alert('매칭완료!');
        // console.log('채팅방 생성 완료!', response);
        navigate('/chatlist');
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          PostChatRoom(notiMemberId, member.appMemberId, apply.matchId) //나중에 고치기
            .then((_response) => {
              navigate('/chatlist');
            })
            .catch((_error) => {
              alert('매칭에 실패했습니다.');
            });
        } else {
          alert('매칭에 실패했습니다.');
        }
      });
  };

  return (
    <S.Container>
      <S.UserInfo onClick={handleApply} style={{ width: '70%' }}>
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
