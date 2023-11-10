import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 1rem;
  width: 100%;
  & > .profileContent {
    padding-top: 1rem;
  }

  & > .review {
    font-size: 0.7rem;
    margin-left: 1rem;
    font-weight: bold;
    display: block;
  }
`;
export const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .pic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    z-index: 1200;
    background-color: white;
  }
  & > .pic > .input-file-button {
    padding: 0.4rem 0.6rem;
    border-radius: 2px;
    color: black;
    cursor: pointer;
  }
  & > .pic > input {
    display: none;
  }
`;

export const StyleTopProfileText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 0.9rem;
  }
  /* border: 1px solid; */
`;

export const StyleDogBab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 1.5rem;
  & > div > span {
    white-space: nowrap;
    margin-right: 0.5rem;
  }
  & > .paw {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.5rem;

    .dog__bowl {
      padding-left: 0.2rem;
    }
  }
`;

export const DogCoin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    color: black;
    margin-right: 0.3rem;
  }

  & > p {
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .review {
    cursor: pointer;
    background-color: #f6ba26;
    color: white;
  }
`;

export const Button = styled.button`
  width: 9rem;
  font-size: 0.9rem;
  height: 2rem;
  border-radius: 20px;
  background-color: white;
  border: 1.5px solid #f6ba26;
  color: #f6ba26;
  outline: none !important;
  display: flex;
  margin: 1.2rem 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
  &:focus {
    outline: none;
  }
  z-index: 1200;

  background-color: transparent;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  z-index: 1200;
  width: 80%;
`;
