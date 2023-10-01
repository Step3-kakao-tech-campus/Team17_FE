import * as S from '../../styles/pages/onboarding/onBoarding';

const OnBoarding = () => {
  return (
    <S.Container>
      {/* <img src="/images/paw1.png" alt="dog paw" className="dog__paw" /> */}
      <S.ImgContainer className="container__image">
        <img src="/images/cloud.png" alt="cloud" className="image__cloud" />
        <div>
          <img
            src="/images/onboard_dog.png"
            alt="onboard dog"
            className="image__dog"
          />
          <img
            src="/images/onboard_location.png"
            alt="location pin"
            className="image__pin"
          />
        </div>
      </S.ImgContainer>
      <S.Description className="container__text">
        <p className="text__description">
          클릭 한 번으로
          <br />
          반려동물 산책을 신청해보세요!
        </p>
      </S.Description>
    </S.Container>
  );
};

export default OnBoarding;
