import Milestone2 from './Milestone2.js';
import parseCode from './util.js';

function test1() {
    const code = []
    code.push(
        "function a {",
        "  var x;",
        "  x = 55;",
        "  b();",
        "}",
        "function b {",
        "  print(x);",
        "}",
        "var x;",
        "x = 1;",
        "a();"
    )
    const tree = parseCode(code.join(""));
    const interpreter = new Milestone2(tree);
    const output = interpreter.run();

    if (output.length === 1) {
        console.log("The output has the expected length.");
    } else {
        console.log("The output does not have the expected length.");
    }

    if (output[0] == "1") {
        console.log("The output has the expected value.");
    } else {
        console.log("The output does not have the expected value.");
    }
}

function test2() {
    const code = []
    code.push(
        "function a {",
        "  var x;",
        "  x = 3;",
        "  print(x);",
        "}",
        "var x;",
        "x = 2;",
        "a();"
    )
    const tree = parseCode(code.join(""));
    const interpreter = new Milestone2(tree);
    const output = interpreter.run();

    if (output.length === 1) {
        console.log("The output has the expected length.");
    } else {
        console.log("The output does not have the expected length.");
    }

    if (output[0] == "3") {
        console.log("The output has the expected value.");
    } else {
        console.log("The output does not have the expected value.");
    }
}

console.log("Testing Milestone2:");
console.log("test1:");
test1();
console.log("test2:");
test2();
