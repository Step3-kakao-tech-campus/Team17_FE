import { Check } from '@phosphor-icons/react';
import * as S from '../styles/pages/Submit';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/', { replace: true });
  };

  return (
    <S.Container>
      <S.Title>지원 완료!</S.Title>
      <S.IconWrapper>
        <Check size={50} color="#f84514" />
      </S.IconWrapper>
      <S.Button onClick={handleButton}>홈으로 돌아가기</S.Button>
    </S.Container>
  );
};

export default Submit;
