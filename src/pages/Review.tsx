import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import * as S from '../styles/pages/DescriptiontBoxContainer';
import ReviewBox from '../components/organisms/ReviewBox';

const Review = () => {
  return (
    <S.Container>
      <DescriptionBoxTitle title="리뷰 작성하기" />
      <DescriptionBox>
        <ReviewBox />
      </DescriptionBox>
    </S.Container>
  );
};

export default Review;
