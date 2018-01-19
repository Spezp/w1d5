const chalk = require('chalk');

console.log(chalk.bgRed.bold('R') + chalk.bgRedBright.bold('O') + chalk.bgYellow.bold('Y') + chalk.bgGreen.bold('G') + chalk.bgBlue.bold('B') + chalk.bgCyan.bold('I') + chalk.bgMagenta.bold('V'));


const COLOURS = ['bgRed', 'bgRedBright', 'bgYellow', 'bgGreen', 'bgBlue', 'bgCyan', 'bgMagenta'];
var whichColour = function() {
  var index = 0;
  //var colourArr = [chalk.bgRed.bold(letter), chalk.bgRedBright.bold(letter), chalk.bgYellow.bold(letter), chalk.bgGreen.bold(letter), chalk.bgBlue.bold(letter), chalk.bgCyan.bold(letter), chalk.bgMagenta.bold[letter]];

  return function (letter) {
    if(index === COLOURS.length) {
      index = 0;
      return chalk[COLOURS[index]].bold(letter);
    } else {

      return chalk[COLOURS[index++]].bold(letter);
    }

  };
};
function makeRainbow(string) {
  var newString = string.split('');
  var setVar = whichColour();


  for (var i = 0; i < newString.length; i++) {
    console.log(setVar(newString[i]));



  }
}

makeRainbow('test me memememme');