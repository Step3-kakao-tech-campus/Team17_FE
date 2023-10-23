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
  dog_bowl: string;
};

const ListItem = ({ dog, title, dog_bowl }: ListItemProps) => {
  const { name, sex, breed, image, age } = dog;

  const handleClick = () => {
    console.log('click');
    // 해당 공고 상세 페이지로 이동
  };

  return (
    <S.Container onClick={handleClick}>
      <S.ListProfileImgWrapper>
        <Image src={image} alt="강아지 임시 이미지" />
      </S.ListProfileImgWrapper>
      <span>
        <S.ListLocationWrapper>
          <TagBox
            innerText="용봉동"
            color="#A59D52"
            borderColor="#A59D52"
            backColor="transparent"
            className="notification__location"
          />
        </S.ListLocationWrapper>
        <S.TextWrapper>
          <S.ListTitle>{title}</S.ListTitle>
          <div>
            <S.ListDogText>
              {name}&nbsp;{age}살&nbsp;
              {sex === 'male' ? (
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
