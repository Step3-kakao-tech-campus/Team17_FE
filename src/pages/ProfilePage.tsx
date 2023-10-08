import { useQuery } from '@tanstack/react-query';
import ProfileTemplate from '../components/template/ProfleTemplate';

const ProfilePage = () => {
  // const { data, error, isLoading } = useQuery(['/profile/notification']);
  const data = {
    success: true,
    response: {
      id: 1,
      nickname: 'Kevin',
      profile_img: 'https://~~.img23',
      profileContent: '안녕하세요~',
      dog_bowl: 50,
      dogs: [
        {
          id: 1,
          image: 'basicProfile_47838475947393908393.png',
        },
        {
          id: 2,
          image: 'basicProfile_47838475947393908393.png',
        },
        {
          id: 3,
          image: 'basicProfile_47838475947393908393.png',
        },
      ],
      notifications: [
        {
          id: 1,
          title: '귀여운 복슬이 산책시키실 분',
          start: '2023-07-18T05:56:34.157+00:00',
          end: '2023-07-18T07:56:34.157+00:00',
          dog: {
            breed: '시바견',
            age: 3,
            image: 'basicProfile_47838475947393908393.png',
          },
        },
        {
          id: 2,
          title: '귀여운 흰둥이 산책시키실 분',
          start: '2023-07-18T05:00:34.157+00:00',
          end: '2023-07-18T07:00:34.157+00:00',
          dog: {
            breed: '믹스견',
            age: 7,
            image: 'basicProfile_47838475947393908393.png',
          },
        },
      ],
    },
    error: null,
  };

  return (
    <>
      {/* <Suspense> */}
      <ProfileTemplate data={data.response} />
      {/* </Suspense> */}
    </>
  );
};

export default ProfilePage;
