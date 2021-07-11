import readlineSync from 'readline-sync';
import { getUserName, startHello } from './cli.js';

const startGameEngine = (description, getQA) => {
  startHello();
  const name = getUserName();
  console.log(description);

  const endOfTheGame = 3;
  for (let i = 0; i < endOfTheGame; i += 1) {
    const [question, correctAnswer] = getQA();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameEngine;
