#include <iostream>
using namespace std;

class Parent
{
public:
    int x = 10;

    virtual void show()
    {
        cout << "Parent::show()" << endl;
    }
};

class Child : public Parent
{
public:
    int y = 20;

    void show() override
    {
        cout << "Child::show()" << endl;
    }

    void display()
    {
        cout << "Child::display()" << endl;
    }
};

int main()
{
    Child c;

    // Upcasting
    Parent *ptr = &c;

    // Downcasting
    Child *cptr = (Child *)ptr;

    cout << cptr->x << endl;      // Parent member
    cout << cptr->y << endl;      // Child member

    cptr->show();                 // Child::show()

    cptr->display();              // Child::display()

    return 0;
}

/*
====================================================

DOWNCASTING

Child *cptr = (Child *)ParentPointer;

====================================================

Parent Pointer

↓

Child Pointer

====================================================

NOT automatic.

Requires casting.

====================================================
*/