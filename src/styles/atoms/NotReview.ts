import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  margin: 0.2rem 0;
  font-weight: bold;
  & > .title {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  & > .time > .walk {
    color: #d6cfa5;
  }
`;

export const Button = styled.button`
  color: #d6cfa5;
  border: 1px solid transparent;
  &:active {
    color: #a59d52;
    border: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
