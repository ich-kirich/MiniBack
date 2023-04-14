console.log("Hello World!");
console.log("Second Line");
const a = Math.sin(123123);
console.log("123");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (questionText: string) => {
  return new Promise((resolve) => {
    readline.question(questionText, (userInput: unknown) => {
      resolve(userInput);
      readline.close();
    });
  });
};

(async () => {
  console.log("#1");
  const name = await question("Who are you?\n");

  console.log("#2");
  console.log("");
  console.log("");
  console.log("");
  console.log("data processed");

  console.log(`Your name is: ${name}`);
})();
