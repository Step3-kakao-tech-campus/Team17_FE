import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 45%; */
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e2e2;
  color: black;
`;

export const Dog = styled.div`
  display: flex;
  /* height: 40%; */
  /* background-color: green; */

  align-items: center;
  justify-content: start;
  padding-left: 1rem;
  & > .pencil {
    position: relative;
    top: 2rem;
  }

  & > .image {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border: 1px solid lightgray;
    border-radius: 27px;
  }
`;

export const DogSpan = styled.div`
  color: black;
  padding-left: 2rem;
  & > .block {
    padding-bottom: 0.3rem;
    margin-bottom: 0.5rem;
  }
  & > .block > .title {
    color: #a59d52;
    font-family: 'Gowun';
    padding-right: 0.4rem;
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
    font-size: 1.1rem;
    padding-left: 0.5rem;
  }
`;

export const Images = styled.div`
  display: flex;
  /* width: 100%; */
  /* height: 90%; */
  justify-content: space-around;
  align-items: end;
  font-size: 0.9rem;
  /* background-color: green; */
`;
