import { useNavigate } from 'react-router-dom';
import Image from '../components/atoms/Image';
import * as S from '../styles/pages/NotFound';

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <S.Container>
      <S.Title>
        4
        <Image src="/images/logo.png" alt="모르는개산책 로고" size="7" />4
      </S.Title>
      <S.Content>페이지를 찾을 수 없습니다.</S.Content>
      <S.Button onClick={handleGoHome}>홈으로 바로가기</S.Button>
    </S.Container>
  );
};

export default NotFound;
