import { randomInteger } from '../index.js';
import startGameEngine from '../game engine.js';

const getCorrectAnswer = (num1, num2, symbol) => {
  let correctAnswer = 0;
  if (symbol === '-') {
    correctAnswer = num1 - num2;
  } else if (symbol === '*') {
    correctAnswer = num1 * num2;
  } else if (symbol === '+') {
    correctAnswer = num1 + num2;
  }
  return correctAnswer;
};

const startCalc = () => {
  const description = 'What is the result of the expression?';
  const ops = ['+', '-', '*'];
  const getQA = () => {
    const opsIndex = randomInteger(0, 2);
    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 100);
    const symbol = ops[opsIndex];
    const question = `${num1} ${symbol} ${num2} `;
    const correctAnswer = String(getCorrectAnswer(num1, num2, symbol));
    return [question, correctAnswer];
  };
  startGameEngine(description, getQA);
};

export default startCalc;
