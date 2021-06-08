import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import randomInteger from '../src/index.js';

const calcFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const ops = ['+', '-', '*'];
    const opsIndex = randomInteger(0, 2);
    const n = randomInteger(1, 100);
    const x = randomInteger(1, 100);

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
export default calcFunction;
