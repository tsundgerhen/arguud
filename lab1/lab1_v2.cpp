#include <iostream>
#include <string>
#include <stack>
#include <cmath>
#include <vector>
#include <cstdlib>

using namespace std;


bool isConvertibleToFloat(const std::string& str) {
    bool result = false;
    try {
        std::stof(str);
        result = true;
    } catch (...) {
    }
    return result;
}

bool isOperator(string str){
    if(str == "+" || str == "-" || str == "*" || str == "/" || str == "^") return true;
    else return false;
}

int getPriority(string C)
{
    if (C == "-" || C == "+")
        return 1;
    else if (C == "*" || C == "/")
        return 2;
    else if (C == "^")
        return 3;
    return 0;
}
vector<string> infixToPostfix(vector<string> tokens)
{
    stack<string> char_stack;
    vector<string> output;

    for (int i = 0; i < tokens.size(); i++) {
        if (isConvertibleToFloat(tokens.at(i))) {
            output.push_back(tokens.at(i));
        }
        else if (tokens.at(i) == "(") {
            char_stack.push("(");
        }
        else if (tokens.at(i) == ")") {
            while (!char_stack.empty() && char_stack.top() != "(") {
                output.push_back(char_stack.top());
                char_stack.pop();
            }
            if (!char_stack.empty()) char_stack.pop();
        }
        else {
            while (!char_stack.empty() && getPriority(tokens.at(i)) <= getPriority(char_stack.top())) {
                output.push_back(char_stack.top());
                char_stack.pop();
            }
            char_stack.push(tokens.at(i));
        }
    }

    while (!char_stack.empty()) {
        output.push_back(char_stack.top());
        char_stack.pop();
    }

    return output;
}

double evalPostfix(vector<string> tokens) {
    stack<double> stack;

    for (int i = 0; i < tokens.size(); i++) {
        string it = tokens.at(i);
        if (isConvertibleToFloat(it)) {
            stack.push(stof(it));
        } else {
            double a = stack.top();
            stack.pop();
            double b = stack.top();
            stack.pop();
            double result;
            if (it == "+") {
                result = b + a;
            } else if (it == "-") {
                result = b - a;
            } else if (it == "*") {
                result = b * a;
            } else if (it == "/") {
                result = b / a;
            } else if (it == "^") {
                result = pow(b, a);
            }
            stack.push(result);
        }
    }
    return stack.top();
}


bool checkExpression(vector<string> tokens){
    for(int i = 0; i < tokens.size(); i++){
        if(tokens.at(i) != "+" && tokens.at(i) != "-" && tokens.at(i) != "*" && tokens.at(i) != "/" && tokens.at(i) != "^" && tokens.at(i) != "(" && tokens.at(i) != ")" && !isConvertibleToFloat(tokens.at(i)))
            return false;
    }
    return true;
}

vector<string> tokenize(string expression){
    vector<string> token;
    for(int i = 0; i < expression.size(); i++){
        if(expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/' || expression[i] == '^' || expression[i] == '(' || expression[i] == ')'){
            token.push_back(string(1, expression[i])); 
        }
        else {
            string operand = "";
            while(i < expression.size() && (isdigit(expression[i]) || expression[i] == '.')){
                operand += expression[i];
                i++;
            }
            i--; 
            if (!operand.empty())
                token.push_back(operand);
        }
    }
    return token;
}



double interpret(string expression){
    double answer;
    vector<string> tokens = tokenize(expression);
    if(!checkExpression(tokens)){
        cout << "Enter correct expression!!!";
        return 0;
    }
    tokens.insert(tokens.begin(), "(");
    tokens.push_back(")");
    vector<string> tokensPostfix = infixToPostfix(tokens);
    answer = evalPostfix(tokensPostfix);
    return answer;
}

int main(){
    string expression;
    bool test = true;
    cout << "Enter an expression: ";
    cin >> expression;
    cout<< interpret(expression);
    return 0;
}