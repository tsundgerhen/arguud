#include <iostream>
using namespace std;

int x = 2;

void foo(int y){
    x += y;
}

void foo(){
    x *= 2;
}

int main(){
    foo(3);
    foo();
    cout<<x
}
    
