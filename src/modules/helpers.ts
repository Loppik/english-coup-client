// TESTME:
export const getRandomInt = (min: number, max: number): number => Math.floor(Math.random()*(max - min + 1)) + min;

// TESTME:
export const shuffleArrayElements = <T>(ar: T[]): T[] => {
  let index: number = ar.length - 1, randIndex;
  while (index > 0 ) {
    randIndex = getRandomInt(0, index);
    index -= 1;
    ar = swapTwoArrayElements(ar, randIndex, index);
  }
  return ar;
};

// TESTME:
export const swapTwoArrayElements = <T>(ar: T[], firstIndex: number, secondIndex: number): T[] => {
  const temp = ar[firstIndex];
  ar[firstIndex] = ar[secondIndex];
  ar[secondIndex] = temp;
  return ar;
};
