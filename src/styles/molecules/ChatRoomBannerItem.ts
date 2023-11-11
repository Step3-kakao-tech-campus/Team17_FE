import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  padding: 1rem 1rem 0rem 0rem;
  width: 100%;
  position: sticky;
  top: 0;
  @media screen and (min-width: 860px) {
    width: 100%;
    position: sticky;
    top: 0;
  }
`;

export const GoBackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  width: 100%;
`;

export const walkingButton = styled.button`
  background-color: User #d6cfa5;
  border-radius: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    cursor: pointer;
    width: 5rem;
    font-size: 0.8rem;
    /* margin-right: 2rem; */
  }
`;
