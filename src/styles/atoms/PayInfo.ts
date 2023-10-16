import styled from 'styled-components';

export const Container = styled.main`
  padding: 1vh 2vw;
  background-color: white;
  position: fixed;
  margin-top: 12vh;
  height: 100%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 70vw;
    margin-left: 2vw;
    margin-right: 2vw;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    margin-left: 3vw;
    margin-right: 3vw;
  }
`;
