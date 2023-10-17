import spinner from '../../../public/gif/Spinner.gif';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Container>
      <img src={spinner} alt="Loading..." width="10%" />
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
