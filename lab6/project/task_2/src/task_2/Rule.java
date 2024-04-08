package task_2;

public class Rule {
    String[][] rule1;
    String[][] rule2;
    
    public Rule() {
        this.rule1 = new String[][] {
            {"**", "R", "2"},
            {"*", "L", "3"},
            {"/", "L", "3"},
            {"+", "L", "4"},
            {"-", "L", "4"},
            {">>", "L", "5"},
            {"<<", "L", "5"},
            {">", "L", "6"},
            {"<", "L", "6"},
            {"!=", "L", "7"},
            {"&&", "L", "8"},
            {"||", "L", "8"}
        };

        this.rule2 = new String[][] {
            {"**", "R", "2"},
            {"*", "R", "3"},
            {"/", "R", "3"},
            {"+", "R", "3"},
            {"-", "R", "3"},
            {">>", "R", "4"},
            {"<<", "R", "4"},
            {">", "L", "5"},
            {"<", "L", "5"},
            {"!=", "L", "6"},
            {"&&", "L", "7"},
            {"||", "L", "7"}
        };
    }
    public String[][] getRule1(){
        return rule1;
    }
    public String[][] getRule2(){
        return rule2;
    }
}
