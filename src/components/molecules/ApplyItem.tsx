import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import { useLocation, useNavigate } from 'react-router-dom';

// import { useMutation } from 'react-query';

type ListItemProps = {
  apply: {
    title: string;
    memberId: number;
    memberImage: string;
    aboutMe: string;
    certification: string;
    experience: string;
  };
};

const ApplyItem = ({ apply }: ListItemProps) => {
  console.log('apply', apply);
  const { title, memberId, memberImage, aboutMe, certification, experience } =
    apply;

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { notificationId: string };
  const notificationId = state.notificationId;
  const handleApplySubmit = () => {
    // navigate('/DetailNotificationPage');
    // 주석은 notificationId가 추가되었을 때이다.
    console.log('공고글 상세 페이지로 이동', notificationId);
    navigate(`/notification/${notificationId}`, {
      state: {
        notificationId: notificationId,
      },
    });
  };

  return (
    <S.Container>
      <div>
        <S.Title>제목{title}</S.Title>
        <S.ProfileWrapper>
          <S.ProfileImgWrapper>
            <Image src={memberImage} alt="지원자 임시 이미지" />
          </S.ProfileImgWrapper>
          <span className="apply__name">{memberId}</span>
        </S.ProfileWrapper>

        <S.IntroWrapper>
          <S.ApplyTitle>자기소개</S.ApplyTitle>
          <S.ApplyContent>{aboutMe}</S.ApplyContent>
        </S.IntroWrapper>

        <S.border></S.border>

        <S.ApplyWrapper>
          <S.ApplyTitle>자격증</S.ApplyTitle>
          <S.ApplyContent>{certification}</S.ApplyContent>
        </S.ApplyWrapper>
        <S.border></S.border>
        <S.ApplyWrapper>
          <S.ApplyTitle>관련 경험</S.ApplyTitle>
          <S.ApplyContent>{experience}</S.ApplyContent>
        </S.ApplyWrapper>

        <S.ButtonWrapper onClick={handleApplySubmit}>
          <S.Button>공고글 보러가기</S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Container>
  );
};

export default ApplyItem;
