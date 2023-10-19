import { Suspense, useEffect, useState } from 'react';
import NotificationList from '../organisms/NotificationList';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import MainListLoading from '../molecules/MainListLoading';
import FilterModal from '../molecules/FilterModal';
import React from 'react';
import axios from 'axios';

interface Notification {
  dog: {
    name: string;
    sex: string;
    breed: string;
    image: string;
    age: number;
  };
  title: string;
  dog_bowl: string;
  id: number;
  lng: number;
  lat: number;
}

type MainListTemplateProps = {
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
  modalOpen,
  setModalOpen,
  search,
  address,
  selectedFilter,
  setSelectedFilter,
}: MainListTemplateProps) => {
  // TODO: 서버 연결 후 테스트 확인 필요
  // const { ref, inView } = useInView();
  // const {
  //   data: notifications,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  // } = useInfiniteQuery(
  //   ['notifications'],
  //   ({ pageParam = 0 }) =>
  //     fetchNotifications(search, selectedFilter, pageParam), //
  //   {
  //     getNextPageParam: (lastPage, pages) => {
  //       if (lastPage.data && lastPage.data.length === 0) {
  //         // 마지막 페이지일 경우 NULL을 반환하여 더 이상 페이지를 불러오지 않음
  //         return null;
  //       }
  //       // 다음 페이지를 요청하기 위해 현재 커서 위치를 계산하여 반환
  //       return pages.length + 20;
  //     },
  //     onError: (error) => {
  //       // 에러 발생 시 에러 처리
  //       console.error(error);
  //     },
  //     suspense: true,
  //   },
  // ); // 구분자, API 요청 함수

  // useEffect(() => {
  //   // 페이지가 로드되면 첫 번째 페이지를 요청
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView]);

  const [notificationList, setNotificationList] = useState<Array<Notification>>(
    [],
  );

  // // 사용자 위치가 변경되면 공고글 리스트 재요청
  // useEffect(() => {
  //   if (address) {
  //     fetchNextPage();
  //   }
  // }, [address]);

  // msw 테스트 코드
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: 'api/home',
          params: {
            searchParams: selectedFilter,
          },
        });
        setNotificationList(res.data.response.notifications);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Suspense fallback={<MainListLoading />}>
        <NotificationList notifications={notificationList} />
        {modalOpen && (
          <FilterModal
            setModalOpen={setModalOpen}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        )}
        {/* <div ref={ref}></div> */}
        {/* {isFetchingNextPage && <MainListLoading />} */}
      </Suspense>
    </div>
  );
};

export default React.memo(MainListTemplate);
