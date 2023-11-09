import { House, ChatsCircle, User } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/BottomNavBar';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

// 하단 네비게이션 바
const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const selectedColor = '#A59D52';
  const unselectedColor = '#999999';

  // 클릭 시 해당 페이지로 이동
  const handleActive = useCallback((page: string) => {
    navigate(page);
  }, []);

  return (
    <S.Container>
      <S.NavItemWrapper onClick={() => handleActive('/')}>
        <House
          size={25}
          weight={pathname === '/' ? 'fill' : 'regular'}
          color={pathname === '/' ? selectedColor : unselectedColor}
        />
        <S.BottomNavText className={pathname === '/' ? 'active' : ''}>
          home
        </S.BottomNavText>
      </S.NavItemWrapper>
      <S.NavItemWrapper onClick={() => handleActive('/chatlist')}>
        <ChatsCircle
          size={25}
          weight={pathname === '/chatlist' ? 'fill' : 'regular'}
          color={pathname === '/chatlist' ? selectedColor : unselectedColor}
        />
        <S.BottomNavText className={pathname === '/chatlist' ? 'active' : ''}>
          chat
        </S.BottomNavText>
      </S.NavItemWrapper>
      <S.NavItemWrapper onClick={() => handleActive('/profile')}>
        <User
          size={25}
          weight={pathname === '/profile' ? 'fill' : 'regular'}
          color={pathname === '/profile' ? selectedColor : unselectedColor}
        />
        <S.BottomNavText className={pathname === '/profile' ? 'active' : ''}>
          profile
        </S.BottomNavText>
      </S.NavItemWrapper>
    </S.Container>
  );
};

export default React.memo(BottomNavBar);
