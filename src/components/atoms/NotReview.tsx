import * as S from '../../styles/atoms/NotReview';
import { convertDate } from '../../utils/convertDate';
import Image from './Image';

type NotReviewProps = {
  image: string;
  start: string;
  end: string;
  title: string;
  onClick: () => void;
};
function NotReview({ image, start, end, title, onClick }: NotReviewProps) {
  const time = convertDate({ startDate: start, endDate: end });
  return (
    <S.Container onClick={onClick}>
      <S.ContentWrapper>
        <S.ImageContainer>
          <Image src={image} alt="대체이미지" size="3" />
        </S.ImageContainer>
        <S.ContentContainer>
          <span className="title">{title}</span>
          <div className="time">
            <span className="walk">
              <span className="walk__day"> 산책일자 </span>
              <span> {time}</span>
            </span>
          </div>
        </S.ContentContainer>
      </S.ContentWrapper>
      <S.Button> 작성 </S.Button>
    </S.Container>
  );
}

export default NotReview;
