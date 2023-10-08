import { useRef, useState } from 'react';
import { CaretLeft } from '@phosphor-icons/react';
import * as S from '../../styles/molecules/FilterModal';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Image from '../atoms/Image';
import TagBox from '../atoms/TagBox';

type FilterModalProps = {
  setModalOpen: (value: boolean) => void;
};

const dogSize = [
  { id: 1, name: '소형견' },
  { id: 2, name: '중형견' },
  { id: 3, name: '대형견' },
];

const dogBreed = [
  { id: 1, name: '리트리버' },
  { id: 2, name: '닥스훈트' },
  { id: 3, name: '말티즈' },
  { id: 4, name: '페키니즈' },
  { id: 5, name: '푸들' },
  { id: 6, name: '슈나이저' },
  { id: 7, name: '보더콜리' },
  { id: 8, name: '비글' },
  { id: 9, name: '비숑' },
  { id: 10, name: '사모예드' },
  { id: 11, name: '보스턴 테리어' },
  { id: 12, name: '시츄' },
  { id: 13, name: '셰틀랜드 쉽독' },
  { id: 14, name: '시바견' },
  { id: 15, name: '시베리안 허스키' },
  { id: 16, name: '웰시 코기' },
  { id: 17, name: '진돗개' },
  { id: 18, name: '치와와' },
  { id: 19, name: '믹스견' },
  { id: 20, name: '요크셔 테리어' },
  { id: 21, name: '코커 스패니얼' },
  { id: 22, name: '이탈리안 그레이하운드' },
  { id: 23, name: '파피용' },
  { id: 24, name: '퍼그' },
  { id: 25, name: '포메라니안' },
  { id: 26, name: '풍산개' },
  { id: 27, name: '불독' },
  { id: 29, name: '미니어처 핀셔' },
  { id: 30, name: '기타' },
];

// 검색 창의 필터 아이콘 클릭 시 나타나는 모달
const FilterModal = ({ setModalOpen }: FilterModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const selectedFilter = useState([]);

  // 모달 바깥 클릭 시 모달 닫기
  useOnClickOutside(ref, () => setModalOpen(false));

  const handleFilterAdap = () => {
    // 서버 api 요청
    setModalOpen(false);
  };

  return (
    <S.Container role="presentation">
      <S.ModalWrapper ref={ref}>
        <S.Modal>
          <S.ModalHeader>
            <CaretLeft
              size={20}
              onClick={() => setModalOpen(false)}
              className="modal__header-icon"
            />
            &nbsp;필터
          </S.ModalHeader>
          <S.DogSizeWrapper>
            <S.DogTitle>견종 사이즈</S.DogTitle>
            <S.DogSizeContent>
              {dogSize.map((size) => (
                <TagBox
                  key={size.id}
                  innerText={size.name}
                  size="1"
                  width="normal"
                  color="#455154"
                  borderColor="#D6CFA5"
                  className="dog-size__tag"
                  backColor="white"
                />
              ))}
            </S.DogSizeContent>
          </S.DogSizeWrapper>
          <S.DogBreedWrapper>
            <S.DogTitle>
              견종
              <span>
                <Image src="/images/dog_logo.png" alt="강아지 로고" />
              </span>
            </S.DogTitle>
            <S.DogBreedContent>
              {dogBreed.map((breed) => (
                <TagBox
                  key={breed.id}
                  innerText={breed.name}
                  size="1"
                  width="normal"
                  color="#455154"
                  borderColor="#D6CFA5"
                  className="dog-breed__tag"
                  backColor="white"
                />
              ))}
            </S.DogBreedContent>
          </S.DogBreedWrapper>
          <S.FilterAdapButton
            className="filter__button"
            onClick={handleFilterAdap}
          >
            필터 적용
          </S.FilterAdapButton>
        </S.Modal>
      </S.ModalWrapper>
    </S.Container>
  );
};

export default FilterModal;
