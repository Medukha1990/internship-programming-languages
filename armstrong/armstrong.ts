const isArmstrong = (num: number) => {
  const initArr = num.toString().split('').map((int) => parseInt(int, initArr));
  const tempArr = [...initArr];
  let pow = 1;
  let flag = false;

  while (true) {
    const amount = tempArr.reduce((acc, curr) => acc + curr ** pow, 0);

    if (amount <= num) {
      if (amount === num) {
        flag = true;
        return flag;
      }
      pow++;
    } else {
      flag = false;
      return flag;
    }
  }
};

export default isArmstrong;
