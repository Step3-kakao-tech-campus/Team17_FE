import * as S from '../../styles/atoms/NotReview';
import { convertDate } from '../../utils/convertDate';
import Image from './Image';

type NotReviewProps = {
  image: string;
  start: string;
  end: string;
  title: string;
};
function NotReview({ image, start, end, title }: NotReviewProps) {
  const time = convertDate({ startDate: start, endDate: end });
  return (
    <S.Container>
      {' '}
      <S.ImageContainer>
        <Image src={image} alt="대체이미지" />
      </S.ImageContainer>
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
