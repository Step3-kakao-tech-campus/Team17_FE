import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.6rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ContentContainer = styled.div`
  line-height: 1rem;
  & > .title {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    font-family: 'Gowun';
  }

  & > .time > .walk {
    font-size: 0.8rem;

    .walk__day {
      color: #f84514;
    }
  }
`;

export const Button = styled.button`
  color: #f84514;
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
  width: 4rem;
  height: 4rem;
  border-radius: 27px;
`;
