import antlr4 from 'antlr4';
import TinyPLLexer from './TinyPLLexer.js';
import TinyPLParser from './TinyPLParser.js'

export default function parseCode(code) {
    return parseCodeWithParser(code);
}

function parseCodeWithParser(code) {
    const lexer = new TinyPLLexer(antlr4.CharStreams.fromString(code));
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new TinyPLParser(tokens);
    const tree = parser.program();
    return tree;
}