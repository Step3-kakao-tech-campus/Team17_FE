import * as S from '../../styles/atoms/ProfileApplyPost';
import { CaretRight } from '@phosphor-icons/react';
import Image from '../atoms/Image';
type ListProps = {
  id?: number;
  aboutMe: string;
  certification: string;
  experience: string;
};

const ProfileApplyPost = ({
  id,
  aboutMe,
  certification,
  experience,
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
        <span>{aboutMe}</span>
        <span>{certification}</span>
        <span>{experience}</span>
      </S.PictureContainer>
      <S.ArrowContent>
        <CaretRight color="white" size={30} />
      </S.ArrowContent>
    </S.Container>
  );
};

export default ProfileApplyPost;
