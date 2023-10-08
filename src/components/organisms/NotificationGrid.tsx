import React, { useState } from 'react';
import styled from 'styled-components';
import List from '../atoms/List';
import { convertDate } from '../../utils/convertDate';

// api/profile/notifications
// 산책시키기 => 공고글
type NotificationProps = {
  className: string;
};

const NotificationGrid = ({ className, notification }: NotificationProps) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const notificationdata = notification;
  return (
    <NotificationContainer>
      <StyleBanner>
        <button
          className={`button ${activeButton === 'button1' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button1')}
        >
          산책시키기
        </button>
        <button
          className={`button ${activeButton === 'button2' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button2')}
        >
          산책이력
        </button>
        <button
          className={`button ${activeButton === 'button3' ? 'active' : ''}`}
          onClick={() => handleButtonClick('button3')}
        >
          리뷰
        </button>
      </StyleBanner>
      {notificationdata.map((noti) => (
        <List
          breed={noti.dog.breed}
          age={noti.dog.age}
          title={noti.title}
          date={convertDate({
            startDate: noti.start,
            endDate: noti.end,
          })}
        />
      ))}
    </NotificationContainer>
  );
};

export default NotificationGrid;

const NotificationContainer = styled.div`
  background-color: white;
`;

const StyleBanner = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    flex: 1;
    width: calc(33.33% - 10px);
    border: none;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    outline: none;
  }
  button.active {
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
`;

const StyleButton = styled.button``;
