import styled from 'styled-components';
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopContainer = styled.div`
  width: 100%;
  & > .container {
    display: flex;
    justify-content: center;
  }
`;
export const TimeLocationContainer = styled.div`
  & > div {
    height: 100%;
  }
`;

export const LocationContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;

  & > .title {
    font-family: 'Gowun';
    font-size: 1.1rem;
    color: black;
    margin: 0 0.5rem;
  }

  & > .map {
    background-color: #f7f7f7;
    padding: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    height: 1rem;
    text-align: center;
    display: inline-block;
  }
`;

export const TimeContainer = styled.div`
  padding-top: 0.2rem;
  padding-left: 0.5rem;
  padding-bottom: 1.3rem;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #e2e2e2;
  color: black;
  & > .title {
    color: black;
    font-family: 'Gowun';
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  & > .time {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-top: 0.5rem;

    .time__icon {
      padding-right: 1rem;
    }

    .time-plus__icon {
      margin-left: 0.5rem;
    }
  }
`;

export const Container = styled.div`
  padding-top: 0.8rem;
  padding-left: 0.5rem;
  width: 100%;
  color: black;
  & > .specificity > .title {
    font-size: 1.1rem;
    padding-bottom: 1rem;
    font-family: 'Gowun';
  }
  & > .specificity > .post {
    width: 91%;
    border-radius: 8px;
    border: none;
    background-color: #f7f7f7;
    height: 5rem;
    resize: none;
    padding: 0.5rem 1rem;

    &:focus {
      outline: none;
    }
  }

  & > .amount {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 1rem 0rem;
  }

  & > .amount > .title {
    font-size: 1.1rem;
    font-family: 'Gowun';
  }
  & > .amount > .price {
    color: red;
    padding-bottom: 0.2rem;
    display: flex;
    & > .coin {
      margin-right: 0.5rem;
    }
  }
  & > .amount > .price > input {
    text-align: end;
    border: none;
    margin-right: 0.5rem;
    color: red;
    outline: none;
  }
`;

export const NotiTitle = styled.h1`
  background-color: #d6cfa5;
  position: fixed;
  height: 25rem;
  width: 78vw;
  border-radius: 0 0 50% 50%;
  font-size: 1.5rem;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  line-height: 6rem;
  font-family: 'Gowun';
  & > .title {
    /* margin-top: 1.5rem; */
    margin: 0 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .arrow {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
export const TitleInput = styled.input`
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  align-items: center;
  &::placeholder {
    color: white;
    font-family: 'gowunDoum';
  }
  /* &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid white;
  } */
  &:focus {
    outline: none;
    border: none;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 96%;
  margin-top: 0.4rem;
  background-color: #a59d52;
  color: white;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
`;

export const Content = styled.textarea`
  border: none;
  width: 80%;
  height: 70%;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  overflow: auto;
  scroll-behavior: smooth;
  background-color: #f7f7f7;
  resize: none;
  color: black;
  &::placeholder {
    color: #7b7b7b;
    font-family: 'IBMPlexSansKR-Regular';
  }
  font-family: 'IBMPlexSansKR-Regular';

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;
