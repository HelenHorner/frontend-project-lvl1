import randomInteger from '../utils.js';
import startGameEngine from '../game-engine.js';

const description = 'What is the result of the expression?';

const ops = ['+', '-', '*'];

const calc = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    default:
      throw new Error('there is no this type of operation');
  }
};

const genRound = () => {
  const opsIndex = randomInteger(0, ops.length - 1);
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const operation = ops[opsIndex];
  const question = `${num1} ${operation} ${num2} `;
  const answer = String(calc(num1, num2, operation));
  return [question, answer];
};

const startCalc = () => {
  startGameEngine(description, genRound);
};

export default startCalc;
