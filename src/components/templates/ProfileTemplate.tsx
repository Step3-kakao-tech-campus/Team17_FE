import BottomNavBar from '../molecules/BottomNavBar';
import ProfileBanner from '../molecules/ProfileBanner';
import DogGrid from '../organisms/DogGrid';
import PostGrid from '../organisms/PostGrid';
import Profile from '../organisms/Profile';
import * as S from '../../styles/templates/ProfileTemplate';
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
      <S.Container>
        <ProfileBanner />
        <Profile profile={profile} />
        <DogGrid dogs={dogs} />
        <PostGrid posts={posts} />
        <BottomNavBar />
      </S.Container>
    </>
  );
};

export default ProfileTemplate;
