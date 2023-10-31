import Location from '../components/molecules/Location';
import Carousel from '../components/molecules/Carousel';
import BottomNavBar from '../components/molecules/BottomNavBar';
import MainListTemplate from '../components/templates/MainListTemplate';
import MainGNB from '../components/organisms/MainGNB';
import React, { useState, useEffect, Suspense } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Container from '../components/atoms/Container';
import { useDebounce } from '../hooks/useDebounce';
import { fetchNotifications } from '../apis/notification';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import SkeletonList from '../components/organisms/SkeletonList';

type Filter = {
  size: string[];
  breed: string[];
};

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [address, setAddress] = useState('');
  const location = useGeolocation();
  const [selectedFilter, setSelectedFilter] = useState<Filter>({
    size: [],
    breed: [],
  });

  const { ref, inView } = useInView();
  const debouncedSearch = useDebounce(search, 500);
  const { lat, lng } = location.coordinates;
  let userImage = '';

  const {
    data: notifications,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['notifications'],
    ({ pageParam = 0 }) =>
      fetchNotifications(debouncedSearch, selectedFilter, pageParam, lat, lng),
    {
      getNextPageParam: (lastPage, pages) => {
        if (
          !lastPage.data.response.notifications ||
          lastPage.data.response.nextCursorRequest.key === -1
        ) {
          // 마지막 페이지일 경우 NULL을 반환하여 더 이상 페이지를 불러오지 않음
          return null;
        }
        // 다음 페이지를 요청하기 위해 현재 커서 위치를 계산하여 반환
        return lastPage.data.response.nextCursorRequest.key;
      },
      onSuccess: (data) => {
        userImage = data.pages[0].data.response.image;
        console.log(userImage);
      },
      onError: (error: any) => {
        // 에러 발생 시 에러 처리
        console.log('error', error);
      },
      suspense: true,
    },
  );

  useEffect(() => {
    // 페이지가 로드되면 첫 번째 페이지를 요청
    if (inView && hasNextPage && address) {
      fetchNextPage();
    }
  }, [inView]);

  // 사용자가 검색창을 입력하면 검색어를 서버로 전송하여 검색 결과를 받아온다.
  useEffect(() => {
    if (debouncedSearch) {
      fetchNextPage();
    }
  }, [debouncedSearch]);

  // 사용자의 위치가 변경되면 현재 위치를 서버로 전송하여 검색 결과를 받아온다.
  useEffect(() => {
    if (address) {
      fetchNextPage();
    }
  }, [address]);

  return (
    <Container>
      <MainGNB
        setModalOpen={setModalOpen}
        search={search}
        setSearch={setSearch}
        image={userImage}
      />
      <Location address={address} setAddress={setAddress} />
      <Carousel />
      <>
        <Suspense fallback={<SkeletonList />}>
          {notifications && address ? (
            <MainListTemplate
              address={address}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              search={search}
              notifications={notifications}
              location={location}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          ) : (
            <SkeletonList />
          )}
        </Suspense>
        <div ref={ref}></div>
        {isFetchingNextPage && <SkeletonList />}
      </>
      <BottomNavBar />
    </Container>
  );
};

export default React.memo(Main);
