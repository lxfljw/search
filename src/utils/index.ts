export function setLocalStorage(key: string, value: any) {
  let storeValue: any = value;
  if (typeof value === "object") {
    storeValue = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
  const value = window.localStorage.getItem(key);
  return value && JSON.parse(value);
}
