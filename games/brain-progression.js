import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { randomInteger, progress } from '../src/index.js';

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
export default progressFunction;
