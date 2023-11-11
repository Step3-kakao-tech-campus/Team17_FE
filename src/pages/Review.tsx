import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import ReviewBox from '../components/organisms/ReviewBox';
import Container from '../components/atoms/Container';

const Review = () => {
  return (
    <Container>
      <DescriptionBoxTitle title="리뷰 작성하기" />
      <DescriptionBox>
        <ReviewBox />
      </DescriptionBox>
    </Container>
  );
};

export default Review;
