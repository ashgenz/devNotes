#include <iostream>
using namespace std;

class Student
{
public:

    int roll;
    string name;

    Student(int r, string n)
    {
        roll = r;
        name = n;
    }

    // Const Member Function
    void display() const
    {
        cout << "Roll = " << roll << endl;
        cout << "Name = " << name << endl;

        // roll = 200;        // ❌ ERROR
        // name = "Rahul";    // ❌ ERROR

        // A const member function cannot
        // modify data members.
    }
};

int main()
{
    Student s1(101, "Ashish");

    s1.display();

    return 0;
}

/*
=====================================================

CONST MEMBER FUNCTION

void display() const

=====================================================

Promise

↓

Will NOT modify the current object.

=====================================================

Can READ data members.

Cannot MODIFY data members.

=====================================================
*/