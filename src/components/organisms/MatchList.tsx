import MatchListItem from '../molecules/MatchListItem';
import * as S from '../../styles/organisms/MatchList';
import { useState, useEffect } from 'react';
import { GetMatch } from '../../apis/apply';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../atoms/Spinner';

interface Apply {
  certification: string;
  experience: string;
  matchId: number;
  notiMemberId: number;
  member: Member;
}

interface Member {
  username: string;
  image: string;
  appMemberId: number;
}

const MatchList = () => {
  const [Matchlist, setMatchlist] = useState<any>();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    GetMatch(state?.notificationId)
      .then((response) => {
        console.log('res', response);
        setMatchlist(response.data.response.matchList);
      })
      .catch((error) => {
        if (error.message === 'refresh') {
          GetMatch(state?.notificationId)
            .then((response) => {
              console.log('res', response);
              setMatchlist(response.data.response.matchList);
            })
            .catch((_error) => {
              alert('매칭 리스트를 불러오는데 실패했습니다.');
            });
        } else if (error.status) {
          switch (error.status) {
            case 404:
              {
                alert('지원자가 없습니다.');
                navigate(-1);
              }
              break;
            default: {
              alert('매칭 리스트를 불러오는데 실패했습니다.');
            }
          }
        }
      });
  }, []);
  console.log('matchlist', MatchList);
  return (
    <S.Container>
      {Matchlist ? (
        Matchlist.map((item: Apply) => (
          <MatchListItem key={item.matchId} apply={item} />
        ))
      ) : (
        <Spinner />
      )}
    </S.Container>
  );
};

export default MatchList;
