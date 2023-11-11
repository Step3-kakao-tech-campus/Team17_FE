import * as S from '../../styles/molecules/ProfileBanner';
import Image from '../atoms/Image';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import LogoutModal from './LogoutModal';
type OwnerProp = {
  isOwner?: boolean;
};
const ProfileBanner = ({ isOwner }: OwnerProp) => {
  const navigate = useNavigate();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const handleLogo = () => {
    navigate('/');
  };

  const onLogoutClick = useCallback(() => {
    // removeLocalStorageItem('user');
    // removeLocalStorageItem('refresh');
    // // deleteCookie('user');
    // // deleteCookie('refresh');
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
              onLogoutClick();
            }}
          >
            로그아웃
          </S.LogoutButton>
        ) : (
          ''
        )}

        {isOpenModal ? (
          <LogoutModal onClickToggleModal={onLogoutClick}></LogoutModal>
        ) : (
          ''
        )}
      </S.Container>
    </>
  );
};

export default ProfileBanner;
