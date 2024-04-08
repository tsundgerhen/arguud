file://<WORKSPACE>/task_2/src/task_2/Main.java
### java.util.NoSuchElementException: next on empty iterator

occurred in the presentation compiler.

presentation compiler configuration:
Scala version: 3.3.1
Classpath:
<HOME>/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.3.1/scala3-library_3-3.3.1.jar [exists ], <HOME>/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.10/scala-library-2.13.10.jar [exists ]
Options:



action parameters:
offset: 6229
uri: file://<WORKSPACE>/task_2/src/task_2/Main.java
text:
```scala
package task_2;

import java.util.Stack;
import java.util.ArrayList;
import java.util.List;
public class Main {
    public static String evaluate(String postfix){
        String[] tokens = postfix.split("\\s+");
        Stack<Integer> operandStack = new Stack<>();
        String finalResult; 
        for(int i = 0; i < tokens.length; i++){
            if(isNumber(tokens[i])){
                operandStack.push(Integer.parseInt(tokens[i]));
            } else {
                int operand2 = operandStack.pop();
                int operand1 = operandStack.pop();
                int result;
                switch (tokens[i]) {
                    case "+":
                        result = operand1 + operand2;
                    break;
                    case "-":
                        result = operand1 - operand2;
                    break;    
                    case "/":
                        result = operand1 / operand2;
                    break;
                    case "*":
                        result = operand1 * operand2;
                    break;
                    case "**":
                        result = (int)Math.pow((double)operand1, (double)operand2);
                    break;
                    case ">>":
                        String binary = Integer.toBinaryString(operand1);
                        String resultstr = binary.substring(0, binary.length() - 2);
                        result = Integer.parseInt(resultstr, 2);
                        break;
                    case "<<":
                        binary = Integer.toBinaryString(operand1);
                        String substr = "";
                        for (int j = 0; j < operand2; j++) {
                            substr += "0";
                        }
                        for (int j = 0; j < binary.length() - operand2; j++){
                            substr += binary.charAt(j);
                        }
                        result = Integer.parseInt(substr, 2);
                    break;
                    case "<":
                        if (operand1 < operand2) result = 1;
                        else result = 0;
                    break;
                    case ">":
                        if (operand1 < operand2) result = 0;
                        else result = 1;
                    break;
                    case "!=":
                        if (operand1 != operand2) result = 1;
                        else result = 0;
                    break;
                    case "&&":
                        if(operand1 == 1 && operand2 == 1) result = 1;
                        else result = 0;
                    break;
                    case "||":
                        if(operand1 == 1 || operand2 == 1) result = 1;
                        else result = 0;
                    break;
                    default:
                    throw new IllegalArgumentException("Invalid operator: " + tokens[i]);
                }
                operandStack.push(result);
             }
        }
        if(isConditionalOperator(tokens[tokens.length-1])){
            if(operandStack.pop() == 1) finalResult = "true";
            else finalResult = "false";
        }
        else {
            finalResult = String.valueOf(operandStack.pop());
        }
        return finalResult;
    }
    public static String infixToPostfix(String infix, String[][] rules) {
        StringBuilder postfix = new StringBuilder();
        Stack<String> operatorStack = new Stack<>();
        String[] tokens = infix.split("\\s+");
        for (int i = 0; i < tokens.length; i++) {
            String str = tokens[i];
            if(isNumber(str)){
                postfix.append(str).append(" ");;
            }
            else if (str == "("){
                operatorStack.push(str);
            }
            else if (str == ")"){
                while(!operatorStack.isEmpty() && operatorStack.peek() != "("){
                    postfix.append(operatorStack.pop()).append(" ");;
                }
                operatorStack.pop();
            }
            else {
                while(!operatorStack.isEmpty() && (precedence(str, rules) < precedence(operatorStack.peek(), rules) 
 precedence(str, rules) == precedence(operatorStack.peek(), rules) && associative(str, rules) == "L")) {
                            postfix.append(operatorStack.pop()).append(" ");;
                }
                operatorStack.push(str);
            }
        }
        while (!operatorStack.isEmpty()) {
            postfix.append(operatorStack.pop()).append(" ");
        }
    
        return postfix.toString().trim();
    }

    public static String associative(String operator, String[][] rules){
        return rules[getIndex(operator)][1];
        
    }
    private static int precedence(String operator, String[][] rules) {
        return 6 - Integer.parseInt(rules[getIndex(operator)][2]);
    }
    
    private static int getIndex(String operator) {
        Rule rules = new Rule();
        String[][] rule = rules.getRule1();
        for(int i = 0; i < 12; i++){
            if(rule[i][0].equals(operator)){
                return i;
            } 
        }
        return -1;
    }
    
    private static boolean isNumber(String token) {
        try {
            Double.parseDouble(token);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static boolean isConditionalOperator(String operator){
        if(!operator.equals(">") && !operator.equals("<") && !operator.equals("!=") && !operator.equals("&&") && !operator.equals("||")) return false;
        else return true;
    }
    public static void calculate(String expression, String[][] rule){
        System.out.println(expression + " = " + infixToPostfix(expression, rule) + " = " + evaluate(infixToPostfix(expression, rule)));
    }
    public static void main(String args[]) {
        Rule rule = new Rule();
        calculate("5 ** 2 >> 6 / 3", rule.getRule1());
        calculate("2 ** 2 ** 3 / 4 + 3 * 2", rule.getRule1());
        calculate("12 - 2 * 4 != 1 && 9 + 10 / 2 > 12", rule.getRule1());
        calculate(@@"12 - 2 * 4 != 1 && 9 + 10 / 2 > 12", rule.getRule1());
        calculate("3 * 2 + 4 << 3 << 1", rule.getRule2());
        calculate("2 * 4 + 9 < 20 || 45 / 5 + 4 != 5", rule.getRule2());
        calculate("5 * 3 ** 2 + 5 > 6 ** 3 >> 4 / 2", rule.getRule2());
        
    }
}

```



#### Error stacktrace:

```
scala.collection.Iterator$$anon$19.next(Iterator.scala:973)
	scala.collection.Iterator$$anon$19.next(Iterator.scala:971)
	scala.collection.mutable.MutationTracker$CheckedIterator.next(MutationTracker.scala:76)
	scala.collection.IterableOps.head(Iterable.scala:222)
	scala.collection.IterableOps.head$(Iterable.scala:222)
	scala.collection.AbstractIterable.head(Iterable.scala:933)
	dotty.tools.dotc.interactive.InteractiveDriver.run(InteractiveDriver.scala:168)
	scala.meta.internal.pc.MetalsDriver.run(MetalsDriver.scala:45)
	scala.meta.internal.pc.HoverProvider$.hover(HoverProvider.scala:34)
	scala.meta.internal.pc.ScalaPresentationCompiler.hover$$anonfun$1(ScalaPresentationCompiler.scala:352)
```
#### Short summary: 

java.util.NoSuchElementException: next on empty iterator