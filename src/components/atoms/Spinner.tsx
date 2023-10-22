import spinner from '../../assets/Spinner.gif';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Container>
      <img src={spinner} alt="Loading..." width="20%" />
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
