class ProductionRule:
    def __init__(self, non_terminal, expansions):
        self.non_terminal = non_terminal
        self.expansions = expansions

class CFG:
    def __init__(self, rules, terminals, start_symbol):
        self.rules = rules
        self.terminals = terminals
        self.start_symbol = start_symbol

def generate_terminals():
    terminals = [chr(i) for i in range(65, 91)] + [chr(i) for i in range(97, 123)] + [chr(i) for i in range(48, 58)]
    return terminals

def generate_rules():
    rules = [chr(i) + '@' + chr(i) for i in range(65, 91)] + [chr(i) + '@' + chr(i) for i in range(97, 123)] + [chr(i) + '@' + chr(i) for i in range(48, 58)]
    return rules

def initialize_CFG():
    rules_generated = generate_rules()
    terminals_generated = generate_terminals()
    rules = [ProductionRule('@', rules_generated + terminals_generated),
             ProductionRule('$', rules_generated + terminals_generated)]
    return CFG(rules, terminals_generated, '@')

def is_terminal(symbol, terminals):
    return symbol in terminals

def parse_string(grammar, string, symbol):
    if not string:
        return True
    if is_terminal(symbol, grammar.terminals):
        if string[0] == symbol:
            return parse_string(grammar, string[1:], symbol)
    else:
        for rule in grammar.rules:
            if rule.non_terminal == symbol:
                for production in rule.expansions:
                    if production and len(production) <= len(string):
                        if string.startswith(production) and string.endswith(production):
                            return parse_string(grammar, string[len(production):-len(production)], symbol)
    return False

def main():
    input_string = input("Enter a string: ")
    grammar = initialize_CFG()
    if parse_string(grammar, input_string, '@') or parse_string(grammar, input_string, '$'):
        print(f"{input_string} is generated by the CFG.")
    else:
        print(f"{input_string} is not generated by the CFG.")

if __name__ == "__main__":
    main()

