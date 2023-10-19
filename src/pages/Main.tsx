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
import { useDebounce } from '../hooks/useDebounce';
import axios from 'axios';

type Filter = {
  size: string[];
  breed: string[];
};

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notificationList, setNotificationList] = useState<Array<Notification>>(
    [],
  );
  const [search, setSearch] = useState('');
  const [address, setAddress] = useState('');
  const location = useGeolocation();
  const [selectedFilter, setSelectedFilter] = useState<Filter>({
    size: [],
    breed: [],
  });

  // 사용자가 검색창을 입력하면 검색어를 서버로 전송하여 검색 결과를 받아온다.
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      fetchSearchNotifications(debouncedSearch);
    }
  }, []);

  const fetchSearchNotifications = async (searchTerm: string) => {
    const filterUrlTerm = selectedFilter.size
      .map((size, idx) => {
        if (idx === selectedFilter.size.length - 1) {
          return `size=${size}`;
        } else {
          return `size=${size}&`;
        }
      })
      .concat(
        selectedFilter.breed.map((breed, idx) => {
          if (idx === selectedFilter.breed.length - 1) {
            return `breed=${breed}`;
          } else {
            return `breed=${breed}&`;
          }
        }),
      );

    try {
      const response = await axios.get(
        `api/home?${filterUrlTerm}&word=${searchTerm}`, // 예시 코드
      );
      setNotificationList(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

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
      <MainGNB
        setModalOpen={setModalOpen}
        search={search}
        setSearch={setSearch}
      />
      <Location location={location} address={address} setAddress={setAddress} />
      <Carousel />
      <Suspense fallback={<MainListLoading />}>
        <MainListTemplate
          address={address}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          search={search}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </Suspense>
      <BottomNavBar />
    </S.Container>
  );
};

export default Main;
