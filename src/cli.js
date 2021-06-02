
import readlineSync from 'readline-sync'; //импорт библиотеки для чтения пользовательского ввода.

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');

export { userName }