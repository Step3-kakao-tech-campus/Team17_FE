import Button from '../atoms/Button';
import * as S from '../../styles/pages/onboarding/onBoarding';
import { useNavigate } from 'react-router-dom';

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
  className,
}: OnBoardingProps) => {
  const navigate = useNavigate();

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
      <Button
        className="onboard__button"
        onClick={() => {
          className === 'last__onboarding' ? navigate('/') : null;
        }}
      >
        {className === 'last__onboarding' ? 'Start!' : 'Next'}
      </Button>
    </S.Container>
  );
};

export default OnBoarding;
