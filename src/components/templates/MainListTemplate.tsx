import React, { Suspense, useEffect, useState } from 'react';
import NotificationList from '../organisms/NotificationList';
import { useInView } from 'react-intersection-observer';
// import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import FilterModal from '../molecules/FilterModal';
import { useDebounce } from '../../hooks/useDebounce';
import SkeletonList from '../organisms/SkeletonList';
import { fetchNotifications } from '../../apis/notification';

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

type MainListTemplateProps = {
  location: {
    loaded: boolean;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
  search: string;
  selectedFilter: Filter;
  setSelectedFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

type Filter = {
  size: string[];
  breed: string[];
};

// 사용자 위치에서의 공고글 리스트를 출력한다.
// 무한 스크롤을 사용하여 페이지를 불러온다.
const MainListTemplate = ({
  location,
  modalOpen,
  setModalOpen,
  search,
  address,
  selectedFilter,
  setSelectedFilter,
}: MainListTemplateProps) => {
  // TODO: 서버 연결 후 테스트 확인 필요
  const { ref, inView } = useInView();
  const debouncedSearch = useDebounce(search, 500);
  // const { lat, lng } = location.coordinates;
  const [notificationList, setNotificationList] = useState<Array<Notification>>(
    [],
  );
  // const {
  //   data: notifications,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  // } = useInfiniteQuery(
  //   ['notifications'],
  //   ({ pageParam = 0 }) =>
  //     fetchNotifications(debouncedSearch, selectedFilter, pageParam, lat, lng), //
  //   {
  //     getNextPageParam: (lastPage, pages) => {
  //       if (lastPage.data && lastPage.data.length === 0) {
  //         // 마지막 페이지일 경우 NULL을 반환하여 더 이상 페이지를 불러오지 않음
  //         return null;
  //       }
  //       // 다음 페이지를 요청하기 위해 현재 커서 위치를 계산하여 반환
  //       return pages.length + 10;
  //     },
  //     onError: (error: any) => {
  //       // 에러 발생 시 에러 처리
  //       console.log('error', error);
  //     },
  //     suspense: true,
  //   },
  // ); // 구분자, API 요청 함수

  // console.log('notifications', notifications);

  // 사용자가 검색창을 입력하면 검색어를 서버로 전송하여 검색 결과를 받아온다.
  // useEffect(() => {
  //   if (debouncedSearch) {
  //     fetchNextPage();
  //   }
  // }, [debouncedSearch]);

  // useEffect(() => {
  //   // 페이지가 로드되면 첫 번째 페이지를 요청
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView]);

  // const [notificationList, setNotificationList] = useState<Array<Notification>>([]);

  // // 사용자 위치가 변경되면 공고글 리스트 재요청
  // useEffect(() => {
  //   if (address) {
  //     fetchNextPage();
  //   }
  // }, [address]);

  // msw 테스트 코드
  useEffect(() => {
    // fetchNotifications(search, selectedFilter, 0);

    const fetchData = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: '/api/home',
          params: {
            searchParams: selectedFilter,
          },
        });
        setNotificationList(res.data.response.notifications);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Suspense fallback={<SkeletonList />}>
        {notificationList.length ? (
          <NotificationList notifications={notificationList} />
        ) : (
          <SkeletonList />
        )}
        {modalOpen && (
          <FilterModal
            setModalOpen={setModalOpen}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        )}
        <div ref={ref}></div>
        {/* {isFetchingNextPage && <SkeletonList />} */}
      </Suspense>
    </>
  );
};

export default React.memo(MainListTemplate);
