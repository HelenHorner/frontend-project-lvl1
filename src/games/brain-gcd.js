import randomInteger from '../utils.js';
import startGameEngine from '../game-engine.js';

const description = ('Find the greatest common divisor of given numbers.');

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const genRound = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const answer = String(gcd(num1, num2));
  const question = `${num1} ${num2} `;
  return [question, answer];
};

const startGcd = () => {
  startGameEngine(description, genRound);
};

export default startGcd;
