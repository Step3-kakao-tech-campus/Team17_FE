import styled from 'styled-components';

export const LoginError = styled.div`
  background-color: #f6f6f6;
  border: 1px solid #f6f6f6;
  color: gray;
  .login-error {
    font-size: 0.8em;
    color: red;
    padding: 1.5em;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;
