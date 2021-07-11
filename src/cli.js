import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startHello = () => {
  console.log('Welcome to the Brain Games!');
};

export {
  startHello, getUserName,
};
