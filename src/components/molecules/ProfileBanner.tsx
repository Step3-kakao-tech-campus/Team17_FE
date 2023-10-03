import styled from 'styled-components';

const ProfileBanner = () => {
  return (
    <>
      <StyledDiv>
        <img src="./images/dog.png" alt="" />
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
  margin-left: 5vh;
  h1 {
    margin-left: 20px;
  }
`;
