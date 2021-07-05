import readlineSync from 'readline-sync';
import {
  randomInteger, prime, showCorrectAnswer, showCongrats, showWrongAnswer, showAgainTime,
  showNoIsWrong, showYesIsWrong,
} from '../index.js';
import { getUserName } from '../cli.js';

const startPrime = () => {
  const name = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const x = randomInteger(1, 100);

    const answer = readlineSync.question(`${x} `);
    if (answer === 'yes' && prime(x) === true) {
      showCorrectAnswer();
    } else if (answer !== 'yes' && prime(x) === true) {
      showNoIsWrong();
      showAgainTime(name);
      return;
    } else if (answer === 'yes' && prime(x) !== true) {
      showYesIsWrong();
      showAgainTime(name);
      return;
    } else if (answer === 'no' && prime(x) === false) {
      showCorrectAnswer();
    } else if (answer === 'no' && prime(x) !== false) {
      showNoIsWrong();
      showAgainTime(name);
      return;
    } else if (answer !== 'no' && prime(x) === false) {
      showYesIsWrong();
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
export default startPrime;
