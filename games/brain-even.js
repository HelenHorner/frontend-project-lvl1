import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import randomInteger from '../src/index.js';

const evenFunction = () => {
  for (let i = 0; i < 3; i += 1) {
    const n = randomInteger(1, 100);
    const answer = readlineSync.question(`${n} `);

    if (answer === 'yes' && n % 2 === 0) {
      console.log('Correct!');
    } else if (answer === 'no' && n % 2 === 0) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
      i = 0;
      return;
    } else if (answer === 'no' && n % 2 !== 0) {
      console.log('Correct!');
    } else if (answer === 'yes' && n % 2 !== 0) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
      i = 0;
      return;
    } else if (answer !== 'yes' && answer !== 'no') {
      console.log(`Is wrong answer ;(. Let's try again, ${userName}!`);
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default evenFunction;
