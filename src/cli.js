import readlineSync from 'readline-sync'; //    импорт библиотеки для чтения пользовательского ввода.

const userName = readlineSync.question('May I have your name? ');

export default userName;
