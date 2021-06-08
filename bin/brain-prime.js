#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
const prime = (num) =>{
  let result = 0;
  for (let i = num - 1; i > 0; i -= 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  return result === 1;
};
const primeFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const x = randomInteger(1, 100);

    const answer = readlineSync.question(`${x} `);
    if (answer === 'yes' && prime(x) === true) {
      console.log('Correct!');
    } else if (answer !== 'yes' && prime(x) === true) {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
      return;
    } else if (answer === 'yes' && prime(x) !== true) {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${userName}!`);
      return;
    } else if (answer === 'no' && prime(x) === false) {
      console.log('Correct!');
    } else if (answer === 'no' && prime(x) !== false) {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${userName}!`);
      return;
    } else if (answer !== 'no' && prime(x) === false) {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${userName}!`);
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
primeFunction();
