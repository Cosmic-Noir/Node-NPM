// const debug = require("debug");

// const foo = "foo-value";

// console.log(foo);

// const fs = require("fs");
// const chalk = require("chalk-animation");

// const contents = fs.readdirSync("./animals");

// const animation = chalk.rainbow(contents.join("\n"));

// animation.start();

// setTimeout(() => animation.stop(), 2000);

const fs = require("fs");
const { animateString } = require("./animate-string");

const contents = fs.readdirSync("./animals");

animateString(contents.join("\n"));
