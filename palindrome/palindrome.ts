const palindrome = (str: string) => {
  const reverseStr = str.split('')
    .reverse()
    .join('');

  return reverseStr === str;
};

export default palindrome;
