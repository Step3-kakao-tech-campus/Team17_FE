import { useQuery } from 'react-query';
import ProfileTemplate from '../components/templates/ProfileTemplate';
import Container from '../components/atoms/Container';
import { getProfile } from '../apis/profile';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Spinner } from '@phosphor-icons/react';
import PageLoading from '../components/atoms/PageLoading';
import SkeletonProfile from '../components/molecules/SkeletonProfile';

const ProfilePage = () => {
  const { state } = useLocation();
  const myId = state ? state.userId : -1;
  console.log('state', state);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  // const { data, error } = useQuery(
  //   ['profile'],
  //   () => getProfile(),
  //   // getProfile(1),
  // );
  const [data, setData] = useState();
  useEffect(() => {
    if (state?.userId !== null) {
      console.log('userId', state?.userId);
      setIsOwner(true);
    }
    getProfile(myId)
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  // 내 프로필이라면

  // undefined 에러가 뜬다면 삼항연산자로 getProfile을 해주면된다.
  if (data) {
    console.log('프로필data', data);
  }

  return (
    <>
      {data ? (
        <Container>
          <ProfileTemplate data={data} isOwner={isOwner} />
        </Container>
      ) : (
        <SkeletonProfile />
      )}
    </>
  );
};

export default ProfilePage;
