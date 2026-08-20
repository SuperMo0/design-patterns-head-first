#include <iostream>
using namespace std;
int fun(int x){
    return "Hello";
}

int n(int z){
    std::cout<<"HI";
}
 int main(){
    n(fun(2));

    return 0;
 }
