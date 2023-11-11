export const setLocalStorage = (key: string, value: string) => {
  // 하루만 유효하도록 로컬스토리지 값 설정
  const now = new Date();
  now.setHours(23, 59, 59, 0);
  const expires = now.getTime();
  const item = { value: value, expires: expires };
  localStorage.setItem(key, JSON.stringify(item));
};

export const setLocalStorageWithExp = (key: string, value: string) => {
  // max age로 설정
  // const now = new Date();
  // const item = { value: value, expires: now.getTime() + ttl };
  const expireInSeconds = 2147483647;
  const now = new Date();
  now.setTime(now.getTime() + expireInSeconds * 1000);
  const expires = now.getTime();
  const item = { value: value, expires: expires };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
