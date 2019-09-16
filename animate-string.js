const chalk = require("chalk-animation");

const validMethods = [`glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow`];
// grab third positionin args arary:
const scriptArg = process.argv[2];
const method = validMethods.includes(scriptArg) ? scriptArg : "rainbow";

function animateString(string) {
  const animation = chalk[method](string);
  animation.start();
  setTimeout(() => animation.stop(), 2000);
}

module.exports = { animateString: animateString };
