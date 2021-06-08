#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

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

console.log('Find the greatest common divisor of given numbers.');

const gcdFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const x = randomInteger(1, 100);
    const n = randomInteger(1, 100);
    const correctAnw = String(NOD(x, n));

    const answer = readlineSync.question(`${x} ${n} `);
    if (answer === correctAnw) {
      console.log('Correct!');
    } else if (answer !== correctAnw) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnw}. Let's try again, ${userName}!`);
      return;
    } else {
      console.log(`Is wrong answer ;(. Let's try again, ${userName}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
gcdFunction();
