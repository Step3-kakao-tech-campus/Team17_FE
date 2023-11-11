import styled from 'styled-components';

export const PayTitle = styled.h1`
  background-color: #f6ba26;
  position: fixed;
  height: 20rem;
  width: 90vw;
  border-radius: 0 0 30% 30%;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  line-height: 6rem;
  font-family: 'Gowun';

  & > .back__icon {
    position: absolute;
    left: 1rem;
    height: 6rem;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
