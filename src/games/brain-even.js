import startGameEngine from '../game engine.js';
import { randomInteger } from '../index.js';

const getCorrectAnswer = (n) => {
  if (n % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const startEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const getQA = () => {
    const n = randomInteger(1, 100);
    const question = `${n}`;
    const correctAnswer = String(getCorrectAnswer(n));
    return [question, correctAnswer];
  };
  startGameEngine(description, getQA);
};
export default startEven;
