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
                        for (int j = 0; j < operand2; j++) {
                            binary += "0";
                        }
                        result = Integer.parseInt(binary, 2);
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
                        || precedence(str, rules) == precedence(operatorStack.peek(), rules) && associative(str, rules) == "L")) {
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
        calculate("3 * 2 + 4 << 3 << 1", rule.getRule2());
        calculate("2 * 4 + 9 < 20 || 45 / 5 + 4 != 5", rule.getRule2());
        calculate("5 * 3 ** 2 + 5 > 6 ** 3 >> 4 / 2", rule.getRule2());
        
    }
}
