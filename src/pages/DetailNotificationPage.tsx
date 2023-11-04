import { useParams } from 'react-router-dom';
import DetailNotificationTemplate from '../components/templates/DetailNotificationTemplate';
import { useQuery } from 'react-query';
import { getNotificationById } from '../apis/notification';
import PageLoading from '../components/atoms/PageLoading';

function DetailNotificationPage() {
  const { id } = useParams();
  if (!id) {
    return <div> 유효하지 않은 id</div>;
  }
  const notificationId = parseInt(id, 10);
  const { data, error, isLoading } = useQuery(
    [`/notification/${notificationId}`, notificationId],
    () => getNotificationById(notificationId),
  );
  if (isLoading) {
    return <div> 로딩중 ...</div>;
  }
  if (data) {
    console.log('data : ', data);
  }
  return (
    <>
      {!isLoading && data ? (
        <DetailNotificationTemplate data={data?.data.response} />
      ) : (
        <PageLoading />
      )}
    </>
  );
}

export default DetailNotificationPage;
