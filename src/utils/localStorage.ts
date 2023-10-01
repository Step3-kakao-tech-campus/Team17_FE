export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const setLocalStorageWithExp = (
  key: string,
  value: string,
  ttl: number,
) => {
  const now = new Date();
  const item = { value: value, expires: now.getTime() + ttl };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
