#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

#define MAX_EXPANSIONS 8
#define MAX_TERMINALS 4

struct ProductionRule {
    char non_terminal;
    std::string expansions[MAX_EXPANSIONS]; 
};

struct CFG {
    ProductionRule* rules; 
    char terminals[MAX_TERMINALS];        
    char start_symbol;
};

std::vector<char> generate_terminals(){
    std::vector<char> terminals;
    for(int i = 65; i < 91; i++){
        terminals.push_back(char(i));
    }
    for(int i = 97; i < 123; i++){
        terminals.push_back(char(i));
    }
    for(int i = 48; i < 58; i++){
        terminals.push_back(char(i));
    }
    return terminals;
}

std::vector<std::string> generate_rules(){
    std::vector<std::string> rules;
    
    for(int i = 65; i < 91; i++){
        std::string rule;
        rule += char(i);
        rule += '@';
        rule += char(i);
        rules.push_back(rule);
    }

    for(int i = 97; i < 123; i++){
        std::string rule;
        rule += char(i);
        rule += '@';
        rule += char(i);
        rules.push_back(rule);
    }
    
    for(int i = 48; i < 58; i++){
        std::string rule;
        rule += char(i);
        rule += '@';
        rule += char(i);
        rules.push_back(rule);
    }

    return rules;
}

void initialize_CFG(CFG* grammar) {
    grammar->rules = new ProductionRule[2];
    
    std::vector<std::string> rules_generated = {"a@a", "b@b", "c@c", "d@d", "a", "b", "c", "d"};
    std::vector<char> terminals_generated = {'a', 'b', 'c', 'd'};
    
    grammar->rules[0].non_terminal = '@';
    for(size_t i = 0; i < rules_generated.size(); i++){
        grammar->rules[0].expansions[i] = rules_generated[i];
    }
    for(size_t i = rules_generated.size(); i < terminals_generated.size() + rules_generated.size(); i++){
        grammar->rules[0].expansions[i] = std::string(1, terminals_generated[i - rules_generated.size()]);
    }

    grammar->rules[1].non_terminal = '$';
    for(size_t i = 0; i < rules_generated.size(); i++){
        grammar->rules[1].expansions[i] = rules_generated[i];
    }
    for(size_t i = rules_generated.size(); i < terminals_generated.size() + rules_generated.size(); i++){
        grammar->rules[1].expansions[i] = std::string(1, terminals_generated[i - rules_generated.size()]);
    }
    for(size_t i = 0; i < terminals_generated.size(); i++){
        grammar->terminals[i] = terminals_generated[i];
    }
    grammar->start_symbol = '@';
}

bool isTerminal(char symbol, const std::vector<char>& terminals) {
    return (std::find(terminals.begin(), terminals.end(), symbol) != terminals.end());
}   

bool parseString(const CFG* grammar, const std::string& str, char symbol) {
    if (str.empty()) {
        return true;
    }
    if (isTerminal(symbol, std::vector<char>(grammar->terminals, grammar->terminals + MAX_TERMINALS))) {
        if (str[0] == symbol) {
            return parseString(grammar, str.substr(1), symbol);
        }
    } else {
        for (size_t i = 0; i < 2; ++i) {
            if (grammar->rules[i].non_terminal == symbol) {
                for (size_t j = 0; j < MAX_EXPANSIONS; ++j) {
                    const std::string& production = grammar->rules[i].expansions[j];
                    if (!production.empty() && production.length() <= str.length()) {
                        if (str.substr(0, production.length()) == production && str.substr(str.length() - production.length()) == production) {
                            return parseString(grammar, str.substr(production.length(), str.length() - 2 * production.length()), symbol);
                        }
                    }
                }
            }
        }
    }
    return false;
}

int main() {
    std::string input;
    std::cout << "Enter a string: ";
    std::cin >> input;
    
    CFG grammar;
    initialize_CFG(&grammar);
    
    if (parseString(&grammar, input, '@') || parseString(&grammar, input, '$')) {
        std::cout << input << " is generated by the CFG.\n";
    } else {
        std::cout << input << " is not generated by the CFG.\n";
    }
    delete[] grammar.rules;
    return 0;
}
