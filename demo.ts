import sumOfPositiveNums from './positive_numbers/positive_numbers';
import { fibonacci, printFibonacci } from './fibonacci/fibonacci';
import isArmstrong from './armstrong/armstrong';
import palindrome from './palindrome/palindrome';

const num = [1, 2, -4, -7, 6, 5, -10];

console.log(sumOfPositiveNums(num));
console.log(printFibonacci(10));
console.log(fibonacci(5));
console.log(isArmstrong(407));
console.log(palindrome('string'));


