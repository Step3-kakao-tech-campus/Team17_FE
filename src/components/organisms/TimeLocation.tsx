import styled from 'styled-components';
// import Map from '../molecules/Map';
const TimeLocation = () => {
  return (
    <Container>
      <div> 타임 체크!</div>
      <div> 위치찍기</div>
      {/* <Map /> */}
    </Container>
  );
};

export default TimeLocation;

const Container = styled.div`
  height: 20%;

  & > div {
    height: 100%;
    background-color: red;
  }
`;
