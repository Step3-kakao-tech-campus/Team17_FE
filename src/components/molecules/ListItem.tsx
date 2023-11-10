import Image from '../atoms/Image';
import TagBox from '../atoms/TagBox';
import { GenderMale, GenderFemale } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/ListItem';

interface Dog {
  name: string;
  sex: string;
  breed: string;
  image: string;
  age: number;
}

type ListItemProps = {
  dog: Dog;
  title: string;
  dog_bowl: number;
  onClick: () => void;
};

const ListItem = ({ dog, title, dog_bowl, onClick }: ListItemProps) => {
  const { name, sex, breed, image, age } = dog;

  return (
    <S.Container onClick={onClick}>
      <S.ListProfileImgWrapper>
        <Image
          src={image ? image : '/images/dog-sample.png'} // 임시 이미지 설정
          alt="공고글 프로필 이미지"
          size="4"
        />
      </S.ListProfileImgWrapper>
      <span>
        <S.ListLocationWrapper>
          <TagBox
            innerText="용봉동"
            color="#f84514"
            backColor="transparent"
            className="notification__location"
          />
        </S.ListLocationWrapper>
        <S.TextWrapper>
          <S.ListTitle>{title}</S.ListTitle>
          <div>
            <S.ListDogText>
              {name} {age}살&nbsp;
              {sex === '수컷' ? (
                <GenderMale size={18} color="#50c8f0" />
              ) : (
                <GenderFemale size={18} color="#fc7cb4" />
              )}
              <span className="dog__breed">{breed}</span>
              <span className="dog__bowl">{dog_bowl}%</span>
              <img src="/images/dog-bowl.png" alt="개밥그릇" />
            </S.ListDogText>
          </div>
        </S.TextWrapper>
      </span>
    </S.Container>
  );
};

export default ListItem;
