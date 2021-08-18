const sumOfPositiveNum = (arr: number[]) => {
  const positiveArr = arr.filter((item) => item >= 0);
  let sum = 0;

  for (let i = 0; i < positiveArr.length; i++) {
    sum += positiveArr[i];
  }

  return sum;
};

export default sumOfPositiveNum;
