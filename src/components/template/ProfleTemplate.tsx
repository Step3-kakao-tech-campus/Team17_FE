import BottomNavBar from '../molecules/BottomNavBar';
import ProfileBanner from '../molecules/ProfileBanner';
import DogGrid from '../organisms/DogGrid';
import PostGrid from '../organisms/PostGrid';
import Profile from '../organisms/Profile';
import styled from 'styled-components';
type DetailDog = {
  breed: string;
  age: number;
  image: string;
};
type Dogs = {
  id: number;
  image: string;
};
type Post = {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: DetailDog;
};
type dataProps = {
  data: {
    id: number;
    nickname: string;
    profile_img: string;
    profileContent: string;
    dog_bowl: number;
    dogCoin: number;
    dogs: Dogs[];
    notifications: Post[];
    application: Post[];
    review: Post[];
  };
};

const ProfileTemplate = ({ data }: dataProps) => {
  const profile = data;
  const dogs = data.dogs;
  const posts = data;
  return (
    <>
      <Container>
        <ProfileBanner />
        <Profile profile={profile} />
        <DogGrid dogs={dogs} />
        <PostGrid posts={posts} />
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
