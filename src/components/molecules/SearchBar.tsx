import { SlidersHorizontal, MagnifyingGlass } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/SearchBar';

const SearchBar = () => {
  return (
    <S.Container>
      <S.SearchTextWrapper>
        <MagnifyingGlass size={25} className='searchbar__glass'/>
        <S.SearchInput className='searchbar' placeholder="검색어를 입력해주세요" />
      </S.SearchTextWrapper>
      <SlidersHorizontal size={25} className='searchbar__filter'/>
    </S.Container>
  )
}

export default SearchBar