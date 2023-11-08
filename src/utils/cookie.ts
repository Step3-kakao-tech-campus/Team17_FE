export const setCookie = (key: string, value: string) => {
  const now = new Date();
  now.setHours(23, 59, 59, 0);
  const expires = `expires=${now.toUTCString()}`;
  document.cookie = `${key}=${value};${expires}path=/;samesite=strict;secure;`;
};

export const setCookieWithExp = (key: string, value: string) => {
  const expireInSeconds = 2147483647;
  const now = new Date();
  now.setTime(now.getTime() + expireInSeconds * 1000);
  const expires = `expires=${now.toUTCString()}`;
  document.cookie = `${key}=${value};expires=${expires};path=/;samesite=strict;secure;`;
};

export const getCookie = (key: string): string | null => {
  const cookieName = `${key}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return null;
};

export const deleteCookie = (key: string) => {
  document.cookie = key + `=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
