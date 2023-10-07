import styled from "styled-components";
import Input from "../../components/atoms/Input";

export const Container = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 2rem;
  border-radius: 8px;
  background-color: #F7F7F7;
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
`;

export const SearchInput = styled(Input)`
  background-color: #F7F7F7;
  border: none;
  padding-left: 0.7rem;
  &:placeholder-shown {
    color: #adadad;
  }
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 20rem;
  }
  width: 100%;
`;

