import * as S from '../../styles/atoms/ProfileBottomPost';
import { CaretRight } from '@phosphor-icons/react';
import Image from '../atoms/Image';
type ListProps = {
  breed?: string;
  age?: number;
  date?: string;
  title?: string;
  src: string;
  isOwner?: boolean;
};

const ProfileBottomPost = ({
  breed,
  age,
  date,
  title,
  src,
  isOwner,
}: ListProps) => {
  return (
    <S.Container>
      <S.PictureContainer>
        <span className="img">
          <Image src={src} alt="강아지사진"></Image>
        </span>
        <S.StyleContent>
          <S.StyleTitle>
            <span>
              {breed} | {age}살 | {date}
            </span>
          </S.StyleTitle>
          <S.styleHeader>{isOwner ? title : '산책 완료'}</S.styleHeader>
        </S.StyleContent>
        {/* <img  /> */}
      </S.PictureContainer>
      <S.ArrowContent>
        <CaretRight color="white" size={30} />
      </S.ArrowContent>
    </S.Container>
  );
};

export default ProfileBottomPost;
