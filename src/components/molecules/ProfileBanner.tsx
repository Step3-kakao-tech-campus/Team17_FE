import styled from 'styled-components';
import Photo from '../atoms/Picture';
const ProfileBanner = () => {
  return (
    <>
      <StyledDiv>
        <Photo src="./images/dog.png" alt="배너이미지" />
        <h1>모르는 개 산책</h1>
      </StyledDiv>
    </>
  );
};

export default ProfileBanner;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.5vh;
  margin-left: 10vh;
  h1 {
    margin-left: 20px;
  }
`;
