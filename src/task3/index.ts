import * as readline from "readline";
import { MyList } from "./mylist.js";

const list: MyList<string> = new MyList<string>();

// list.add("1");
// list.add("2");
// list.add("3");
//
// list.delete(2);
// list.show();
// list.insert("22", 1);
// list.show();
// list.add("hello");
// list.show();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "command> "
});
//
console.log("Available command: show, add [data], insert [data] [index], showElem [index], delete [index]");
rl.prompt();

rl.on("line", (answer) => {
    const answerArr: string[] = answer.trim().split(" ");
    let data: string;
    let index: number;
    switch (answerArr[0].toLowerCase()) {
        case "add":
            data = answerArr[1];
            if (data) {
                if (list.add(data)) {
                    console.log(`element [${data}] successfully added`);
                } else {
                    console.log("element can't be added");
                }
            } else {
                console.log("Input correct element");
            }
            rl.prompt();
            break;
        case "insert":
            data = answerArr[1];
            index = parseInt(answerArr[2], 10);
            if (data) {
                if (list.insert(data, index)) {
                    console.log(`element [${data}] successfully inserted after element with index ${index}`);
                } else {
                    console.log("input correct index!");
                }
            } else {
                console.log("Input correct data and index");
            }
            rl.prompt();
            break;
        case "delete":
            index = parseInt(answerArr[1], 10);
            if (index !== undefined) {
                if (list.delete(index)) {
                    console.log(`element with index ${index} successfully deleted`);
                } else {
                    console.log("input correct index!");
                }
            } else {
                console.log("Input correct index");
            }
            rl.prompt();
            break;
        case "show":
            list.show();
            rl.prompt();
            break;
        case "showelem":
            index = parseInt(answerArr[1], 10);
            if (index !== undefined) {
                list.showWithIndex(index);
            } else {
                console.log("Input correct index");
            }
            rl.prompt();
            break;
        case "exit":
            rl.close();
            break;
        default:
            console.log("Input correct command!");
            rl.prompt();
            break;
    }
});
rl.on("close", () => {
    console.log("End");
    process.exit(0);
});
