import KakaoMap from '../molecules/KakaoMap';
import { CaretLeft } from '@phosphor-icons/react';
import * as S from '../../styles/organisms/CurrentWalkingMap';

const CurrentWalkingMap = () => {
  const buttonInnerText = '메세지 보내기';

  const onClickBackCursor = () => {
    // TODO: BackCursor 클릭시 이전 페이지로 이동 기능 추가
  };

  return (
    <S.Container>
      <S.BackCursor>
        <CaretLeft size={30} />
      </S.BackCursor>
      <KakaoMap />
      <S.BottomBox>
        <S.Button onClick={onClickBackCursor}>{buttonInnerText}</S.Button>
      </S.BottomBox>
    </S.Container>
  );
};

export default CurrentWalkingMap;
