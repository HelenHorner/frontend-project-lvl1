import startGameEngine from '../game-engine.js';
import randomInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const getAnswer = (num) => {
  if (isEven(num)) {
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

const startEven = () => {
  startGameEngine(description, genRound);
};

export default startEven;
