import * as S from '../../styles/pages/onBoardingPage';

type OnBoardingProps = {
  innerTextTop: string;
  innerTextBottom: string;
  children: React.ReactNode;
  className?: string;
};

const OnBoarding = ({
  innerTextTop,
  innerTextBottom,
  children,
}: OnBoardingProps) => {
  return (
    <S.Container>
      <S.DogPawWrapper>
        <img src="/images/paw1.png" alt="dog paw" className="dog__paw" />
        <img
          src="/images/paw2.png"
          alt="dog paw"
          className="dog__paw lignt-color"
        />
      </S.DogPawWrapper>
      <S.ImgWrapper className="container__image">{children}</S.ImgWrapper>
      <S.Description>
        {innerTextTop}
        <br />
        {innerTextBottom}
      </S.Description>
    </S.Container>
  );
};

export default OnBoarding;
