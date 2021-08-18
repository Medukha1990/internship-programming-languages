const fizzBuzz = (num: number) => {
  for (let i = 1; i < num; i++) {
    const str = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz');
    console.log(str === '' ? i : str);
  }
};

export default fizzBuzz;
