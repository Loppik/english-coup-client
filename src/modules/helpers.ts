// TESTME:
export const getRandomInt = (min: number, max: number) => Math.floor(Math.random()*(max - min + 1)) + min;

// TESTME:
export const shuffleArrayElements = (ar: any[]) => {
  let index: number = ar.length, randIndex;
  while (index !== 0 ) {
    randIndex = getRandomInt(0, index);
    index -= 1;
    ar = swapTwoArrayElements(ar, randIndex, index);
  }
  return ar;
}

// TESTME:
export const swapTwoArrayElements = (ar: any[], firstIndex: number, secondIndex: number) => {
  const temp = ar[firstIndex];
  ar[firstIndex] = ar[secondIndex];
  ar[secondIndex] = temp;
  return ar;
}