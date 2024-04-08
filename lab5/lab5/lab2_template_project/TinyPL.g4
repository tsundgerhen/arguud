grammar TinyPL;

// Lexer rules

OpenParen: '(';
CloseParen: ')';
OpenBrace: '{';
CloseBrace: '}';
SemiColon: ';';
Assign: '=';
FunctionKeyword: 'function';
VarKeyword: 'var';
PrintKeyword: 'print';
Identifier: [a-z][a-z]*;
Number: [1-9][0-9]*;

// Parser rules

WS: [ \t\r\n]+ -> skip;

program:
    statements;

statements:
    statement*;

statement:
    variableDeclaration
    | assignment
    | functionDeclaration
    | call;

variableDeclaration:
    VarKeyword Identifier SemiColon;

assignment:
    Identifier Assign Identifier SemiColon
    | Identifier Assign Number SemiColon;

functionDeclaration:
    FunctionKeyword Identifier OpenBrace statements CloseBrace;

call:
    Identifier OpenParen CloseParen SemiColon
    | PrintKeyword OpenParen Identifier CloseParen SemiColon;
