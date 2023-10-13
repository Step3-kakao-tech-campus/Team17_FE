import ListItem from '../molecules/ListItem';
import { PlusCircle } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/NotificationList';
import React from 'react';

interface Notification {
  dog: {
    name: string,
    sex: string,
    breed: string,
    image: string,
    age: number,
  },
  title: string,
  dog_bowl: string,
  id: number,
  lng: number,
  lat: number,
}

type NotificationListProps = {
  notification: Array<Notification>;
};

const NotificationList = ({notification}: NotificationListProps) => {
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
      {notification.length  ? notification.map((item) => (
        <ListItem
          key={item.id}
          dog={item.dog}
          title={item.title}
          dog_bowl={item.dog_bowl}
        />
      )) : (
        <div>공고글이 없습니다.</div>
      )}
    </S.Container>
  );
};

export default React.memo(NotificationList);
