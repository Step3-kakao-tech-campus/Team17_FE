import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #cccccc;
  width: 25rem;
  height: 2rem;
  font-size: 1rem;
  box-sizing: content-box;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 7px;
  color: black;
  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
  font-family: 'IBMPlexSansKR-Regular';

  &:focus {
    outline: none;
    font-family: 'IBMPlexSansKR-Regular';
    border-color: black;
  }

  &::placeholder {
    color: #7b7b7b;
    font-family: 'IBMPlexSansKR-Regular';
  }
`;

export const Label = styled.label`
  font-size: 1.1rem;
  margin-top: 1rem;
  display: block;
  @media only screen and (max-width: 768px) {
    margin-left: 10vw;
  }
`;
