import Image from '../atoms/Image';
import SearchBar from '../molecules/SearchBar';
import * as S from '../../styles/organisms/MainGNB';

const MainGNB = () => {
  return (
    <S.Container>
      <Image src="/images/dog_logo.png" alt="dog logo" size="1.5" />
      <SearchBar />
      <S.ProfileWrapper>
        <Image
          src="/images/test.png"
          alt="default profile"
          className="profile__image"
        />
      </S.ProfileWrapper>
    </S.Container>
  );
};

export default MainGNB;
