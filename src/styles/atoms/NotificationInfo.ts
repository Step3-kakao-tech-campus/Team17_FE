import styled from 'styled-components';

export const Container = styled.main`
  /* padding: 1vh 2vw; */
  background-color: white;
  position: fixed;
  margin-top: 12vh;
  padding: 1rem 1vw;
  height: 86vh;
  border-radius: 15px;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 680px;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    margin-left: 3vw;
    margin-right: 3vw;
  }
`;
