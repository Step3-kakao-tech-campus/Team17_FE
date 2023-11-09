import * as S from '../../styles/atoms/ProfileApplyPost';
import { CaretRight } from '@phosphor-icons/react';

type ListProps = {
  id?: number;
  aboutMe: string;
  certification: string;
  experience: string;
  title: string;
};

const ProfileApplyPost = ({
  // id,
  aboutMe,
  certification,
  experience,
  title,
}: ListProps) => {
  //FIXME :: 최대 글자수 몇으로 할 지 논의 필요
  const MAX_LENGTH = 22; // 최대 글자 수
  let Introduce = certification ? `자격증: ${certification} |` : '';
  Introduce += experience ? `경력: ${experience} |` : '';
  Introduce += aboutMe ? ` 자기소개: ${aboutMe} |` : '';
  Introduce.slice(0, MAX_LENGTH) + (aboutMe.length > MAX_LENGTH ? '...' : ''); // 글자 수가 최대값을 초과하면 ... 추가

  return (
    <>
      {title ? (
        <S.Container>
          <S.StyleContent>
            <S.StyleTitle>
              <span>{Introduce}</span>
            </S.StyleTitle>
            <S.styleHeader>{title}</S.styleHeader>
          </S.StyleContent>
          <S.ArrowContent>
            <CaretRight color="#d6cfa5" size={30} />
          </S.ArrowContent>
        </S.Container>
      ) : null}
    </>
  );
};

export default ProfileApplyPost;
