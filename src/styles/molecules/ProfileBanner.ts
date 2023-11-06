import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  padding: 1rem 0 1rem 1rem;
  justify-content: space-between;
  & > button {
    background-color: transparent;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70%;
  @media screen and (min-width: 768px) {
    width: 85%;
  }

  & > h1 {
    margin-left: 1rem;
  }
`;
