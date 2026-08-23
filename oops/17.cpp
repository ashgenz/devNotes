#include <iostream>
using namespace std;

class Student
{
public:
    int roll;

    // Constructor
    Student(int roll)
    {
        // 'roll' (left) is the data member.
        // 'roll' (right) is the constructor parameter.
        //
        // this points to the current object.
        //
        // this->roll means:
        // "roll of the **current** object"

        this->roll = roll;

        //invalid:
        //this.roll = roll;
        //error: 'this' is not a pointer; did you mean to use '->'?


        //cout << this;
        // Prints the address of the current object.

        //this = NULL;
        // ❌ ERROR=this is a constant pointer.
    }

    void display()
    {
        cout << "Roll = " << this->roll << endl;

        // Same as:
        // cout << roll << endl;
    }
};

int main()
{
    Student s1(101);
    Student s2(102);

    s1.display();

    s2.display();
}

