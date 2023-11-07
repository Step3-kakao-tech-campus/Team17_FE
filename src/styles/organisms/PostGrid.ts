import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    justify-content: center;
    width: 100%;
    border: none;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    outline: none;
  }
  button.active {
    font-family: 'Gowun';
    border-bottom: 1px solid #000;
  }
`;

export const ListContainer = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 1rem;
  }
`;

export const Button = styled.button`
  height: 3rem;
  width: 100%;
  display: flex;
  border: 1px solid #e2e2e2;
  justify-content: center;
  align-items: center;
  outline: none !important;
  margin-bottom: 1rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  /* margin-top: 1rem; */
  padding-bottom: 4rem;
`;
