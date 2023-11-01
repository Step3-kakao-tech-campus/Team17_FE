import Image from '../atoms/Image';
import * as S from '../../styles/molecules/ApplyInquiryBox';
import { useNavigate } from 'react-router-dom';
// import { useMutation } from 'react-query';
// import { PostReview } from '../../apis/review';

interface Apply {
  name: string;
  intro: string;
  certification: string;
  experience: string;
  image: string;
}

type ListItemProps = {
  apply: Apply;
};

const ApplyItem = ({ apply }: ListItemProps) => {
  const { image, name, intro, certification, experience } = apply;

  const navigate = useNavigate();
  const handleApplySubmit = () => {
    navigate('/matchlist');
  };

  // TODO: 서버 연결 확인 필요
  // const handlePostReview = () => {
  //   const postReview = {
  //     memberId: 0,
  //     receiveMemberId: 1,
  //     reviewContent: review,
  //   };

  //   console.log('postReview', postReview);
  //   mutate(postReview, {
  //     onSuccess: () => {
  //       console.log('지원 완료');
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   });
  // };

  return (
    <S.Container>
      <div>
        <S.Title></S.Title>
        <S.ProfileWrapper>
          <S.ProfileImgWrapper>
            <Image src={image} alt="Applicant temporary image" />
          </S.ProfileImgWrapper>
          <span className="apply__name">{name}</span>
        </S.ProfileWrapper>

        <S.IntroWrapper>
          <S.ApplyTitle>자기소개</S.ApplyTitle>
          <S.ApplyContent>{intro}</S.ApplyContent>
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
          <S.Button>지원서 조회 완료하기</S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Container>
  );
};

export default ApplyItem;
