#include <iostream>
using namespace std;

class Student
{
public:

    const int roll;      // Const Data Member

    // Must initialize using Initializer List
    Student(int r) : roll(r)
    {
        cout << "Constructor Called\n";

        // roll = r;      // ❌ ERROR
        // Const data members cannot be assigned here.
    }

    void display()
    {
        cout << "Roll = " << roll << endl;
    }
};

int main()
{
    Student s1(101);

    s1.display();

    // s1.roll = 200;     // ❌ ERROR
    // Cannot modify a const data member.

    return 0;
}

/*
=====================================================

CONST DATA MEMBER

const int roll;

=====================================================

Must be initialized using

Initializer List

Student(int r) : roll(r)

=====================================================

Cannot assign value inside constructor body.

=====================================================

Cannot modify after initialization.

=====================================================
*/





/*
class Demo
{
public:

    int x;

    int &ref;

    Demo(int a)
        : x(a), ref(x)
    {
    }
};
*/
