const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const divider = (num) => {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};
const NOD = (num1, num2) => {
  const arr1 = divider(num1);
  const arr2 = divider(num2);
  const result = [];
  let i = 0;
  let n = 0;
  while (i < arr1.length && n < arr2.length) {
    if (arr1[i] === arr2[n]) {
      result.push(arr1[i]);
      n += 1;
      i += 1;
    } else if (arr1[i] > arr2[n]) {
      n += 1;
    } else if (arr1[i] < arr2[n]) {
      i += 1;
    }
  }
  return result[result.length - 1];
};
const progress = () => {
  const q = randomInteger(1, 20);
  let newNum = randomInteger(1, 100);
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    newNum += q;
    result.push(newNum);
  }
  return result;
};
const prime = (num) => {
  let result = 0;
  for (let i = num - 1; i > 0; i -= 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  return result === 1;
};
export {
  randomInteger, NOD, progress, prime,
};
