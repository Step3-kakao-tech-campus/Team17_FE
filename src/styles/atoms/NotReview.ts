import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContentContainer = styled.div`
  margin: 0.4rem 0;
  padding: 0.5rem;
  line-height: 1.2rem;
  & > .title {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.4rem;
    font-family: 'Gowun';
  }

  & > .time > .walk {
    font-size: 0.9rem;

    .walk__day {
      color: #a59d52;
    }
  }
`;

export const Button = styled.button`
  color: #a59d52;
  border: 1px solid transparent;
  background-color: transparent;
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;
