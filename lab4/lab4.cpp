#include <iostream>
#include <string>
using namespace std;
int n;
int glo_var = 12;
void foo(){
    cout<<"foo without variable but glo_var is " + to_string(glo_var) + "\n";
}

void foo(int n){
    cout<<"foo with variable and variable is " + to_string(n) + "\n";
}
void bar(){
    glo_var = 24;
    foo();
}
int pactoral(int n){
    if( n == 1 || n == 0)
    return 1;
    return n * pactoral(n-1);
}

int main(){
    cout << "enter a number: ";
    cin >> n;
    cout << "The pactoral of " + to_string(n) + " is " + to_string(pactoral(n)) + "\n";
    foo();
    foo(247);
    bar();
}