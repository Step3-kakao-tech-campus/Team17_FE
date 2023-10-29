import MatchListItem from '../molecules/MatchListItem';
import * as S from '../../styles/organisms/MatchList';

const MatchList = () => {
  const data = [
    {
      apply: {
        name: '댕댕죠아',
        image: '/images/dog-sample.png',
        certification: '반려동물 관리사',
        experience: '동물 보호소 2년',
      },
      id: 1,
    },
    {
      apply: {
        name: '댕댕죠아',
        image: '/images/dog-sample.png',
        certification: '반려동물 관리사',
        experience: '동물 보호소 2년',
      },
      id: 1,
    },
    {
      apply: {
        name: '댕댕죠아',
        image: '/images/dog-sample.png',
        certification: '반려동물 관리사',
        experience: '동물 보호소 2년',
      },
      id: 1,
    },
    {
      apply: {
        name: '댕댕죠아',
        image: '/images/dog-sample.png',
        certification: '반려동물 관리사',
        experience: '동물 보호소 2년',
      },
      id: 1,
    },
  ];

  return (
    <S.Container>
      {data.map((item) => (
        <MatchListItem
          key={item.id} // user id
          apply={item.apply}
        />
      ))}
    </S.Container>
  );
};

export default MatchList;
