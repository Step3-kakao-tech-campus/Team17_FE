import { useQuery } from '@tanstack/react-query';
import ProfileTemplate from '../components/templates/ProfileTemplate';

const ProfilePage = () => {
  // const { data, error, isLoading } = useQuery(['/profile/notification']);
  const data = {
    response: {
      id: 1,
      nickname: 'Kevin',
      profile_img: 'https://~~.img23',
      profileContent: '안녕하세요~',
      dog_bowl: 50,
      dogCoin: 2400,
      dogs: [
        {
          id: 1,
          image: './images/dog-sample.png',
        },
        {
          id: 2,
          image: './images/dog-sample.png',
        },
        {
          id: 3,
          image: './images/dog-sample.png',
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
            image: './images/dog-sample.png',
          },
        },
        {
          id: 2,
          title: '귀여운 흰둥이 산책시키실 분',
          start: '2023-07-18T05:56:34.157+00:00',
          end: '2023-07-18T07:56:34.157+00:00',
          dog: {
            breed: '믹스견',
            age: 7,
            image: './images/dog-sample.png',
          },
        },
      ],
      application: [
        {
          id: 1,
          title: '시바견 3살 지원합니다',
          start: '2023-07-18T05:56:34.157+00:00',
          end: '2023-07-18T07:56:34.157+00:00',
          dog: {
            breed: '시바견',
            age: 3,
            image: './images/dog-sample.png',
          },
        },
        {
          id: 2,
          title: '저는 프로 산책러입니다.',
          start: '2023-07-18T05:56:34.157+00:00',
          end: '2023-07-18T07:56:34.157+00:00',
          dog: {
            breed: '믹스견',
            age: 7,
            image: './images/dog-sample.png',
          },
        },
      ],
      review: [
        {
          id: 1,
          title: '이 남자 뭐가 다르다.',
          start: '2023-07-18T05:56:34.157+00:00',
          end: '2023-07-18T07:56:34.157+00:00',
          dog: {
            breed: '시바견',
            age: 3,
            image: './images/dog-sample.png',
          },
        },
        {
          id: 2,
          title: '저희집 개가 그 날 이후로 너무 말을 잘 들어요',
          start: '2023-07-18T05:56:34.157+00:00',
          end: '2023-07-18T07:56:34.157+00:00',
          dog: {
            breed: '믹스견',
            age: 7,
            image: './images/dog-sample.png',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* <Suspense> */}
      <ProfileTemplate data={data.response} />
    </>
  );
};

export default ProfilePage;
