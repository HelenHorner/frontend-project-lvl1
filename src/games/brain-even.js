import readlineSync from 'readline-sync';
import {
  randomInteger, showCorrectAnswer, showCongrats, showWrongAnswer, showAgainTime, showNoIsWrong,
  showYesIsWrong,
} from '../index.js';
import { getUserName } from '../cli.js';

const startEven = () => {
  const name = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const n = randomInteger(1, 100);
    const answer = readlineSync.question(`${n} `);

    if (answer === 'yes' && n % 2 === 0) {
      showCorrectAnswer();
    } else if (answer === 'no' && n % 2 === 0) {
      showNoIsWrong();
      showAgainTime(name);
      i = 0;
      return;
    } else if (answer === 'no' && n % 2 !== 0) {
      showCorrectAnswer();
    } else if (answer === 'yes' && n % 2 !== 0) {
      showYesIsWrong();
      showAgainTime(name);
      i = 0;
      return;
    } else if (answer !== 'yes' && answer !== 'no') {
      showWrongAnswer(name);
      return;
    }
    if (i === 2) {
      showCongrats(name);
    }
  }
};
export default startEven;
