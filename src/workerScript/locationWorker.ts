import { partTimeLocationSave } from '../apis/walking';

self.addEventListener('message', (e) => {
  // 웹 워커로부터 메시지를 받아 위치 업데이트 및 서버 통신 수행
  const { matchingId, lat, lng } = e.data;
  // 서버로 위치 정보를 전송하는 코드 작성
  // 위치를 주기적으로 업데이트하고 서버로 보낸다.

  const locate = {
    matchingId,
    location: { lat, lng },
  };

  // 위치 정보 서버로 전송
  partTimeLocationSave(locate)
    .then((_res) => {})
    .catch((_error) => {});
});
