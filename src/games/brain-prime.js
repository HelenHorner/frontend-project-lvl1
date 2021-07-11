import { randomInteger, prime } from '../index.js';
import startGameEngine from '../game engine.js';

const getCorrectAnswer = (num) => {
  if (prime(num)) {
    return 'yes';
  }
  return 'no';
};

const startPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const getQA = () => {
    const num = randomInteger(1, 100);
    const question = num;
    const correctAnswer = getCorrectAnswer(num);
    return [question, correctAnswer];
  };
  startGameEngine(description, getQA);
};
export default startPrime;
