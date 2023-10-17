import styled from 'styled-components';

export const Msg = styled.div`
  font-size: 0.5em;
  color: red;
  margin-bottom: ${(props) => (props.children ? '1em' : '0')};
  @media only screen and (max-width: 768px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;
