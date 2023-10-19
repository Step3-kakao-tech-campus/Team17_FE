import { setupWorker } from 'msw';
import { getNotificationWidFilter } from './notificationHandler';
import { getRegisterError, register } from './registerHandler';
import { setLogin, getLoginError } from './loginHandler';
import { getPayment, setPayment } from './paymentHandler';

// 브라우저에서 service wordker를 사용할 수 있도록 생성해준다.
export const worker = setupWorker(
  getNotificationWidFilter,
  register,
  getRegisterError,
  setLogin,
  getLoginError,
  setPayment,
  getPayment,
);

/**
 * msw를 사용하기 위해서는 브라우저에서 service worker를 사용할 수 있도록 생성해줘야 합니다.
 * setupWorker에 여러 핸들러 등록 방법은 아래와 같습니다. 참고하여 사용하시면 됩니다.
 * 물론 파일 경로도 같이 추가해주셔야 합니다.
 * export const worker = setupWorker(
    getNotificationWidFilter,
    someOtherHandler // 다른 핸들러 추가
);
 */
