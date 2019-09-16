const fs = require("fs");
const path = require("path");

const source = process.argv[2];
const target = process.argv[3];

// read contents of source
const contentsOfSource = fs.readFileSync(source, "utf-8");

// get lines of source into an array, remove empty lines
const linesInSource = contentsOfSource.split("\n").filter(Boolean);

// Make the target dir if it doest exist

if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}

// iterate over lines
linesInSource.forEach(line => {
  // get content of lines, first word is filename, rest is content
  const [filename, ...contentArr] = line.split(" ");
  const newFilePath = path.join(__dirname, target, filename);

  fs.writeFileSync(newFilePath, contentArr.join(" "), {
    flag: "w+",
    encoding: "utf-8"
  });
});
