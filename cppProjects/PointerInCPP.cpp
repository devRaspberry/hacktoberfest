#include<iostream>
using namespace std;
int main() {
    int a =5;
    int*b=&a;
    int **c=&b;
    cout<<"Address of a is "<<b<<endl;
    cout<<"Value of a is " <<*b<<endl;
    cout<<"Address of pointer is " <<c<<endl;
    cout<<"Address of pointer to pointed is " <<*c<<endl;
    cout<<"Value of pointer to pointed is "<<**c<<endl;
    return 0;
}