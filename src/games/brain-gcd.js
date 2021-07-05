import readlineSync from 'readline-sync';
import {
  randomInteger, NOD, showCorrectAnswer, showCongrats, showWrongAnswer, showAgainTime,
} from '../index.js';
import { getUserName } from '../cli.js';

const startGcd = () => {
  const name = getUserName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const x = randomInteger(1, 100);
    const n = randomInteger(1, 100);
    const correctAnw = String(NOD(x, n));

    const answer = readlineSync.question(`${x} ${n} `);
    if (answer === correctAnw) {
      showCorrectAnswer();
    } else if (answer !== correctAnw) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnw}.`);
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
export default startGcd;
