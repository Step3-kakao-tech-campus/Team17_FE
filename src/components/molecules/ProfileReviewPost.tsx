import * as S from '../../styles/atoms/ProfileReviewPost';
// import { CaretRight } from '@phosphor-icons/react';
import Image from '../atoms/Image';
import { convertDay } from '../../utils/convertDate';
type ListProps = {
  id?: number;
  reviewContent: string;
  reviewTime: string;
  writerImg: string;
};

const ProfileReviewPost = ({
  reviewContent,
  reviewTime,
  writerImg,
}: ListProps) => {
  return (
    <S.Container>
      <S.PictureContainer>
        <span className="img">
          {/* TODO:: Img 수정필요 */}
          {/* <Image src={writerImg} alt="강아지사진"></Image> */}
          <Image src={writerImg} alt="강아지사진"></Image>
        </span>
        <S.StyleContent>
          <S.StyleTitle>
            <span>{convertDay(reviewTime)}</span>
          </S.StyleTitle>
          <S.styleHeader>{reviewContent}</S.styleHeader>
        </S.StyleContent>
      </S.PictureContainer>
    </S.Container>
  );
};

export default ProfileReviewPost;
