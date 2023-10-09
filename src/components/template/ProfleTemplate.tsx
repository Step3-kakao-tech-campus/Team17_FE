import BottomNavBar from '../molecules/BottomNavBar';
import ProfileBanner from '../molecules/ProfileBanner';
import DogGrid from '../organisms/DogGrid';
import ProfileContents from '../organisms/NotificationGrid';
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
  const contents = data.notifications;
  return (
    <>
      <Container>
        <ProfileBanner />
        <Profile className="" data={profiledata} />
        <DogGrid dogs={dogdata} />
        <ProfileContents className="" contents={contents} />
        <BottomNavBar />
      </Container>
    </>
  );
};

export default ProfileTemplate;

const Container = styled.div`
  height: 100vh;
  @media screen and (min-width: 768px) {
    width: 78vw;
    margin: 0 10vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
