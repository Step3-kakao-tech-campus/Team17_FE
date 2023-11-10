import { PropsWithChildren } from 'react';
import * as S from '../../styles/molecules/LogoutModal';
import { SignOut } from '@phosphor-icons/react';
import { removeLocalStorageItem } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';

type ModalDefaultType = {
  onClickToggleModal: () => void;
};

export default function LogoutModal({
  onClickToggleModal,
}: PropsWithChildren<ModalDefaultType>) {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeLocalStorageItem('user');
    removeLocalStorageItem('refresh');
    // // deleteCookie('user');
    // // deleteCookie('refresh');
    navigate('/');
  };
  return (
    <S.ModalContainer>
      <S.DialogBox>
        <SignOut size={32} />
        <span className="login">로그아웃</span>
        <span className="login_req">로그아웃 하시겠습니까?</span>
        <S.ButtonContainer>
          <S.CancelButton onClick={() => onClickToggleModal()}>
            취소
          </S.CancelButton>
          <S.LogoutButton onClick={() => handleLogout()}>
            로그아웃
          </S.LogoutButton>
        </S.ButtonContainer>
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          onClickToggleModal();
        }}
      />
    </S.ModalContainer>
  );
}
