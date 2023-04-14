"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Hello World!");
console.log("Second Line");
const a = Math.sin(123123);
console.log("123");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const question = (questionText) => {
    return new Promise((resolve) => {
        readline.question(questionText, (userInput) => {
            resolve(userInput);
            readline.close();
        });
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("#1");
    const name = yield question("Who are you?\n");
    console.log("#2");
    console.log("");
    console.log("");
    console.log("");
    console.log("data processed");
    console.log(`Your name is: ${name}`);
}))();
