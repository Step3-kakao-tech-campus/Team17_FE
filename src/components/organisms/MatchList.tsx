import MatchListItem from '../molecules/MatchListItem';
import * as S from '../../styles/organisms/MatchList';
import { useState, useEffect } from 'react';
import { GetMatch } from '../../apis/apply';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
              alert(error.data.error.message);
              navigate(-1);
            });
        } else {
          alert(error.data.error.message);
          navigate(-1);
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
