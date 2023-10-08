import { SlidersHorizontal, MagnifyingGlass } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/SearchBar';
import { useState } from 'react';
import FilterModal from '../molecules/FilterModal';

const SearchBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
      {modalOpen && <FilterModal setModalOpen={setModalOpen} />}
    </S.Container>
  );
};

export default SearchBar;
