import React from 'react';
import ListItem from '../molecules/ListItem';
import { useNavigate } from 'react-router-dom';

interface Notification {
  dogInfo: {
    name: string;
    sex: string;
    breed: string;
    size: string;
    image: string;
    age: number;
  };
  title: string;
  dogBowl: number;
  lng: number;
  lat: number;
  notificationId: number;
}

type NotificationListProps = {
  notifications: Array<Notification>;
};

const NotificationList = ({ notifications }: NotificationListProps) => {
  const navigate = useNavigate();

  const handleNotificationClick = (notificationId: number) => {
    // 해당 공고 상세 페이지로 이동
    console.log('공고글 상세 페이지로 이동', notificationId);
    // navigate(`/notification/${notificationId}`)
  };

  return (
    <>
      {notifications.map((notification) => (
        <ListItem
          key={notification.notificationId}
          dog={notification.dogInfo}
          title={notification.title}
          dog_bowl={notification.dogBowl}
          onClick={() => handleNotificationClick(notification.notificationId)}
        />
      ))}
    </>
  );
};

export default React.memo(NotificationList);
