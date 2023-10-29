import Image from '../atoms/Image';
import * as S from '../../styles/molecules/MatchListItem';

interface Apply {
  name: string;
  certification: string;
  experience: string;
  image: string;
}

type ListItemProps = {
  apply: Apply;
};

const MatchListItem = ({ apply }: ListItemProps) => {
  const { image, name, certification, experience } = apply;

  const handleClick = () => {
    console.log('click');
    // 해당 지원서 페이지로 이동
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ProfileImgWrapper>
        <Image src={image} alt="지원자 임시 이미지" />
      </S.ProfileImgWrapper>
      <span>
        <S.TextWrapper>
          <S.ListTitle>닉네임 : {name}</S.ListTitle>
          <S.ListTitle>자격증 : {certification}</S.ListTitle>
          <S.ListTitle>경험 : {experience}</S.ListTitle>
        </S.TextWrapper>
      </span>
    </S.Container>
  );
};

export default MatchListItem;
