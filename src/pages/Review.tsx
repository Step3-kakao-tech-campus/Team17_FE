import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import ReviewBox from '../components/organisms/ReviewBox';
import Container from '../components/atoms/Container';
// import { useLocation } from 'react-router-dom';

const Review = () => {
  // const location = useLocation();
  // const { memberId, receiveMeberId } = location.state;

  // TODO: ReviewBox에 memberId, receiveMemberId 전달
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
