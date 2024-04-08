import Milestone1 from "./Milestone1.js";
import parseCode from "./util.js";

function test1() {
    const code = [];
    code.push(
        "function f {",
        "  var x;",
        "  x = 7;",
        "  print(x);",
        "}",
        "f();"
    );

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