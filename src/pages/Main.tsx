import Location from '../components/molecules/Location';
import Carousel from '../components/molecules/Carousel';
import BottomNavBar from '../components/molecules/BottomNavBar';
import MainListTemplate from '../components/templates/MainListTemplate';
import * as S from '../styles/layout/MainLayout';
import MainGNB from '../components/organisms/MainGNB';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, Suspense } from 'react';
import { AppDispatch, RootState } from '../store';
import { setUser } from '../store/slices/userSlice';
import { getLocalStorage } from '../utils/localStorage';
import { fetchNotifications } from '../apis/notification';
import { useQuery } from 'react-query';
import MainListLoading from '../components/molecules/MainListLoading';
import useGeolocation from '../hooks/useGeolocation';

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const location = useGeolocation();
  
  // 사용자가 메인 페이지에 접근했을 때 브라우저에서 사용자 로그인 상태 확인
  // const dispatch = useDispatch<AppDispatch>();
  // const user = useSelector((state: RootState) => state.user.user);
  // useEffect(() => {
  //   try {
  //     const userStorage = getLocalStorage('user');
  //     const isLogin = userStorage ? JSON.parse(userStorage) : null;
  //     if (isLogin) {
  //       // 로그인이 된 상태, 상태값 저장
  //       dispatch(setUser({ user: isLogin.value }));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [dispatch, user]);

  return (
    <S.Container>
      <MainGNB setModalOpen={setModalOpen} />
      <Location location={location} address={address} setAddress={setAddress}/>
      <Carousel />
      <Suspense fallback={<MainListLoading />}>
      <MainListTemplate address={address} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </Suspense>
      <BottomNavBar />
    </S.Container>
  );
};

export default Main;
