import MatchListItem from '../molecules/MatchListItem';
import * as S from '../../styles/organisms/MatchList';
import { useState, useEffect } from 'react';
import { GetMatch } from '../../apis/apply';
import { useLocation } from 'react-router-dom';
import Spinner from '../atoms/Spinner';
interface Apply {
  id: number;
  certification: string;
  experience: string;
  matchId: number;
  notimemberId: number;
  member: Member;
}

interface Member {
  username: string;
  image: string;
  appMemberId: number;
}

// interface MatchListProps {
//   matchId: number;
//   notiMemberId: number;
//   certification: string;
//   experience: string;
//   member: MemberProps;
// }
// interface MemberProps {
//   appMemberId: number;
//   username: string;
//   image: string;
// }
const MatchList = () => {
  const [Matchlist, setMatchlist] = useState<any>();
  const { state } = useLocation();

  useEffect(() => {
    GetMatch(state?.notificationId)
      .then((response) => {
        setMatchlist(response.data.response.matchList);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetMatch(state?.notificationId)
            .then((response) => {
              setMatchlist(response.data.response.matchList);
            })
            .catch((error) => {
              console.log('에러', error);
            });
        } else {
          console.log('에러', error);
        }
      });
  }, []);

  console.log('matchlist', Matchlist);
  return (
    <S.Container>
      {Matchlist ? (
        Matchlist.map((item: Apply) => (
          <MatchListItem key={item.id} apply={item} />
        ))
      ) : (
        <Spinner />
      )}
    </S.Container>
  );
};

export default MatchList;
