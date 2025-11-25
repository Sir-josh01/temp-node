const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
console.log('started here')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  const first = result
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is an async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done with this task')
      }
    );
  });
});
console.log('Moving to the next')
