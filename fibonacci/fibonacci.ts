export const printFibonacci = (num: number) => {
  const result = [0, 1];

  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result.slice(0, num);
};

export const fibonacci = (num: number) => {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
};
