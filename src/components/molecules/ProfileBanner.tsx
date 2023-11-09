import * as S from '../../styles/molecules/ProfileBanner';
import { removeLocalStorageItem } from '../../utils/localStorage';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';

type OwnerProp = {
  isOwner?: boolean;
};
const ProfileBanner = ({ isOwner }: OwnerProp) => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate('/');
  };

  return (
    <>
      <S.Container>
        <S.TitleWrapper onClick={handleLogo}>
          <Image src="./images/dog.png" alt="배너이미지" size="1.5" />
          <h1>모르는 개 산책</h1>
        </S.TitleWrapper>
        {/* CHECK : 'user' 값이 맞는지 */}
        {isOwner ? (
          <S.LogoutButton
            onClick={() => {
              removeLocalStorageItem('user');
              removeLocalStorageItem('refresh');
              // deleteCookie('user');
              // deleteCookie('refresh');
              navigate('/');
            }}
          >
            로그아웃
          </S.LogoutButton>
        ) : (
          <div></div>
        )}
      </S.Container>
    </>
  );
};

export default ProfileBanner;
