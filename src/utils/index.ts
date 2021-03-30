export function setLocalStorage(key: string, value: any) {
  let storeValue: any = value;
  console.log(value);

  if (typeof value === "object") {
    storeValue = JSON.stringify(value);
  }
  window.localStorage.setItem(key, storeValue);
}

export function getLocalStorage(key: string) {
  const value = window.localStorage.getItem(key);
  console.log(value);

  return value && JSON.parse(value);
}
