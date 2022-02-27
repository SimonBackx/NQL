/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,7],$V2=[1,8],$V3=[1,6,10],$V4=[1,9],$V5=[1,6,8,10],$V6=[1,20],$V7=[1,21],$V8=[1,22],$V9=[1,23],$Va=[1,24],$Vb=[1,25],$Vc=[1,26],$Vd=[20,21,22,23,24,28,29],$Ve=[1,6,8,10,17],$Vf=[1,39],$Vg=[6,17];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"expressions":3,"expression":4,"andCondition":5,"OR":6,"filterExpr":7,"AND":8,"LPAREN":9,"RPAREN":10,"propExpr":11,"valueExpr":12,"PROP":13,"NOT":14,"LBRACKET":15,"inExpr":16,"RBRACKET":17,"OP":18,"VALUE":19,"NULL":20,"TRUE":21,"FALSE":22,"NUMBER":23,"NOW":24,"DATEOP":25,"AMOUNT":26,"INTERVAL":27,"LITERAL":28,"STRING":29,"ADD":30,"SUB":31,"GT":32,"LT":33,"GTE":34,"LTE":35,"$accept":0,"$end":1},
terminals_: {2:"error",6:"OR",8:"AND",9:"LPAREN",10:"RPAREN",13:"PROP",14:"NOT",15:"LBRACKET",17:"RBRACKET",20:"NULL",21:"TRUE",22:"FALSE",23:"NUMBER",24:"NOW",26:"AMOUNT",27:"INTERVAL",28:"LITERAL",29:"STRING",30:"ADD",31:"SUB",32:"GT",33:"LT",34:"GTE",35:"LTE"},
productions_: [0,[3,1],[4,1],[4,3],[5,1],[5,3],[7,3],[7,2],[11,1],[12,4],[12,3],[12,2],[12,1],[16,3],[16,1],[19,1],[19,1],[19,1],[19,1],[19,4],[19,1],[19,1],[25,1],[25,1],[18,1],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */, opt) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 yy.debug('expression', $$[$0]); yy.debug('opt', opt); return $$[$0]; 
break;
case 2:
 yy.debug('andCondition', $$[$0]); this.$ = $$[$0]; 
break;
case 3:

        yy.debug('expression OR andCondition', $$[$0-2], $$[$0]);
        $$[$0-2] = $$[$0-2].$or ? $$[$0-2] : {$or: [yy.ungroup($$[$0-2])]};
        $$[$0-2].$or.push(yy.ungroup($$[$0])); this.$ = $$[$0-2];
    
break;
case 4:
 yy.debug('filterExpr', $$[$0]); this.$ = $$[$0] 
break;
case 5:

        yy.debug('andCondition AND filterExpr', $$[$0-2], $$[$0]);
        $$[$0-2] = $$[$0-2].$and ? $$[$0-2] : {$and: [yy.ungroup($$[$0-2])]};
        $$[$0-2].$and.push(yy.ungroup($$[$0]));
        this.$ = $$[$0-2];
    
break;
case 6:
 yy.debug('LPAREN expression RPAREN', $$[$0-1]); this.$ = {yg: $$[$0-1]}; 
break;
case 7:
 this.$ = {[$$[$0-1]]: $$[$0]}; 
break;
case 8:
 $$[$0] = $$[$0].replace(/:$/, ''); $$[$0] = opt.aliases && opt.aliases[$$[$0]] ? opt.aliases[$$[$0]] : $$[$0]; this.$ = $$[$0]; 
break;
case 9:
 this.$ = {$nin: $$[$0-1]}; 
break;
case 10:
 this.$ = {$in: $$[$0-1]}; 
break;
case 11:
 this.$ = {}; this.$[$$[$0-1]] = $$[$0]; 
break;
case 12:
 this.$ = $$[$0]; 
break;
case 13:
 this.$.push($$[$0]); 
break;
case 14:
 this.$ = [$$[$0]]; 
break;
case 15:
 this.$ = null 
break;
case 16:
 this.$ = true 
break;
case 17:
 this.$ = false 
break;
case 18:
 this.$ = parseInt(yytext); 
break;
case 19:
 this.$ = yy.relDateToAbsolute($$[$0-2], $$[$0-1], $$[$0]) 
break;
case 20:
 this.$ = yy.unescape($$[$0]); 
break;
case 21:
 $$[$0] = $$[$0].replace(/^'|'$/g, ''); this.$ = yy.unescape($$[$0]); 
break;
case 22:
 this.$ = "add"; 
break;
case 23:
 this.$ = "sub"; 
break;
case 24:
 this.$ = "$ne"; 
break;
case 25:
 this.$ = "$gt"; 
break;
case 26:
 this.$ = "$lt"; 
break;
case 27:
 this.$ = "$gte"; 
break;
case 28:
 this.$ = "$lte"; 
break;
}
},
table: [{3:1,4:2,5:3,7:4,9:$V0,11:6,13:$V1},{1:[3]},{1:[2,1],6:$V2},o($V3,[2,2],{8:$V4}),o($V5,[2,4]),{4:10,5:3,7:4,9:$V0,11:6,13:$V1},{12:11,14:[1,12],15:[1,13],18:14,19:15,20:$V6,21:$V7,22:$V8,23:$V9,24:$Va,28:$Vb,29:$Vc,32:[1,16],33:[1,17],34:[1,18],35:[1,19]},o([14,15,20,21,22,23,24,28,29,32,33,34,35],[2,8]),{5:27,7:4,9:$V0,11:6,13:$V1},{7:28,9:$V0,11:6,13:$V1},{6:$V2,10:[1,29]},o($V5,[2,7]),o($Vd,[2,24],{15:[1,30]}),{16:31,19:32,20:$V6,21:$V7,22:$V8,23:$V9,24:$Va,28:$Vb,29:$Vc},{19:33,20:$V6,21:$V7,22:$V8,23:$V9,24:$Va,28:$Vb,29:$Vc},o($V5,[2,12]),o($Vd,[2,25]),o($Vd,[2,26]),o($Vd,[2,27]),o($Vd,[2,28]),o($Ve,[2,15]),o($Ve,[2,16]),o($Ve,[2,17]),o($Ve,[2,18]),{25:34,30:[1,35],31:[1,36]},o($Ve,[2,20]),o($Ve,[2,21]),o($V3,[2,3],{8:$V4}),o($V5,[2,5]),o($V5,[2,6]),{16:37,19:32,20:$V6,21:$V7,22:$V8,23:$V9,24:$Va,28:$Vb,29:$Vc},{6:$Vf,17:[1,38]},o($Vg,[2,14]),o($V5,[2,11]),{26:[1,40]},{26:[2,22]},{26:[2,23]},{6:$Vf,17:[1,41]},o($V5,[2,10]),{19:42,20:$V6,21:$V7,22:$V8,23:$V9,24:$Va,28:$Vb,29:$Vc},{27:[1,43]},o($V5,[2,9]),o($Vg,[2,13]),o($Ve,[2,19])],
defaultActions: {35:[2,22],36:[2,23]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

 /*
  * This chunk is included in the parser code, before the lexer definition section and after the parser has been defined.
  */

 parser.parseError = function(errStr, object) {
     var lines = errStr.split("\n");
     lines[0] = "Query Error: unexpected character in filter at char " + (object.loc.first_column + 1);
     throw new Error(lines.join("\n"));
 };

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 20;
break;
case 2:return 21;
break;
case 3:return 22;
break;
case 4:return 13;
break;
case 5:return 23;
break;
case 6:return 15;
break;
case 7:return 17;
break;
case 8: this.pushState('reldate');
                                                            return 24; 
break;
case 9:return 31;
break;
case 10:return 30;
break;
case 11:return 26
break;
case 12: this.popState();
                                                            return 27 
break;
case 13:return 28;
break;
case 14:return 29;
break;
case 15:return 9;
break;
case 16:return 10;
break;
case 17:return 6;
break;
case 18:return 8;
break;
case 19:return 14;
break;
case 20:return 34;
break;
case 21:return 35;
break;
case 22:return 32;
break;
case 23:return 33;
break;
}
},
rules: [/^(?:\s+)/,/^(?:(?:null|NULL|Null)(?!(\\(['"\+\,\(\)\>\<=\[\]])|([^\s'"\+\,\(\)\>\<=\[\]]))+))/,/^(?:(?:true|TRUE|True)(?!(\\(['"\+\,\(\)\>\<=\[\]])|([^\s'"\+\,\(\)\>\<=\[\]]))+))/,/^(?:(?:false|FALSE|False)(?!(\\(['"\+\,\(\)\>\<=\[\]])|([^\s'"\+\,\(\)\>\<=\[\]]))+))/,/^(?:[a-zA-Z_][a-zA-Z0-9_\.]*[:])/,/^(?:[0-9]+(\.[0-9]+)?\b(?![\-]))/,/^(?:\[)/,/^(?:\])/,/^(?:now(?=[-+]\d+[dwMyhms](?:([\+\,\(\)\[\]])|$)))/,/^(?:-)/,/^(?:\+)/,/^(?:\d+)/,/^(?:[dwMyhms])/,/^(?:([^\s'"\+\,\(\)\>\<=\[\]\-])(\\(['"\+\,\(\)\>\<=\[\]])|([^\s'"\+\,\(\)\>\<=\[\]]))+)/,/^(?:['](\\['"]|[^'"])+?['])/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\+)/,/^(?:-)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/],
conditions: {"reldate":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,13,14,15,16,17,18,19,20,21,22,23],"inclusive":true}}
});
lexer.parseError = function(errStr, object) {
    var lines = errStr.split("\n"),
        caretPos,
        char;

    caretPos = lines[2].indexOf("^");
    char = lines[1].charAt(caretPos);
    lines[0] = "Query Error: unrecognized text \"" + char + "\" in filter at char " + (caretPos + 1);

    throw Error(lines.join("\n"));
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}