#include <iostream>
using namespace std;

class Student
{
public:

    Student()
    {
        cout << "Constructor Called\n";
    }

    ~Student()
    {
        cout << "Destructor Called\n";
    }
};

int main()
{
    cout << "Main Starts\n";

    Student s1;

    cout << "Working...\n";

    cout << "Main Ends\n";
}

/*
Main Starts
Constructor Called
Working...
Main Ends
Destructor Called
*/