import styled from 'styled-components';
import Photo from '../atoms/Photo';
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
  margin-top: 3vh;
  margin-left: 3vw;
  & > h1 {
    margin-left: 10px;
  }
  /* flex-direction:column; */
  /* align-items: */
  /* flex-direction: row; */

  /* margin-top: 2.5vh;
  margin-left: 10vh;
  h1 {
    margin-left: 20px;
  } */
`;
