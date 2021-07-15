import randomInteger from '../utils.js';
import startGameEngine from '../game-engine.js';

const description = 'What number is missing in the progression?';

const getProgression = (startNum, difNum, progressionLength) => {
  const result = [];
  result.push(startNum);
  let newNum = startNum;
  for (let i = 0; i < progressionLength; i += 1) {
    newNum += difNum;
    result.push(newNum);
  }
  return result;
};

const genRound = () => {
  const index = randomInteger(0, 9);
  const startNum = randomInteger(1, 100);
  const difNum = randomInteger(1, 20);
  const progressionLength = randomInteger(10, 20);
  const progression = getProgression(startNum, difNum, progressionLength);
  const answer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgression = () => {
  startGameEngine(description, genRound);
};

export default startProgression;
