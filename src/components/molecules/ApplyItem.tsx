import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import { useNavigate } from 'react-router-dom';

type ListItemProps = {
  apply: {
    title: string;
    memberId: number;
    memberNickname: string;
    notificationId: number;
    memberImage: string;
    aboutMe: string;
    certification: string;
    experience: string;
  };
};

const ApplyItem = ({ apply }: ListItemProps) => {
  console.log('apply', apply);

  const navigate = useNavigate();
  const {
    title,
    memberNickname,
    notificationId,
    memberImage,
    aboutMe,
    certification,
    experience,
  } = apply;

  // const location = useLocation();
  // const state = location.state as { notificationId: string };
  // const notificationId = state.notificationId;
  const handleApplySubmit = () => {
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
        <S.Title>{title}</S.Title>
        <S.ProfileWrapper>
          <S.ProfileImgWrapper>
            <Image
              src={memberImage || '/images/default_profile.png'}
              alt="지원자 임시 이미지"
              size="4"
            />
          </S.ProfileImgWrapper>
          <span className="apply__name">{memberNickname}</span>
        </S.ProfileWrapper>

        <S.IntroWrapper>
          <S.ApplyTitle>자기소개</S.ApplyTitle>
          {aboutMe}
        </S.IntroWrapper>

        <S.border></S.border>

        <S.ApplyWrapper>
          <S.ApplyTitle>자격증</S.ApplyTitle>
          {certification}
        </S.ApplyWrapper>
        <S.border></S.border>
        <S.ApplyWrapper>
          <S.ApplyTitle>관련 경험</S.ApplyTitle>
          {experience}
        </S.ApplyWrapper>

        <S.ButtonWrapper onClick={handleApplySubmit}>
          <S.Button>공고글 보러가기</S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Container>
  );
};

export default ApplyItem;
