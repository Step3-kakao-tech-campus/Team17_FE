import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 5vw;
  }
  @media screen and (min-width: 768px) {
    margin: 0 3vw;
  }
`;

export const ChatRoom = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;
