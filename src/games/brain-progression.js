import { randomInteger, progress } from '../index.js';
import startGameEngine from '../game engine.js';

const startProgression = () => {
  const description = 'What number is missing in the progression?';
  const getQA = () => {
    const index = randomInteger(0, 9);
    const arr = progress();
    const correctAnswer = String(arr[index]);
    arr[index] = '..';
    const question = `${arr}`;
    return [question, correctAnswer];
  };
  startGameEngine(description, getQA);
};

export default startProgression;
