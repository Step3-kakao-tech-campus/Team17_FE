import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextContainer = styled.div`
  font-size: 0.9rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }

  .register__text,
  .login__text {
    color: inherit;
  }

  .login__check {
    cursor: pointer;
    display: flex;
    align-items: center;

    .check__icon {
      padding-right: 5px;
    }
  }
`;

export const Text = styled.span`
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
