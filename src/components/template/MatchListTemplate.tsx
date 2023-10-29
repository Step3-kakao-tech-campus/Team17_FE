import MatchList from '../organisms/MatchList';
import * as S from '../../styles/templates/MatchListTemplate';

const MatchListTemplate = () => {
  return (
    <S.Container>
      <S.MatchRoom>지원자 매칭</S.MatchRoom>
      <MatchList />
    </S.Container>
  );
};

export default MatchListTemplate;
