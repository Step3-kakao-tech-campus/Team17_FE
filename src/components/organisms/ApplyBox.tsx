import * as S from '../../styles/organisms/ApplyBox';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useMutation } from 'react-query';
// import { PostReview } from '../../apis/review';

const ApplyBox = () => {
  const [intro, setIntro] = useState('');
  const [certification, setCertification] = useState('');
  const [experience, setExperience] = useState('');

  const navigate = useNavigate();
  const handleApplySubmit = () => {
    navigate('/applysubmit');
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
        <S.Title>&nbsp;&nbsp;&nbsp;지원서를 작성해주세요</S.Title>
        <S.ProfileWrapper>
          <S.ProfileImage
            src="/images/dog-sample.png"
            alt="지원자 프로필"
            size="4"
            className="apply__profile"
          />
          <span className="apply__name">댕댕죠아</span>
        </S.ProfileWrapper>

        <S.IntroWrapper>
          <S.ApplyTitle>자기소개</S.ApplyTitle>
          <S.ApplyContent
            placeholder="ex : 안녕하세요 저는 애견 미용사로 2년간 재직중인 댕댕죠아라고 합니다!"
            name="intro"
            id="intro"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          ></S.ApplyContent>
        </S.IntroWrapper>

        <S.border></S.border>

        <S.ApplyWrapper>
          <S.ApplyTitle>자격증</S.ApplyTitle>
          <S.ApplyContent
            placeholder="ex : 애견 미용 자격증 보유"
            name="certification"
            id="certification"
            value={certification}
            onChange={(e) => setCertification(e.target.value)}
          ></S.ApplyContent>
        </S.ApplyWrapper>

        <S.border></S.border>

        <S.ApplyWrapper>
          <S.ApplyTitle>관련 경험</S.ApplyTitle>
          <S.ApplyContent
            placeholder="ex : 애견 미용원에 2년간 재직하였습니다"
            name="experience"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          ></S.ApplyContent>
        </S.ApplyWrapper>

        <S.ButtonWrapper onClick={handleApplySubmit}>
          <S.Button>지원 완료하기</S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Container>
  );
};

export default React.memo(ApplyBox);
