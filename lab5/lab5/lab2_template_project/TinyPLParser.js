// Generated from src/interpreter/TinyPL.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import TinyPLListener from './TinyPLListener.js';
const serializedATN = [4,1,12,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,1,5,1,18,8,1,10,1,12,1,21,9,1,1,2,1,2,1,2,1,2,
3,2,27,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,41,8,4,1,
5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,58,8,6,1,6,
0,0,7,0,2,4,6,8,10,12,0,0,58,0,14,1,0,0,0,2,19,1,0,0,0,4,26,1,0,0,0,6,28,
1,0,0,0,8,40,1,0,0,0,10,42,1,0,0,0,12,57,1,0,0,0,14,15,3,2,1,0,15,1,1,0,
0,0,16,18,3,4,2,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,
0,20,3,1,0,0,0,21,19,1,0,0,0,22,27,3,6,3,0,23,27,3,8,4,0,24,27,3,10,5,0,
25,27,3,12,6,0,26,22,1,0,0,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,
5,1,0,0,0,28,29,5,8,0,0,29,30,5,10,0,0,30,31,5,5,0,0,31,7,1,0,0,0,32,33,
5,10,0,0,33,34,5,6,0,0,34,35,5,10,0,0,35,41,5,5,0,0,36,37,5,10,0,0,37,38,
5,6,0,0,38,39,5,11,0,0,39,41,5,5,0,0,40,32,1,0,0,0,40,36,1,0,0,0,41,9,1,
0,0,0,42,43,5,7,0,0,43,44,5,10,0,0,44,45,5,3,0,0,45,46,3,2,1,0,46,47,5,4,
0,0,47,11,1,0,0,0,48,49,5,10,0,0,49,50,5,1,0,0,50,51,5,2,0,0,51,58,5,5,0,
0,52,53,5,9,0,0,53,54,5,1,0,0,54,55,5,10,0,0,55,56,5,2,0,0,56,58,5,5,0,0,
57,48,1,0,0,0,57,52,1,0,0,0,58,13,1,0,0,0,4,19,26,40,57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TinyPLParser extends antlr4.Parser {

    static grammarFileName = "TinyPL.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "';'", "'='", 
                            "'function'", "'var'", "'print'" ];
    static symbolicNames = [ null, "OpenParen", "CloseParen", "OpenBrace", 
                             "CloseBrace", "SemiColon", "Assign", "FunctionKeyword", 
                             "VarKeyword", "PrintKeyword", "Identifier", 
                             "Number", "WS" ];
    static ruleNames = [ "program", "statements", "statement", "variableDeclaration", 
                         "assignment", "functionDeclaration", "call" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TinyPLParser.ruleNames;
        this.literalNames = TinyPLParser.literalNames;
        this.symbolicNames = TinyPLParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TinyPLParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.statements();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TinyPLParser.RULE_statements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1920) !== 0)) {
	            this.state = 16;
	            this.statement();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TinyPLParser.RULE_statement);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.variableDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 24;
	            this.functionDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 25;
	            this.call();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TinyPLParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(TinyPLParser.VarKeyword);
	        this.state = 29;
	        this.match(TinyPLParser.Identifier);
	        this.state = 30;
	        this.match(TinyPLParser.SemiColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TinyPLParser.RULE_assignment);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.match(TinyPLParser.Identifier);
	            this.state = 33;
	            this.match(TinyPLParser.Assign);
	            this.state = 34;
	            this.match(TinyPLParser.Identifier);
	            this.state = 35;
	            this.match(TinyPLParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.match(TinyPLParser.Identifier);
	            this.state = 37;
	            this.match(TinyPLParser.Assign);
	            this.state = 38;
	            this.match(TinyPLParser.Number);
	            this.state = 39;
	            this.match(TinyPLParser.SemiColon);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TinyPLParser.RULE_functionDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(TinyPLParser.FunctionKeyword);
	        this.state = 43;
	        this.match(TinyPLParser.Identifier);
	        this.state = 44;
	        this.match(TinyPLParser.OpenBrace);
	        this.state = 45;
	        this.statements();
	        this.state = 46;
	        this.match(TinyPLParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TinyPLParser.RULE_call);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(TinyPLParser.Identifier);
	            this.state = 49;
	            this.match(TinyPLParser.OpenParen);
	            this.state = 50;
	            this.match(TinyPLParser.CloseParen);
	            this.state = 51;
	            this.match(TinyPLParser.SemiColon);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(TinyPLParser.PrintKeyword);
	            this.state = 53;
	            this.match(TinyPLParser.OpenParen);
	            this.state = 54;
	            this.match(TinyPLParser.Identifier);
	            this.state = 55;
	            this.match(TinyPLParser.CloseParen);
	            this.state = 56;
	            this.match(TinyPLParser.SemiColon);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TinyPLParser.EOF = antlr4.Token.EOF;
TinyPLParser.OpenParen = 1;
TinyPLParser.CloseParen = 2;
TinyPLParser.OpenBrace = 3;
TinyPLParser.CloseBrace = 4;
TinyPLParser.SemiColon = 5;
TinyPLParser.Assign = 6;
TinyPLParser.FunctionKeyword = 7;
TinyPLParser.VarKeyword = 8;
TinyPLParser.PrintKeyword = 9;
TinyPLParser.Identifier = 10;
TinyPLParser.Number = 11;
TinyPLParser.WS = 12;

TinyPLParser.RULE_program = 0;
TinyPLParser.RULE_statements = 1;
TinyPLParser.RULE_statement = 2;
TinyPLParser.RULE_variableDeclaration = 3;
TinyPLParser.RULE_assignment = 4;
TinyPLParser.RULE_functionDeclaration = 5;
TinyPLParser.RULE_call = 6;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_program;
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_statements;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitStatements(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_variableDeclaration;
    }

	VarKeyword() {
	    return this.getToken(TinyPLParser.VarKeyword, 0);
	};

	Identifier() {
	    return this.getToken(TinyPLParser.Identifier, 0);
	};

	SemiColon() {
	    return this.getToken(TinyPLParser.SemiColon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_assignment;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TinyPLParser.Identifier);
	    } else {
	        return this.getToken(TinyPLParser.Identifier, i);
	    }
	};


	Assign() {
	    return this.getToken(TinyPLParser.Assign, 0);
	};

	SemiColon() {
	    return this.getToken(TinyPLParser.SemiColon, 0);
	};

	Number() {
	    return this.getToken(TinyPLParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_functionDeclaration;
    }

	FunctionKeyword() {
	    return this.getToken(TinyPLParser.FunctionKeyword, 0);
	};

	Identifier() {
	    return this.getToken(TinyPLParser.Identifier, 0);
	};

	OpenBrace() {
	    return this.getToken(TinyPLParser.OpenBrace, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	CloseBrace() {
	    return this.getToken(TinyPLParser.CloseBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TinyPLParser.RULE_call;
    }

	Identifier() {
	    return this.getToken(TinyPLParser.Identifier, 0);
	};

	OpenParen() {
	    return this.getToken(TinyPLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(TinyPLParser.CloseParen, 0);
	};

	SemiColon() {
	    return this.getToken(TinyPLParser.SemiColon, 0);
	};

	PrintKeyword() {
	    return this.getToken(TinyPLParser.PrintKeyword, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TinyPLListener ) {
	        listener.exitCall(this);
		}
	}


}




TinyPLParser.ProgramContext = ProgramContext; 
TinyPLParser.StatementsContext = StatementsContext; 
TinyPLParser.StatementContext = StatementContext; 
TinyPLParser.VariableDeclarationContext = VariableDeclarationContext; 
TinyPLParser.AssignmentContext = AssignmentContext; 
TinyPLParser.FunctionDeclarationContext = FunctionDeclarationContext; 
TinyPLParser.CallContext = CallContext; 
