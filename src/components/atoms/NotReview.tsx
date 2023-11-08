import * as S from '../../styles/atoms/NotReview';
import Image from './Image';

function NotReview() {
  const img = '이미지';
  const title = '귀여운 복슬이 산책시키실분~';
  const time = '23.12.25~ 15:00~16:00';
  return (
    <S.Container>
      {' '}
      <Image src={img} alt="대체이미지" />
      <S.ContentContainer>
        <span className="title">{title}</span>
        <div className="time">
          <span className="walk"> 산책일자 </span>
          <span> {time}</span>
        </div>
      </S.ContentContainer>
      <S.Button> 작성 </S.Button>
    </S.Container>
  );
}

export default NotReview;
