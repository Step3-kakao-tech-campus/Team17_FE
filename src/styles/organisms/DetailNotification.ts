import styled from 'styled-components';
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TimeLocationContainer = styled.div`
  & > div {
    height: 100%;
  }
`;

export const LocationContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  & > .title {
    font-size: 1.1rem;
    color: black;
    margin: 0 0.5rem;
  }

  & > .map {
    background-color: #e2e2e2;
    padding: 0.2rem;
    font-size: 1rem;
    cursor: pointer;
    width: 12rem;
    height: 1rem;
    text-align: center;
  }
`;

export const TimeContainer = styled.div`
  padding-bottom: 0.3rem;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #e2e2e2;
  color: black;
  & > .title {
    color: #d6cfa5;
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  color: black;
  & > .specificity > .title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  & > .specificity > .post {
    width: 95%;
    border-radius: 8px;
    border: none;
    background-color: #e2e2e2;
    height: 3.5rem;
  }

  & > .amount {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0rem;
  }

  & > .amount > .title {
    font-size: 1.2rem;
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

  @media screen and (min-width: 768px) {
    width: 78vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
export const TitleInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  &::placeholder {
    color: white;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid white;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
