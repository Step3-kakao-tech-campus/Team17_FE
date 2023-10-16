import styled from 'styled-components';

export const PayTitle = styled.h1`
  background-color: #d6cfa5;
  position: fixed;
  height: 25rem;
  width: 78vw;
  border-radius: 0 0 50% 50%;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  line-height: 6rem;

  @media screen and (min-width: 768px) {
    width: 78vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
