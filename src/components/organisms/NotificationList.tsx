import ListItem from '../molecules/ListItem';
import { PlusCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/NotificationList';
import React from 'react';
import SkeletonList from './SkeletonList';

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

type NotificationListProps = {
  notifications?: Array<Notification>;
};

const NotificationList = ({ notifications }: NotificationListProps) => {
  const handleAddNotification = () => {
    // 공고글 올리기 버튼 클릭 시 동작
    // 공고글 올리기 페이지로 이동
  };

  return (
    <S.Container>
      <S.ButtonWrapper>
        <S.AddItemButton onClick={handleAddNotification}>
          공고글 올리기
          <PlusCircle size={19} className="add__item" />
        </S.AddItemButton>
      </S.ButtonWrapper>
      {notifications ? (
        notifications.map((notification) => (
          <ListItem
            key={notification.id}
            dog={notification.dog}
            title={notification.title}
            dog_bowl={notification.dog_bowl}
          />
        ))
      ) : (
        <SkeletonList />
      )}
    </S.Container>
  );
};

export default React.memo(NotificationList);
