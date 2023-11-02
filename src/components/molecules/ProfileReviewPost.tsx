import * as S from '../../styles/atoms/ProfileReviewPost';
import { CaretRight } from '@phosphor-icons/react';
import Image from '../atoms/Image';
type ListProps = {
  id?: number;
  reviewContent: string;
  reviewTime: string;
  writerImg: string;
};

const ProfileReviewPost = ({
  id,
  reviewContent,
  reviewTime,
  writerImg,
}: ListProps) => {
  return (
    <S.Container>
      <S.PictureContainer>
        {/* <span className="img">
          <Image src={src} alt="강아지사진"></Image>
        </span>
        <S.StyleContent>
          <S.StyleTitle>
            <span>
              {breed} | {age}살 | {date}
            </span>
          </S.StyleTitle>
          <S.styleHeader>{title}</S.styleHeader>
        </S.StyleContent>
        <img  /> */}
        <span>{id}</span>
        <span>{reviewContent}</span>
        <span>{reviewTime}</span>
        <span>{writerImg}</span>
      </S.PictureContainer>
      <S.ArrowContent>
        <CaretRight color="white" size={30} />
      </S.ArrowContent>
    </S.Container>
  );
};

export default ProfileReviewPost;
