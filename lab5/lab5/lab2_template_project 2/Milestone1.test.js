import Milestone1 from './Milestone1.js';
import parseCode from './util.js';

function test1() {
    const code = []
    code.push(
        "function f {",
        "  var x;",
        "  x = 7;",
        "  print(x);",
        "}",
        "f();"
    )

    const tree = parseCode(code.join(""));
    const interpreter = new Milestone1(tree);
    const output = interpreter.run();

    if (output.length === 1) {
        console.log("The output has the expected length.");
    } else {
        console.log("The output does not have the expected length.");
    }

    if (output[0] == "7") {
        console.log("The output has the expected value.");
    } else {
        console.log("The output does not have the expected value.");
    }
}

function test2() {
    const code = []
    code.push(
        "function callme {",
        "  var inner;",
        "  inner = 567;",
        "  print(outer);",
        "  print(inner);",
        "}",
        "var outer;",
        "outer = 99;",
        "callme();",
        "print(outer);"
    )

    const tree = parseCode(code.join(""));
    const interpreter = new Milestone1(tree);
    const output = interpreter.run();

    if (output.length === 3) {
        console.log("The output has the expected length.");
    } else {
        console.log("The output does not have the expected length.");
    }

    if (output[0] == "99" && output[1] == "567" && output[2] == "99") {
        console.log("The output has the expected value.");
    } else {
        console.log("The output does not have the expected value.");
    }
}

console.log("Testing Milestone1:");
console.log("test1:");
test1();
console.log("test2:");
test2();