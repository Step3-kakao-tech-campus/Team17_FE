import MatchList from '../organisms/MatchList';
import * as S from '../../styles/templates/MatchListTemplate';
import { CaretLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const MatchListTemplate = () => {
  const navigate = useNavigate();
  const onhandleClick = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.TopBanner>
        <CaretLeft onClick={onhandleClick} />
        <span className="apply">지원자 매칭</span>
        <div></div>
      </S.TopBanner>
      <MatchList />
    </S.Container>
  );
};

export default MatchListTemplate;
