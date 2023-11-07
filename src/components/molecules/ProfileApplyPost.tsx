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
      {/* TODO:: CSS 수정해야함 */}

      <S.StyleContent>
        <S.StyleTitle>
          <span>
            {experience}
            {certification}
          </span>
        </S.StyleTitle>
        <S.styleHeader>{aboutMe}</S.styleHeader>
      </S.StyleContent>
      <S.ArrowContent>
        <CaretRight color="white" size={30} />
      </S.ArrowContent>
    </S.Container>
  );
};

export default ProfileApplyPost;
