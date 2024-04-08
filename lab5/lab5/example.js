import antlr4 from 'antlr4';
import TinyPLListener from './TinyPLListener.js'
import parseCode from './util.js';

class MyWalker extends TinyPLListener {                             // Энэ класст өөр хэрэгтэй listener-үүдийн их биеийг дахин тодорхойлж бичнэ.
    constructor(output) {
        super();
        this.output = output;
        this.variables = {};                                        // Функц, хувьсагчид зориулсан нэр болон объектийн холбоосыг бүртгэж авах
        this.scopes = [{}];                                         // Хамрах хүрээг хянах хувьсагч зарлав.
    }

    // TODO: Implement the hooks                                    

    // Listeners;
    enterVariableDeclaration(ctx) {                                 // ХУВЬСАГЧ ЗАРЛАГДАХ ҮЕД АЖИЛЛАНА
        const id = ctx.Identifier().getText();        
        this.getCurrentScope()[id] = null;                              // Одоогийн ажиллаж буй блокт хувьсагчийн зарлаж байна
        console.log('Variable Declaration:', id);
    }

    enterFunctionDeclaration(ctx) {                                 // ФУНКЦ ЗАРЛАГДАХ ҮЕД АЖИЛЛАНА
        const id = ctx.Identifier().getText();        
        this.variables[id] = ctx.statements();                          // ctx.statements(); нь функцийн блок
        console.log('Function Declaration:', id);
    }

    enterAssignment(ctx) {                                          // УТГА ОЛГОХ ҮЕД АЖИЛЛАНА
        const id = ctx.Identifier(0).getText();                         // Хувьсагчийн нэрийг контекстоос авч байна.
        const value = ctx.Number().getText();                           // Утгыг контекстоос авч байна.        
        this.getCurrentScope()[id] = value;                             // Одоогийн ажиллаж буй блокоос хувьсагчийг олж утга олгож байна
        console.log('Assignment:', id, '=', value);
    }

    enterCall(ctx) {                                                // ФУНКЦ ДУУДАГДАХ ҮЕД АЖИЛЛАНА
        const id = ctx.Identifier().getText();                          // Функцийн (хэрэв print байвал хувьсагчийн) нэрийг контекстоос авч байна.

        if (ctx.PrintKeyword()) {                                       // Функцийн нэрийг контекстоос авч байна.
            console.log('Print:', id);

            const value = this.findVariable(id);                        // Хувьсагчийн холбоосыг блок шатлалаас хайж олох
            if (value !== null) {
                this.output.push(value);                                // Хувьсагч зарлагдаагүй (анхын утга олгогдоогүй) бол алдаа өгч байна.
            } else {
                console.log('Error: Variable', id, 'not found');        // Хэвлэж буй хувьсагч нь зарлагдаагүй (анхын утга олгогдоогүй) бол алдаа өгнө.
            }

            return;
        }

        console.log('Function Call:', id);
        this.scopes.push({});                                           // Хооосон шинэ блок үсгэж байна.                                                                
        this.visitTerminal(this.variables[id]);                         // функцийн блокийг variables-т бүртгэсэн. visitTerminal функцээр тухайн блок руу шилжин орж байна.                                                            
        this.scopes.pop();                                              // Дээд мөр ажиллаад блокоос гарч байгаа тул блокыг хасаж байна.                             
    }


    // Туслах функцүүд;
    getCurrentScope() {
        return this.scopes[this.scopes.length - 1];                     // яг одоогийн хамрах хүрээг буцаана
    }

    findVariable(id) {                                                  // хамгийн дотор талаас гадагшаа хамрах хүрээнүүдээр гүйж хувьсагчийг олно.
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            if (id in this.scopes[i]) return this.scopes[i][id];        
        }
        return null;
    }

}

// Жишээ программ
const code = [
    "var outer;",
    "function callme {",
    "  var inner;",
    "  inner = 567;",
    "  print(outer);",
    "  print(inner);",
    "}",
    "outer = 99;",
    "callme();",
    "print(outer);"
]


const parse_tree = parseCode(code.join(""));                            // Өгөгдсөн программын задлан шинжилгээний модыг байгуулж байна.

var output = []
var treeWalker = new MyWalker(output);                                  // TinyPL-ийн дагуу listener функцүүдийг байгуулсан класс  (TinyPL хэлний хэлзүйн дүрэм нь TinyPL.g4 файлд бичигдсэн байгаа)
antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeWalker, parse_tree);       // Задлан шинжилгээний модоор эхнээс нэвтэрч бүх токены хувьд listener функцийг идэвхжүүлдэг

console.log("MY RESULT:", output);