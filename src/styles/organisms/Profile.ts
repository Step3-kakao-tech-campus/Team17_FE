import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  & > .profileContent {
    padding-top: 1rem;
  }
`;
export const MainProfile = styled.div`
  display: flex;
  & > .pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
  }
  & > .pic > .input-file-button {
    padding: 6px 25px;
    background-color: #d6cfa5;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  & > .pic > input {
    display: none;
  }
`;
export const StyleTopProfileText = styled.div`
  margin-left: 1vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > span {
    font-size: 24px;
  }
  /* border: 1px solid; */
`;

export const StyleDogBab = styled.div`
  display: flex;
  border: 1px solid #dedede;
  border-radius: 5px;
  width: 80%;
  margin-top: 0.5rem;
  justify-content: space-around;
  padding: 0.5rem 0.5rem;
  & > div > span {
    color: red;
    white-space: nowrap;
    margin-right: 0.5rem;
  }
  & > .paw {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const DogCoin = styled.div`
  margin-top: 1rem;
  display: flex;
  & > span {
    color: #a59d52;
    margin-right: 0.3rem;
  }

  & > p {
    margin-left: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  height: 2.4rem;
  background-color: #a59d52;
  color: white;
  outline: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    background-color: #eba059;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
