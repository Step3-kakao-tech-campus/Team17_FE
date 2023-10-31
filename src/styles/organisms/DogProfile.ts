import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 45%; */
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e2e2;
`;

export const Dog = styled.div`
  display: flex;
  /* height: 40%; */
  /* background-color: green; */
  align-items: center;
  padding-left: 1rem;
  & > .image {
    width: 4rem;
    height: 4rem;
  }
  & > .pencil {
    position: relative;
    top: 2rem;
  }
`;

export const DogSpan = styled.div`
  padding-left: 2rem;
  & > .block {
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 0.5rem;
  }
  & > .block > .title {
    color: black;
  }
`;

export const Input = styled.input`
  border: none;
  :read-only &:focus {
    /* outline: none; */
  }
`;

export const DogSize = styled.div`
  margin-top: 0.5rem;
  height: 100%;
  /* background-color: yellow; */
  color: black;
  & > span {
    font-size: 1.2rem;
  }
`;

export const Images = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 90%; */
  justify-content: space-around;
  align-items: end;
  /* background-color: green; */
`;
