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
    height: 1rem;
    text-align: center;
    display: inline-block;
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
    width: 95%;
    margin: 1rem 0rem;
  }

  & > .amount > .title {
    font-size: 1.2rem;
  }
  & > .amount > .price {
    color: red;
    border-bottom: 1px solid #e2e2e2;
    display: flex;
    & > .coin {
      margin-right: 0.5rem;
    }
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

export const Title = styled.div`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .arrow {
    display: flex;
    padding-left: 1.2rem;
  }
  & > .subtitle {
    /* width: 8rem; */
  }
  & > .blank {
    width: 4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 80%;
  background-color: #a59d52;
  color: white;
  border-radius: 15px;
`;
