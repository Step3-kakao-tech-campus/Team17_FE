import { SlidersHorizontal, MagnifyingGlass } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/SearchBar';
import FilterModal from '../molecules/FilterModal';
import { Dispatch, SetStateAction } from 'react';

type SearchBarProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setModalOpen }: SearchBarProps) => {
  const handleFilter = () => {
    setModalOpen(true);
  };
  return (
    <S.Container>
      <S.SearchTextWrapper>
        <MagnifyingGlass size={25} className="searchbar__glass" />
        <S.SearchInput
          className="searchbar"
          placeholder="검색어를 입력해주세요"
        />
      </S.SearchTextWrapper>
      <SlidersHorizontal
        size={25}
        className="searchbar__filter"
        style={{ cursor: 'pointer' }}
        onClick={handleFilter}
      />
    </S.Container>
  );
};

export default SearchBar;
