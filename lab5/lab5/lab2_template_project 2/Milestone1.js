import antlr4 from 'antlr4';
import TinyPLListener from './TinyPLListener.js'

class MyVisitor extends TinyPLListener {
    constructor(output) {
        super();
        this.output = output;
    }
    // TODO: Implement the hooks
}

export default class Milestone1 {
    constructor(tree) {
        this.tree = tree;
    }

    run() {
        var output = [];
        var treeVisitor = new MyVisitor(output);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeVisitor, this.tree);
        return output;
    }
}