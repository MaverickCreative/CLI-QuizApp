/**
 * Simple Quiz App
 */

var chalk = require('chalk');
var readlineSync = require('readline-sync');

var options = ['a', 'b', 'c', 'd'];
var score = 0;

var userName = readlineSync.question(chalk.bold('What is your name? '));
console.log(chalk.bold(chalk.green('Welcome to Anurag\'s repl ' + userName + ' :). You will be asked some interesting question\'s on Hockey and your score will be calculated accrodingly.\n')));

console.log(chalk.bold('<--Instructions-->\n'));
console.log(chalk.bold('The Quiz will have a total of 8 questions.\n'));
console.log(chalk.bold('For each correct answer you will be awarded 2 points and no points will be awarded for any incorrect answer.\n'));
console.log(chalk.bold('Hope you enjoy the quiz ahead!\n'));

var questions = [
{
question: '1.) Which among these is the highest governing body of Hockey ?',
options: ['International Hockey Federation', 'World Hockey Federation', 'Federation of International Hockey','International Hockey Association'],
answer: 1,
elaborateAnswer: 'Option [1] i.e. International Hockey Federation.'
},
{
question: '2.) Total no. of players playing on the pitch in a hockey match is?',
options: ['24', '18','22','16'],
answer: 3,
elaborateAnswer: 'Option [3] i.e. 22'
},
{
question: '3.) Which player is allowed to touch the ball with his feet during a Hockey match?',
options: ['Defender', 'Goalkeeper', 'Centre-forward', 'Winger'],
answer: 2,
elaborateAnswer: 'Option [2] i.e. Goalkeeper'
},
{
question: '4.) What are the dimensions of the goal at each end of the hockey field?',
options: ['2.15m X 3.7m', '2.14m X 3.7m', '2.14m X 3.66m','2.15m X 3.66m'],
answer: 3,
elaborateAnswer: 'Option [3] i.e. 2.14m x 3.66m'
},
{
question: '5.) The distance between the penalty spot and the goal is?',
options: ['6 yrds', '12 yrds','8 yrds','4 yrds'],
answer: 2,
elaborateAnswer: 'Option [2] i.e. 12 yrds'
},
{
question: '6.) The limit on numbers of substitutions per game is?',
options: ['7','3','2','5'],
answer: 4,
elaborateAnswer: 'Option [4] i.e. 5.'
},
{
question: '7.) No. of field empires in a match is?',
options: ['1','4','3','2'],
answer: 4,
elaborateAnswer: 'Option [4] i.e. 2.'
},
{
question: '8.) Which nation has been crowned as World Champions of Hockey four times?',

options: ['India','France','Australia','Pakistan'],
answer: 4,
elaborateAnswer: 'Option [4] i.e. Pakistan.'
}];

questions.forEach((que) => {
  console.log(chalk.bold.bgYellow(que.question));
  var chosenOption = readlineSync.keyInSelect(que.options, chalk.bold('Which option ?'));
  if((chosenOption+1) === que.answer)
  {
    score += 2;
    console.log(chalk.bold(chalk.green('Hurray!!! You got it right :)')));
    console.log(chalk.bold('Your current score is: ' + score));
  }
  else
  {
    console.log(chalk.bold(chalk.red('Oops!!! You got that wrong :(')));
    var ans = 'option' + que.answer;
    console.log(chalk.bold('The correct answer is ' + que.elaborateAnswer));
    console.log(chalk.bold('Your score remains: ' + score));
  }
  console.log('----------------------------');
});

console.log(chalk.bold('You scored a total of: ' + score));
console.log('\n');
console.log(chalk.bold('Well if you have come this far, great!!! I hope you liked it and if you would like to know me more or would like to share constructive criticism you can follow me on Twitter @geraltviari and I will also follow you back. P.S. I also make memes :P\n'));

console.log(chalk.bold('Thank you.'));

