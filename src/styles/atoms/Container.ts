import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: white;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  /* @media screen and (max-width: 768px) {
    width: 100vw;
  } */
`;
