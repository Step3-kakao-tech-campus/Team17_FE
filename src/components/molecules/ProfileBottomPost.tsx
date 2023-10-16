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
        <Image src={src} alt="강아지사진" size="3.0"></Image>
        <S.StyleContent>
          <S.StyleTitle>
            <span>{breed}</span>
            <span> | </span>
            <span>{age}살</span>
            <span> | </span>
            <span>{date}</span>
          </S.StyleTitle>
          <span>{title}</span>
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
