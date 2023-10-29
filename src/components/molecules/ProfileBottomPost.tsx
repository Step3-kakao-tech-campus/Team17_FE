import * as S from '../../styles/atoms/List';
import { CaretRight } from '@phosphor-icons/react';
import Image from '../atoms/Image';
type ListProps = {
  breed?: string;
  age?: number;
  date?: string;
  title?: string;
  src: string;
};

const ProfileBottomPost = ({ breed, age, date, title, src }: ListProps) => {
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
          <S.styleHeader>{title}</S.styleHeader>
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
