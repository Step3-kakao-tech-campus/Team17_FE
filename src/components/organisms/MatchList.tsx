import MatchListItem from '../molecules/MatchListItem';
import * as S from '../../styles/organisms/MatchList';
import { useState, useEffect } from 'react';
import { GetApply } from '../../apis/apply';

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
    GetApply(1)
      .then((response) => {
        setMatchlist(response.data.response.matchList);
      })
      .catch((error) => {
        console.log('에러', error);
      });
  }, []);

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
