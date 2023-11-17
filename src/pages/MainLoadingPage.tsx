import styled from 'styled-components';
import Container from '../components/atoms/Container';
import SkeletonList from '../components/organisms/SkeletonList';

const MainLoadingPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Location />
      <Carousel />
      <SkeletonList />
    </Container>
  );
};

const Location = styled.div`
  width: 60%;
  height: 2rem;
  margin-top: 1rem;

  background-color: #f1f1f1;

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }

  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: wave 2s linear infinite;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

const Carousel = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #f1f1f1;
  margin-top: 1rem;
  margin-bottom: 2rem;

  background-color: #f1f1f1;

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }

  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: wave 2s linear infinite;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0.5rem auto;
  height: 2rem;

  background-color: #f1f1f1;

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
  }

  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: wave 2s linear infinite;

  @keyframes wave {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export default MainLoadingPage;
