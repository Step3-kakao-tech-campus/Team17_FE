import styled from 'styled-components';
export const Container = styled.div`
  margin: 1rem 2rem 2rem 2rem;
  & > .profileContent {
    margin-top: 1rem;
  }
`;
export const MainProfile = styled.div`
  display: flex;
  & > .pic {
    display: flex;
    justify-content: center;
    align-items: center;
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
  margin-top: 20px;
  justify-content: space-around;
  padding: 10px 20px;
  & > div > span {
    color: red;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const DogCoin = styled.div`
  margin-top: 1rem;
  display: flex;
  & > span {
    color: #a59d52;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  width: 100%;
  background-color: #a59d52;
  color: white;
  outline: none !important;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
