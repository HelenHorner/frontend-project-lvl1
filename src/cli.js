import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const startHello = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${getUserName()}!`);
};

export {
  startHello, getUserName,
};
