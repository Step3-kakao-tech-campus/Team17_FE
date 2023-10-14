import { House, ChatsCircle, User } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/BottomNavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 하단 네비게이션 바
const BottomNavBar = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  // 클릭 시 해당 페이지로 이동
  const handleActive = (index: number) => {
    setActive(index);

    switch (index) {
      case 0:
        navigate('/')
        break;
      case 1: // chat
        navigate('/chatlist')
        break;
      case 2: // profile
        navigate('/profile')
        break;
      default:
        break;
    }
  };

  return (
    <S.Container>
      <S.NavItemWrapper onClick={() => handleActive(0)}>
        <House
          size={25}
          weight={active === 0 ? 'fill' : 'regular'}
          color={active === 0 ? '#A59D52' : '#999999'}
        />
        <S.BottomNavText className={active === 0 ? 'active' : ''}>
          home
        </S.BottomNavText>
      </S.NavItemWrapper>
      <S.NavItemWrapper onClick={() => handleActive(1)}>
        <ChatsCircle
          size={25}
          weight={active === 1 ? 'fill' : 'regular'}
          color={active === 1 ? '#A59D52' : '#999999'}
        />
        <S.BottomNavText className={active === 1 ? 'active' : ''}>
          chat
        </S.BottomNavText>
      </S.NavItemWrapper>
      <S.NavItemWrapper onClick={() => handleActive(2)}>
        <User
          size={25}
          weight={active === 2 ? 'fill' : 'regular'}
          color={active === 2 ? '#A59D52' : '#999999'}
        />
        <S.BottomNavText className={active === 2 ? 'active' : ''}>
          profile
        </S.BottomNavText>
      </S.NavItemWrapper>
    </S.Container>
  );
};

export default BottomNavBar;
