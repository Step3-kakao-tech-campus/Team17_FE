import { TelegramLogo } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/BottomChatBar';

const Navbar = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the search form submission here
  };

  return (
    <S.ContainerFluid>
      <S.Form onClick={() => handleSubmit}>
        <S.Input
          type="search"
          placeholder="메시지 보내기"
          aria-label="Search"
        />
        <S.SearchButton>
          <TelegramLogo size={30} />
        </S.SearchButton>
      </S.Form>
    </S.ContainerFluid>
  );
};

export default Navbar;
