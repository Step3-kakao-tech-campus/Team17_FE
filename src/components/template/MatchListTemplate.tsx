import MatchList from '../organisms/MatchList';
import styled from 'styled-components';

const Container = styled.div`
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin: 0 5vw;
  }
  @media screen and (min-width: 769px) {
    width: 78vw;
    margin: 0 10vw;
  }
`;

const MatchRoom = styled.div`
  text-align: center;
  font-size: 32px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const MatchListTemplate = () => {
  return (
    <Container>
      <MatchRoom>지원자 매칭</MatchRoom>
      <MatchList />
    </Container>
  );
};

export default MatchListTemplate;
