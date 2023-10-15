import { SlidersHorizontal, MagnifyingGlass } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/SearchBar';
import { Dispatch, SetStateAction } from 'react';
import React from 'react';

type SearchBarProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setModalOpen, search, setSearch }: SearchBarProps) => {
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
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
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

export default React.memo(SearchBar);
