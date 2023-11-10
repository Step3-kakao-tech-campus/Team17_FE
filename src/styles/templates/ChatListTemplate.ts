import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 5vw;
  }
  @media screen and (min-width: 768px) {
    margin: 0 3vw;
  }
`;
