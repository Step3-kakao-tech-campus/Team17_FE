import { Suspense, useEffect, useState } from 'react';
import NotificationList from '../organisms/NotificationList';
import { useInView } from 'react-intersection-observer';
import { fetchNotifications } from '../../apis/notification';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import MainListLoading from '../molecules/MainListLoading';
import FilterModal from '../molecules/FilterModal';

type MainListTemplateProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
}: MainListTemplateProps) => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>({
    size: [],
    breed: [],
  });

  // const { data, isError } = useQuery(['notifications', selectedFilter], () =>
  //   fetchNotifications(selectedFilter),
  // );

  // if (isError) {
  //   alert('에러가 발생했습니다.');
  // }

  // TODO: 서버 연결 후 테스트 확인 필요

  // const { ref, inView } = useInView();
  // const {
  //   data: notifications,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  // } = useInfiniteQuery(
  //   ['notifications'],
  //   ({ pageParam = 0 }) => fetchNotifications(selectedFilter, pageParam), //
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

  return (
    <div>
      <Suspense fallback={<MainListLoading />}>
        <NotificationList /> {/* 받아온 공고글 리스트 전달 필요 data={data}*/}
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

export default MainListTemplate;
