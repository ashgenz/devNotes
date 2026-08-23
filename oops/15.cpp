#include <iostream>
using namespace std;

class Calculator
{
public:

    // Same function name
    // Different parameters

    //v.imp=all defining of add have same return type.
    //if different return type => shows error, and it not called function overloading.
    void add()
    {
        cout << "No Parameter\n";
    }

    void add(int a)
    {
        cout << a << endl;
    }

    void add(int a, int b)
    {
        cout << a + b << endl;
    }

    void add(double a, double b)
    {
        cout << a + b << endl;
    }
};

int main()
{
    Calculator obj;

    obj.add();          // No Parameter

    obj.add(10);        // 10

    obj.add(10,20);     // 30

    obj.add(5.5,2.5);   // 8

    return 0;
}

/*
====================================================

FUNCTION OVERLOADING

Same Function Name

Different

✔ Number of Parameters

OR

✔ Type of Parameters

OR

✔ Order of Parameters

Compiler decides which function to call.

↓

Compile Time Polymorphism

====================================================
*/