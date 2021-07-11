import { randomInteger, progress } from '../index.js';
import startGameEngine from '../game engine.js';

const startProgression = () => {
  const description = 'What number is missing in the progression?';
  const getQA = () => {
    const index = randomInteger(0, 9);
    const arr = progress();
    const correctAnswer = String(arr[index]);
    arr[index] = '..';
    const question = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}`;
    return [question, correctAnswer];
  };
  startGameEngine(description, getQA);
};

export default startProgression;
