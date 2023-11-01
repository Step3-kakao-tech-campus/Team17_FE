import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 5vw;
  }
  @media screen and (min-width: 769px) {
    width: 78vw;
    margin: 0 0vw;
  }
`;

export const ChatRoom = styled.div`
  text-align: center;
  font-size: 32px;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
