import ProfileTemplate from '../components/templates/ProfileTemplate';
import Container from '../components/atoms/Container';
import { getProfile } from '../apis/profile';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SkeletonProfile from '../components/molecules/SkeletonProfile';

const ProfilePage = () => {
  // /profile
  const { state } = useLocation();
  const navigate = useNavigate();
  const myId = state ? state.userId : -1;
  const [isOwner, setIsOwner] = useState<boolean>(false);
  // const { data, error } = useQuery(
  //   ['profile'],
  //   () => getProfile(),
  //   // getProfile(1),
  // );
  const [data, setData] = useState();
  useEffect(() => {
    if (state !== null) {
      console.log('userId', state?.userId);
      setIsOwner(false);
    } else {
      setIsOwner(true);
    }
    getProfile(myId)
      .then((res) => {
        setData(res.data.response);
        console.log('res', res.data.response);
      })
      .catch((err) => {
        if (err.message === 'refresh') {
          // 토큰만료 api재요청
          console.log('이거됐당');
          getProfile(myId)
            .then((res) => setData(res.data.response))
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  case 400:
                    console.log(err.data.error.message);
                    alert('잘못된 유저입니다.');
                    navigate(-1);
                    break;
                  default:
                    alert('프로필 정보를 불러오는 데 실패했습니다.');
                    navigate('/signin');
                    break;
                }
              }
            });
        } else if (err) {
          switch (err.status) {
            case 400:
              console.log(err.data.error.message);
              alert('잘못된 유저입니다.');
              navigate(-1);
              break;
            default:
              alert('프로필 정보를 불러오는 데 실패했습니다.');
              navigate('/signin');
              break;
          }
        }
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
