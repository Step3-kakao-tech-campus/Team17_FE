import React from 'react';
import ListItem from '../molecules/ListItem';
import { useNavigate } from 'react-router-dom';
import { FixedSizeList } from 'react-window';

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

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <div style={style}>
      <ListItem
        key={notifications[index].notificationId}
        dog={notifications[index].dogInfo}
        title={notifications[index].title}
        dog_bowl={notifications[index].dogBowl}
        onClick={() =>
          handleNotificationClick(notifications[index].notificationId)
        }
      />
    </div>
  );

  return (
    <>
      <FixedSizeList
        height={400}
        width={800}
        itemSize={100}
        itemCount={notifications.length}
      >
        {Row}
      </FixedSizeList>
    </>
  );
};

export default React.memo(NotificationList);
