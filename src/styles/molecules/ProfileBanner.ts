import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  padding: 1rem 1rem 1rem 1rem;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  width: 70%;
  @media screen and (min-width: 860px) {
    width: 85%;
  }

  & > h1 {
    margin-left: 1rem;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;
