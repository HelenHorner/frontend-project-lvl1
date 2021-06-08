#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
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
const progressFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const index = randomInteger(0, 9);
    const arr = progress();
    const correctAns = String(arr[index]);
    arr[index] = '..';

    const answer = readlineSync.question(`${arr} `);
    if (answer === correctAns) {
      console.log('Correct!');
    } else if (answer !== correctAns) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAns}. Let's try again, ${userName}!`);
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
progressFunction();
