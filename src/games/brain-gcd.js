import { randomInteger, NOD } from '../index.js';
import startGameEngine from '../game engine.js';

const startGcd = () => {
  const description = ('Find the greatest common divisor of given numbers.');
  const getQA = () => {
    const x = randomInteger(1, 100);
    const n = randomInteger(1, 100);
    const correctAnswer = String(NOD(x, n));
    const question = `${x} ${n} `;
    return [question, correctAnswer];
  };
  startGameEngine(description, getQA);
};
export default startGcd;
