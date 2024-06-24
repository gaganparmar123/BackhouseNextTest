export function clearToken() {
  localStorage.clear();
}

export const getLocalStorageKeys = (key: string) => {
  return localStorage.getItem(key);
};
