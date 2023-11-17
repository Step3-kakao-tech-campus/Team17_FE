import styled from 'styled-components';

export const Container = styled.main`
  padding: 1rem 2vw;
  background-color: white;
  position: fixed;
  margin-top: 5.5rem;
  height: 86vh;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 680px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    margin-left: 3vw;
    margin-right: 3vw;
  }
`;
