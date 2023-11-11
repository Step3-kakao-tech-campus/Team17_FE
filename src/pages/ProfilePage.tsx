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
      setIsOwner(false);
    } else {
      setIsOwner(true);
    }
    getProfile(myId)
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        if (err.message === 'refresh') {
          // 토큰만료 api재요청
          getProfile(myId)
            .then((res) => setData(res.data.response))
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  case 400:
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
        } else {
          switch (err.status) {
            case 400:
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
