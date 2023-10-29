import Location from '../components/molecules/Location';
import Carousel from '../components/molecules/Carousel';
import BottomNavBar from '../components/molecules/BottomNavBar';
import MainListTemplate from '../components/templates/MainListTemplate';
import MainGNB from '../components/organisms/MainGNB';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { AppDispatch, RootState } from '../store';
// import { setUser } from '../store/slices/userSlice';
// import { getLocalStorage } from '../utils/localStorage';
// import { fetchNotifications } from '../apis/notification';
// import { useQuery } from 'react-query';
import useGeolocation from '../hooks/useGeolocation';
import SkeletonList from '../components/organisms/SkeletonList';
import axios from 'axios';
import Container from '../components/atoms/Container';

type Filter = {
  size: string[];
  breed: string[];
};

interface Notification {
  dog: {
    name: string;
    sex: string;
    breed: string;
    image: string;
    size: string;
    age: number;
  };
  title: string;
  dog_bowl: number;
  id: number;
  lng: number;
  lat: number;
}

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [address, setAddress] = useState('');
  const location = useGeolocation();
  const [selectedFilter, setSelectedFilter] = useState<Filter>({
    size: [],
    breed: [],
  });

  // const fetchSearchNotifications = async (searchTerm: string) => {
  //   const filterUrlTerm = selectedFilter.size
  //     .map((size, idx) => {
  //       if (idx === selectedFilter.size.length - 1) {
  //         return `size=${size}`;
  //       } else {
  //         return `size=${size}&`;
  //       }
  //     })
  //     .concat(
  //       selectedFilter.breed.map((breed, idx) => {
  //         if (idx === selectedFilter.breed.length - 1) {
  //           return `breed=${breed}`;
  //         } else {
  //           return `breed=${breed}&`;
  //         }
  //       }),
  //     );

  //   // try {
  //   //   const response = await axios.get(
  //   //     `api/home?${filterUrlTerm}&word=${searchTerm}`, // 예시 코드
  //   //   );
  //   //   console.log('response', response.data.response)
  //   //   setNotificationList(response.data.response);
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };

  // 사용자가 메인 페이지에 접근했을 때 브라우저에서 사용자 로그인 상태 확인
  // TODO: 라우터 처리하기 때문에 제거
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
    <Container>
      <MainGNB
        setModalOpen={setModalOpen}
        search={search}
        setSearch={setSearch}
      />
      <Location location={location} address={address} setAddress={setAddress} />
      <Carousel />
      <MainListTemplate
        location={location}
        address={address}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        search={search}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <BottomNavBar />
    </Container>
  );
};

export default Main;
