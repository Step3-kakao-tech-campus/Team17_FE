import { useParams } from 'react-router-dom';
import DetailNotificationTemplate from '../components/templates/DetailNotificationTemplate';
import { getNotificationById } from '../apis/notification';
import PageLoading from '../components/atoms/PageLoading';
import { useEffect, useState } from 'react';

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
        console.log('err', err);
      });
  });

  return (
    // {data ? (
    //   <DetailNotificationTemplate data={data} />
    // ):<PageLoading/>};
    <>{data ? <DetailNotificationTemplate data={data} /> : <PageLoading />}</>
  );
}

export default DetailNotificationPage;
