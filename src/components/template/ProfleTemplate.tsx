import ProfileBanner from '../molecules/ProfileBanner';
import DogGrid from '../organisms/DogGrid';
import NotificationGrid from '../organisms/NotificationGrid';
import Profile from '../organisms/Profile';
import styled from 'styled-components';

// api/profile/notification
// 프로필 데이터를 담을 인터페이스 정의
// type Dog = {
//   id: number;
//   image: string;
// }

// type Notification  = {
//   id: number;
//   title: string;
//   start: string;
//   end: string;
//   dog: {
//     breed: string;
//     age: number;
//     image: string;
//   };
// }

// type ProfileData = {
//   id: number;
//   nickname: string;
//   profile_img: string;
//   profileContent: string;
//   dog_bowl: number;
//   dogs: Dog[];
//   notifications: Notification[];
// }

// type ResponseData  = {
//   success: boolean;
//   response: ProfileData;
//   error: null | string;
// }

const ProfileTemplate = ({ data }) => {
  const profiledata = data;
  const dogdata = data.dogs;
  const notificationdata = data.notifications;
  return (
    <>
      <StyleProfileContainer>
        <StyledBanner>
          <ProfileBanner />
        </StyledBanner>
        <StyledProfile>
          <Profile className="" data={profiledata} />
        </StyledProfile>
        <StyledDogGrid>
          <DogGrid dogs={dogdata} />
        </StyledDogGrid>
        <StyleNotificationGrid>
          <NotificationGrid className="" notification={notificationdata} />
        </StyleNotificationGrid>
      </StyleProfileContainer>
    </>
  );
};

export default ProfileTemplate;

const StyledBanner = styled.div`
  border-bottom: 1px solid #d3d3d3;
  height: 10vh;
  width: 50vw;
`;
const StyledProfile = styled.div`
  border-bottom: 1px solid #d3d3d3;
  height: 25vh;
  width: 50vw;
`;
const StyledDogGrid = styled.div`
  border-bottom: 1px solid #d3d3d3;
  height: 25vh;
  width: 50vw;
`;
const StyleNotificationGrid = styled.div`
  border-bottom: 1px solid #d3d3d3;
  background-color: #f0f0f0;
  width: 50vw;
  /* height: 25vh; */
`;
const StyleProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* place-items: unset; */
  min-height: 90vh;
  width: 100vw;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
`;
