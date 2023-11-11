import { useParams } from 'react-router-dom';
import DetailNotificationTemplate from '../components/templates/DetailNotificationTemplate';
import { getNotificationById } from '../apis/notification';
import PageLoading from '../components/atoms/PageLoading';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function DetailNotificationPage() {
  const { id } = useParams();
  if (!id) {
    return <div>유효하지 않은 id</div>;
  }
  const notificationId = parseInt(id, 10);
  // const { data, error, isLoading } = useQuery(
  //   [`/notification/${notificationId}`, notificationId],
  //   () => getNotificationById(notificationId),
  // );
  const [data, setData] = useState();
  useEffect(() => {
    getNotificationById(notificationId)
      .then((res) => setData(res.data.response))
      .catch((err) => {
        if (err.message === 'refresh') {
          getNotificationById(notificationId)
            .then((res) => {
              setData(res.data.response);
            })
            .catch((err) => {
              if (err.status) {
                switch (err.status) {
                  case 400:
                    alert(err.error.message);
                    break;
                  default:
                    alert('공고글을 불러오는데 실패했습니다.');
                    break;
                }
              }
            });
        } else if (err.status) {
          switch (err.status) {
            case 400:
              alert(err.error.message);
              break;
            default:
              alert('공고글을 불러오는데 실패했습니다.');
              break;
          }
        }
      });
  }, []);

  return (
    // {data ? (
    //   <DetailNotificationTemplate data={data} />
    // ):<PageLoading/>};
    <Container className="detail__notification">
      {data ? <DetailNotificationTemplate data={data} /> : <PageLoading />}
    </Container>
  );
}

const Container = styled.div`
  animation: slider 0.3s;
  background-color: white;

  @keyframes slider {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default DetailNotificationPage;
