import MatchListItem from '../molecules/MatchListItem';
import * as S from '../../styles/organisms/MatchList';
import { useState, useEffect } from 'react';
import { GetMatch } from '../../apis/apply';

interface Apply {
  id: number;
  certification: string;
  experience: string;
  member: Member;
}

interface Member {
  username: string;
  image: string;
}

const MatchList = () => {
  const [Matchlist, setMatchlist] = useState([]);

  useEffect(() => {
    GetMatch(1)
      .then((response) => {
        setMatchlist(response.data.response.matchList);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

  // const = [
  //   // {
  //   //   apply: {
  //   //     name: '댕댕죠아',
  //   //     image: '/images/dog-sample.png',
  //   //     certification: '반려동물 관리사',
  //   //     experience: '동물 보호소 2년',
  //   //   },
  //   //   id: 1,
  //   // },
  // ];

  console.log(Matchlist);
  return (
    <S.Container>
      {Matchlist &&
        Matchlist.map((item: Apply) => (
          <MatchListItem key={item.id} apply={item} />
        ))}
    </S.Container>
  );
};

export default MatchList;
