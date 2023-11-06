import BottomNavBar from '../molecules/BottomNavBar';
import ProfileBanner from '../molecules/ProfileBanner';
import DogGrid from '../organisms/DogGrid';
import PostGrid from '../organisms/PostGrid';
import Profile from '../organisms/Profile';
interface ProfileData {
  data: {
    id: number;
    nickname: string;
    profileImg: string;
    profileContent: string;
    dogBowl: number;
    coin: number;
    dogs: Dog[];
    notifications: NotificationProps[] | null;
    applications: ApplicationProps[] | null;
    reviews: ReviewProps[] | null;
  };
  isOwner: boolean;
}

// 개 데이터의 타입을 정의
interface Dog {
  id: number;
  image: string;
}
interface notiDog {
  breed: string;
  age: number;
  image: string;
}

interface NotificationProps {
  id: number;
  title: string;
  start: string;
  end: string;
  dog: notiDog;
}
interface ApplicationProps {
  id: number;
  aboutMe: string;
  certification: string;
  experience: string;
}
interface ReviewProps {
  id: number;
  reviewContent: string;
  reviewTime: string;
  writerImg: string;
}

const ProfileTemplate = ({ data, isOwner }: ProfileData) => {
  const {
    id,
    nickname,
    profileImg,
    profileContent,
    dogBowl,
    coin,
    notifications,
    reviews,
    applications,
  } = data;
  const dogs = data.dogs;
  // const { notifications, applications, reviews } = data;
  return (
    <>
      <ProfileBanner isOwner={isOwner} />
      <Profile
        id={id}
        nickname={nickname}
        profileImg={profileImg}
        profileContent={profileContent}
        dogBowl={dogBowl}
        coin={coin}
        isOwner={isOwner}
      />
      <DogGrid dogs={dogs} isOwner={isOwner} />
      <PostGrid
        notificationList={notifications}
        applicationList={applications}
        reviewList={reviews}
        isOwner={isOwner}
      />
      <BottomNavBar />
    </>
  );
};

export default ProfileTemplate;
