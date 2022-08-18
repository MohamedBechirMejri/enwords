const fs = require("fs");

fs.readFile("./words.txt", "utf8", (err, data) => {
  if (err) throw err;

  let words = data.split("\n");

  fs.writeFile("./words.json", JSON.stringify(words), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
