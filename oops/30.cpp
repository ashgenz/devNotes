#include <iostream>
using namespace std;

class Parent
{
public:

    int x;

    Parent()
    {
        x = 10;
    }

    void show()
    {
        cout << "Parent x = " << x << endl;
    }
};

class Child : public Parent
{
public:

    int y;

    Child()
    {
        y = 20;
    }

    void display()
    {
        cout << "Parent x = " << x << endl;
        cout << "Child y = " << y << endl;
    }
};

int main()
{
    Child c;

    Parent p = c;      // Object Slicing

    p.show();

    // p.display();     // ❌ ERROR
    // Parent object has no display() function.

    return 0;
}

/*
=====================================================

OBJECT SLICING

Parent p = ChildObject;

↓

Only Parent part is copied.

Child part is discarded.

=====================================================
*/