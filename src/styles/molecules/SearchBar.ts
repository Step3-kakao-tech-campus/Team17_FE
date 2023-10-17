import styled from 'styled-components';
import Input from '../../components/atoms/Input';

export const Container = styled.span`
  display: flex;
  align-items: center;
  width: 70%;
  height: 2rem;
  border-radius: 8px;
  background-color: #f7f7f7;
  color: #838383;
  padding: 0 0.5rem;
  margin: 0.5rem 0.7rem;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;

export const SearchTextWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled(Input)`
  background-color: #f7f7f7;
  border: none;
  padding-left: 0.7rem;
  width: 100%;

  &:placeholder-shown {
    color: #adadad;
  }
  font-family: 'IBMPlexSansKR-Regular';
  &:focus {
    outline: none;
  }

  color: black;
`;
