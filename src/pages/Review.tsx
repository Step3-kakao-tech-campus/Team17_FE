import DescriptionBox from '../components/atoms/DescriptionBox';
import DescriptionBoxTitle from '../components/atoms/DescriptionBoxTitle';
import ReviewBox from '../components/organisms/ReviewBox';
import Container from '../components/atoms/Container';
import { Suspense } from 'react';
import PageLoading from '../components/atoms/PageLoading';

const Review = () => {
  return (
    <Container>
      <DescriptionBoxTitle title="리뷰 작성하기" />
      <DescriptionBox>
        <Suspense fallback={<PageLoading />}>
          <ReviewBox />
        </Suspense>
      </DescriptionBox>
    </Container>
  );
};

export default Review;
