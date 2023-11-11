import React from 'react';
import ListItem from '../molecules/ListItem';
import { useNavigate } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import styled from 'styled-components';

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
    navigate(`/notification/${notificationId}`);
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
        lat={notifications[index].lat}
        lng={notifications[index].lng}
        onClick={() =>
          handleNotificationClick(notifications[index].notificationId)
        }
      />
    </div>
  );

  return (
    <Container>
      <FixedSizeList
        height={700}
        width={800}
        itemSize={100}
        itemCount={notifications.length}
        className="notification__list"
      >
        {Row}
      </FixedSizeList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: white;
`;

export default React.memo(NotificationList);
