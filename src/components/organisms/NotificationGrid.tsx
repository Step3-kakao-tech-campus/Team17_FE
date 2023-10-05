import React from 'react';
import styled from 'styled-components';
import List from '../atoms/List';

// api/profile/notifications
// 산책시키기 => 공고글
type NotificationProps = {
  className: string;
};

const NotificationGrid = ({ className }: NotificationProps) => {
  return (
    <NotificationContainer>
      <StyleBanner>
        <button>산책시키기</button>
        <button>산책이력</button>
        <button>리뷰</button>
      </StyleBanner>
      <List />
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
  }
`;
