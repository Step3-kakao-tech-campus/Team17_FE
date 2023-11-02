import { useQuery } from 'react-query';
import ProfileTemplate from '../components/templates/ProfileTemplate';
import Container from '../components/atoms/Container';
import { getProfile } from '../apis/profile';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProfilePage = () => {
  const { state } = useLocation();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const { data, error, isLoading } = useQuery(
    ['/profile'],
    () => getProfile(state?.userId),
    // getProfile(1),
  );
  // 내 프로필이라면
  useEffect(() => {
    if (state?.userId !== null) {
      setIsOwner(true);
    }
  }, [state?.userId]);

  // undefined 에러가 뜬다면 삼항연산자로 getProfile을 해주면된다.
  if (isLoading) {
    return <div>Check</div>;
  }
  if (error) {
    console.log('error :', error);
  }
  if (data) {
    console.log('data', data);
  }
  return (
    <Container>
      {/* <Suspense> */}
      {data && <ProfileTemplate data={data.data.response} isOwner={isOwner} />}
      {/* <div>test</div> */}
    </Container>
  );
};

export default ProfilePage;
