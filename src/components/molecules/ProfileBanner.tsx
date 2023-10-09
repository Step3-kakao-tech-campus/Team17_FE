import styled from 'styled-components';
import Image from '../atoms/Image';
const ProfileBanner = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Image src="./images/dog.png" alt="배너이미지" size="1.5" />
          <h1>모르는 개 산책</h1>
        </TitleWrapper>
        <button>로그아웃</button>
      </Container>
    </>
  );
};

export default ProfileBanner;

const Container = styled.div`
  display: flex;
  padding: 1rem 0 1rem 1rem;
  & > button {
    background-color: transparent;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 85%;
  }

  & > h1 {
    margin-left: 1rem;
  }
`;
