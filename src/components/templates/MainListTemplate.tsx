import React, { useEffect } from 'react';
import FilterModal from '../molecules/FilterModal';
import { PlusCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/NotificationList';
import NotificationList from '../organisms/NotificationList';

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
  notifications: any;
  handleFilterAdap: () => void;
};

type Filter = {
  size: string[];
  breed: string[];
};

// 사용자 위치에서의 공고글 리스트를 출력한다.
const MainListTemplate = ({
  modalOpen,
  setModalOpen,
  notifications,
  selectedFilter,
  setSelectedFilter,
  handleFilterAdap,
}: MainListTemplateProps) => {
  // msw 테스트 코드
  // useEffect(() => {
  //   // fetchNotifications(search, selectedFilter, 0);

  //   const fetchData = async () => {
  //     try {
  //       const res = await axios({
  //         method: 'get',
  //         url: '/api/home',
  //         params: {
  //           searchParams: selectedFilter,
  //         },
  //       });
  //       setNotificationList(res.data.response.notifications);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleAddNotification = () => {
    // 공고글 올리기 페이지로 이동
  };

  return (
    <>
      <S.ButtonWrapper>
        <S.AddItemButton onClick={handleAddNotification}>
          공고글 올리기
          <PlusCircle size={19} className="add__item" />
        </S.AddItemButton>
      </S.ButtonWrapper>
      <S.ListWrapper>
        {notifications && (
          <NotificationList
            notifications={notifications.pages.flatMap(
              (page: any) => page.data.response.notifications,
            )}
          />
        )}
      </S.ListWrapper>
      {modalOpen && (
        <FilterModal
          setModalOpen={setModalOpen}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          handleFilterAdap={handleFilterAdap}
        />
      )}
    </>
  );
};

export default React.memo(MainListTemplate);
