import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { randomInteger, NOD } from '../src/index.js';

const gcdFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const x = randomInteger(1, 100);
    const n = randomInteger(1, 100);
    const correctAnw = String(NOD(x, n));

    const answer = readlineSync.question(`${x} ${n} `);
    if (answer === correctAnw) {
      console.log('Correct!');
    } else if (answer !== correctAnw) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnw}. Let's try again, ${userName}!`);
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
export default gcdFunction;
