import randomInteger from '../utils.js';
import startGameEngine from '../game-engine.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  let result = 0;
  for (let i = num - 1; i > 0; i -= 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  return result === 1;
};

const getAnswer = (num) => {
  if (isPrime(num)) {
    return 'yes';
  }
  return 'no';
};

const genRound = () => {
  const num = randomInteger(1, 100);
  const question = String(num);
  const answer = getAnswer(num);
  return [question, answer];
};

const startPrime = () => {
  startGameEngine(description, genRound);
};

export default startPrime;
