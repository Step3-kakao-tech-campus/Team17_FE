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
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: #e2e2e2;
    height: 4rem;
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

export const Input = styled.input``;