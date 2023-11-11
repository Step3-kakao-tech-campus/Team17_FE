// 웹 앱 스크립트 파일

const worker = new Worker('locationWorker.js');

// 웹 워커로부터 메시지를 받는 이벤트 리스너 설정
worker.addEventListener('message', (_e) => {
  // 웹 워커에서 받은 메시지 처리
});

// 위치 업데이트 및 서버 통신 메시지를 웹 워커로 전송
const sendLocationUpdateToWorker = (
  matchingId: number,
  lat: number,
  lng: number,
) => {
  worker.postMessage({ matchingId, lat, lng });
};

// 일정 주기로 위치 업데이트 및 메시지 전송
setInterval(() => {
  // 위치 정보 업데이트 및 웹 워커로 전송
  const matchingId = 123; // 매칭 ID
  const lat = 3.1122; // 위도
  const lng = 2.3323; // 경도
  sendLocationUpdateToWorker(matchingId, lat, lng);
}, 10000); // 예: 10초마다 업데이트
