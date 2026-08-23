#include <iostream>
using namespace std;

int main()
{
    int a = 10;
    int b = 0;

    try
    {
        if (b == 0)
        {
            throw "Division by Zero!";
        }

        cout << a / b << endl;
    }
    catch (const char *msg)
    {
        cout << "Exception Caught: " << msg << endl;
    }

    cout << "Program Continues..." << endl;

    return 0;
}

/*
=====================================================

EXCEPTION HANDLING

try

↓

Code that may generate an exception.

-------------------------------------

throw

↓

Throws an exception.

-------------------------------------

catch

↓

Handles the exception.

=====================================================
*/