import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(249, 249, 249, 50%);
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    height: 2.2rem;
    align-items: center;
    width: 100%;
    border: 1px solid lightgray;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    outline: none;
  }
  button.active {
    font-family: 'Gowun';
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
  width: 6.2rem;
  height: 2rem;
  border-radius: 20px;
  display: flex;
  position: absolute;
  bottom: 4.3rem;
  left: 75%;
  @media screen and (min-width: 755px) {
    left: 630px;
  }

  font-size: 0.75rem;
  background-color: #f6ba26;
  color: black;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
  .plus {
    padding-left: 0.5rem;
  }
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
