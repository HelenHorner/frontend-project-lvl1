import readlineSync from 'readline-sync';
import {
  randomInteger, progress, showCorrectAnswer, showCongrats, showWrongAnswer, showAgainTime,
} from '../index.js';
import { getUserName } from '../cli.js';

const startProgression = () => {
  const name = getUserName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const index = randomInteger(0, 9);
    const arr = progress();
    const correctAns = String(arr[index]);
    arr[index] = '..';

    const answer = readlineSync.question(`${arr} `);
    if (answer === correctAns) {
      showCorrectAnswer();
    } else if (answer !== correctAns) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAns}.`);
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
export default startProgression;
