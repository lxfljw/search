export function setSessionStorage(key: string, value: any) {
  let storeValue: any = value;
  if (typeof value === "object") {
    storeValue = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
}

export function getSessionStorage(key: string) {
  const value = window.sessionStorage.getItem(key);
  return value && JSON.parse(value);
}
