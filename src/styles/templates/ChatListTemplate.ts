import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 90%;
  @media screen and (max-width: 768px) {
    padding-left: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
  }
`;
