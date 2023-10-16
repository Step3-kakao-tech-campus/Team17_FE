import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 7px;
  border-width: 1px;
  border: 1px solid #f1f1f1;
  background-color: #f1f1f1;
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
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-top: 0.7rem;
  display: block;
  @media only screen and (max-width: 768px) {
    margin-left: 10vw;
  }
`;
