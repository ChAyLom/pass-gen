export const getRandomNumber = (min: number, max: number) => {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);

  return (arr[0] % (max - min + 1)) + min;
}

export const getRandomChar = (source: string) => {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return source.charAt(arr[0] % source.length);
}

export const randomString = (length: number, source: string) => {
  return [...new Array(length).keys()].map(() => getRandomChar(source)).join('');
}


(window as any).getRandomNumber = getRandomNumber;