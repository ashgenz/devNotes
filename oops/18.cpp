#include <iostream>
using namespace std;

class Student
{
public:
    int roll;
    string name;

    // Normal Constructor
    Student(int r, string n)
    {
        roll = r;
        name = n;
    }

    // Copy Constructor
    Student(const Student &obj)
    {
        cout << "Copy Constructor Called\n";

        roll = obj.roll;
        name = obj.name;
    }

    void display()
    {
        cout << roll << " " << name << endl;
    }
};

int main()
{
    Student s1(101, "Ashish");

    // Copy Constructor Called
    Student s2 = s1;

    // Also calls Copy Constructor
    Student s3(s1);

    s2.display();

    s3.display();

    return 0;
}

/*
====================================================

COPY CONSTRUCTOR

ClassName(const ClassName &obj)
{
}

====================================================

Creates a NEW object using an EXISTING object.

====================================================

Student s2 = s1;

OR

Student s2(s1);

Both call Copy Constructor.

====================================================
*/