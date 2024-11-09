export const getRandomNumber = (min: number, max: number) => {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);

  return (arr[0] % (max - min + 1)) + min;
};

export const getRandomChar = (source: string) => {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return source.charAt(arr[0] % source.length);
};

export const randomString = (length: number, source: string) => {
  return [...new Array(length).keys()].map(() => getRandomChar(source)).join('');
};

export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const swap = getRandomNumber(0, i);
    [array[i], array[swap]] = [array[swap], array[i]];
  }
  return array;
};

export const shuffleString = (string: string) => {
  const arr = string.split('');
  shuffleArray(arr);
  return arr.join('');
};
