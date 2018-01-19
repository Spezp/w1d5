const chalk = require('chalk');

console.log(chalk.bgRed.bold('R') + chalk.bgRedBright.bold('O') + chalk.bgYellow.bold('Y') + chalk.bgGreen.bold('G') + chalk.bgBlue.bold('B') + chalk.bgCyan.bold('I') + chalk.bgMagenta.bold('V'));

var whichColour = function(letter) {
  index = 0;
  var colourArr = [chalk.bgRed.bold(letter), chalk.bgRedBright.bold(letter), chalk.bgYellow.bold(letter), chalk.bgGreen.bold(letter), chalk.bgBlue.bold(letter), chalk.bgCyan.bold(letter), chalk.bgMagenta.bold[letter]];
  return function () {
    if(index === colourArr.length) {
      index = 0;
      return colourArr[index];
    } else if(index === 0){
      return colourArr[index];
    } else {
      index++;
      return colourArr[index];
    }

  };
};
function makeRainbow(string) {
  var newString = string.split('');
  for (var i = 0; i < newString.length; i++) {
    console.log(whichColour(string[i]));
  }
}




var rainbowText = sendSplit(string);

rainbowText('Test');