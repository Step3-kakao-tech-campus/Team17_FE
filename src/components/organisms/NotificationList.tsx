import React from 'react';
import ListItem from '../molecules/ListItem';

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
  return (
    <>
      {notifications.map((notification) => (
        <ListItem
          key={notification.notificationId}
          dog={notification.dogInfo}
          title={notification.title}
          dog_bowl={notification.dogBowl}
        />
      ))}
    </>
  );
};

export default React.memo(NotificationList);
