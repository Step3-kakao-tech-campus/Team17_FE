import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    width: 78vw;
    margin: 0 10vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
