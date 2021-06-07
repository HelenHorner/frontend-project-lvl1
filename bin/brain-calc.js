#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('What is the result of the expression?');

const getRandomNumber = () => {
  const m = Math.random() * 10;
  return Math.floor(m);
};
const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const calcFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const ops = ['+', '-', '*'];
    const opsIndex = randomInteger(0, 2);
    const n = getRandomNumber();
    const x = getRandomNumber();

    const answer = readlineSync.question(`${n}${ops[opsIndex]}${x} `);
    const answerNum = Number(answer);
    if (ops[opsIndex] === '+' && answerNum === n + x) {
      console.log('Correct!');
    } else if (ops[opsIndex] === '+' && answerNum !== n + x) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${n + x}. Let's try again, ${userName}!`);
      return;
    } else if (ops[opsIndex] === '-' && answerNum === n - x) {
      console.log('Correct!');
    } else if (ops[opsIndex] === '-' && answerNum !== n - x) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${n - x}. Let's try again, ${userName}!`);
      return;
    } else if (ops[opsIndex] === '*' && answerNum === n * x) {
      console.log('Correct!');
    } else if (ops[opsIndex] === '*' && answerNum !== n * x) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${n * x}. Let's try again, ${userName}!`);
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

calcFunction();