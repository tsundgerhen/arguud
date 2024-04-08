#include <iostream>
#include <math.h>
#include <string.h>
#include <stack>
//#include 
using namespace std;

bool isOperator(char c){
    return (!isalpha(c) && !isdigit(c));
}
 
int getPriority(char C)
{
    if (C == '-' || C == '+')
        return 1;
    else if (C == '*' || C == '/')
        return 2;
    else if (C == '^')
        return 3;
    return 0;
}

string infixToPostfix(string infix)
{
    infix = '(' + infix + ')';
    int l = infix.size();
    stack<char> char_stack;
    string output;
 
    for (int i = 0; i < l; i++) {
        if (isalpha(infix[i]) || isdigit(infix[i]))
            output += infix[i];
        else if (infix[i] == '(')
            char_stack.push('(');
        else if (infix[i] == ')') {
            while (char_stack.top() != '(') {
                output += char_stack.top();
                char_stack.pop();
            }
            char_stack.pop();
        }
        else {
            if (isOperator(char_stack.top())) {
                if (infix[i] == '^') {
                    while (
                        getPriority(infix[i])
                        <= getPriority(char_stack.top())) {
                        output += char_stack.top();
                        char_stack.pop();
                    }
                }
                else {
                    while (
                        getPriority(infix[i])
                        < getPriority(char_stack.top())) {
                        output += char_stack.top();
                        char_stack.pop();
                    }
                }
                char_stack.push(infix[i]);
            }
        }
    }
    while (!char_stack.empty()) {
        output += char_stack.top();
        char_stack.pop();
    }
    return output;
}

// string tokenize(string expression){
//     string tokenized;
//     for(int i = 0; i < expression.size(); i++){
//         if(expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/' ||
//          expression[i] == '^' && expression[i-1] != '+' && expression[i-1] != '-' && expression[i-1] != '*' && expression[i-1] != '/' && expression[i-1] != '^'){
//             tokenized.append(" ");
//             string str(1, expression[i]) ;
//             tokenized.append(str);
//             tokenized.append(" ");
//         }
//         else {
//             string str(1, expression[i]) ;
//             tokenized.append(str);
//         }
//     }
//     return tokenized;
// } 

float find_next_operand(string expression, int index) {
    string operand_str;
    for (int i = index; i < expression.size(); i++) {
        if (isdigit(expression[i]) || expression[i] == '.') {
            operand_str.push_back(expression[i]);
        } else {
            break;
        }
    }
    return stoi(operand_str);
}

float interpret(string expression) {
    string postfix = infixToPostfix(expression);
    stack<float> result;
    for (int i = 0; i < postfix.size(); i++) {
        if (isdigit(postfix[i])) {
            result.push(find_next_operand(postfix, i));
            for (int j = i + 1; j < postfix.size(); j++) {
                if (!isOperator(postfix[j])) {
                    i++;
                } else {
                    break;
                }
            }
        } else {
            float val1 = result.top();
            result.pop();
            float val2 = result.top();
            result.pop();
            switch (postfix[i]) {
                case '+':
                    result.push(val2 + val1);
                    break;
                case '-':
                    result.push(val2 - val1);
                    break;
                case '*':
                    result.push(val2 * val1);
                    break;
                case '/':
                    result.push(val2 / val1);
                    break;
            }
        }
    }
    return result.top();
}



int main(){
    string expression;
    cout << "Enter an expression: ";
    cin >> expression;
    cout << "Result: " << interpret(expression);
    return 0;
}