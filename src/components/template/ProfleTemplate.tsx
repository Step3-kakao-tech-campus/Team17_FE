import ProfileBanner from '../molecules/ProfileBanner';
import DogGrid from '../organisms/DogGrid';
import NotificationGrid from '../organisms/NotificationGrid';
import Profile from '../organisms/Profile';
import styled from 'styled-components';
// api/profile/notification
// "response":
// 		{
//         "id": 1,
//         "nickname": "Kevin",
//         "profileContent": "안녕하세요~",
//         "dog_bowl": 50,
//         "dogs": [
// 									{
// 										"id": 1,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 									{
// 										"id": 2,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 									{
// 										"id": 3,
// 	 									"image" : "basicProfile_47838475947393908393.png",
// 									},
// 								],
// 					"notifications": [
// 									{
// 										"id": 1,
// 	 									"title" : "귀여운 복슬이 산책시키실 분",
// 								    "start": "2023-07-18T05:56:34.157+00:00",
// 							      "end": "2023-07-18T07:56:34.157+00:00",
// 										"dog": {
// 												"breed" : "시바견",
// 												"age" : 3,
// 			 									"image" : "basicProfile_47838475947393908393.png",
// 												},
// 									},
// 									{
// 										"id": 2,
// 	 									"title" : "귀여운 흰둥이 산책시키실 분",
// 								    "start": "2023-07-18T05:56:34.157+00:00",
// 							      "end": "2023-07-18T07:56:34.157+00:00",
// 										"dog": {
// 												"breed" : "믹스견",
// 												"age" : 7,
// 			 									"image" : "basicProfile_47838475947393908393.png",
// 												},
// 									},
// 								],
const ProfileTemplate = () => {
  return (
    <>
      <StyleProfileContainer>
        <StyledBanner>
          <ProfileBanner />
        </StyledBanner>
        <StyledProfile>
          <Profile className="" />
        </StyledProfile>
        <StyledDogGrid>
          <DogGrid />
        </StyledDogGrid>
        <StyleNotificationGrid>
          <NotificationGrid className="" />
        </StyleNotificationGrid>
      </StyleProfileContainer>
    </>
  );
};

export default ProfileTemplate;

const StyledBanner = styled.div`
  height: 10vh;
`;
const StyledProfile = styled.div`
  height: 25vh;
`;
const StyledDogGrid = styled.div`
  height: 25vh;
`;
const StyleNotificationGrid = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;
const StyleProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: unset;
  min-height: 90vh;
  width: 100vw;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
`;
