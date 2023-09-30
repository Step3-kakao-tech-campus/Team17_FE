import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUp = styled.div`
  font-size: 0.8em;
  margin-top: 1.5em;
  @media only screen and (max-width: 700px) {
    margin-left: 10vw;
  }
`;
export const Login = styled.div`
  font-size: 0.8em;
  margin-top: 1.5em;
  @media only screen and (max-width: 700px) {
    margin-left: 10vw;
  }
`;

export const Text = styled(Link)`
  text-decoration: none;
  color: black;
`;
