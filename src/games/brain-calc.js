import readlineSync from 'readline-sync';
import {
  randomInteger, showCorrectAnswer, showCongrats, showWrongAnswer, showAgainTime,
} from '../index.js';
import { getUserName } from '../cli.js';

const startCalc = () => {
  const name = getUserName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const ops = ['+', '-', '*'];
    const opsIndex = randomInteger(0, 2);
    const n = randomInteger(1, 100);
    const x = randomInteger(1, 100);

    const answer = readlineSync.question(`${n}${ops[opsIndex]}${x} `);
    const answerNum = Number(answer);
    if (ops[opsIndex] === '+' && answerNum === n + x) {
      showCorrectAnswer();
    } else if (ops[opsIndex] === '+' && answerNum !== n + x) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${n + x}.`);
      showAgainTime(name);
      return;
    } else if (ops[opsIndex] === '-' && answerNum === n - x) {
      showCorrectAnswer();
    } else if (ops[opsIndex] === '-' && answerNum !== n - x) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${n - x}.`);
      showAgainTime(name);
      return;
    } else if (ops[opsIndex] === '*' && answerNum === n * x) {
      showCorrectAnswer();
    } else if (ops[opsIndex] === '*' && answerNum !== n * x) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${n * x}.`);
      showAgainTime(name);
      return;
    } else {
      showWrongAnswer(name);
      return;
    }
    if (i === 2) {
      showCongrats(name);
    }
  }
};
export default startCalc;
