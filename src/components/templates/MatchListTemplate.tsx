import MatchList from '../organisms/MatchList';
import * as S from '../../styles/templates/MatchListTemplate';

const MatchListTemplate = () => {
  return (
    <S.Container>
      <S.MatchRoom>지원자 리스트</S.MatchRoom>
      <MatchList />
    </S.Container>
  );
};

export default MatchListTemplate;
