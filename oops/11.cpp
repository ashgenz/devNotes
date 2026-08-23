#include <iostream>
using namespace std;

class Parent
{
public:

    // Remove virtual and observe the output.

    virtual void show()
    {
        cout << "Parent::show()" << endl;
    }
};

class Child : public Parent
{
public:

    void show() override
    {
        cout << "Child::show()" << endl;
    }
};

int main()
{
    Parent p;
    Child c;

    Parent *ptr;

    ptr = &p;

    ptr->show();          // Parent::show()

    ptr = &c;

    ptr->show();          // Child::show()

    return 0;
}

/*
=====================================================

VIRTUAL FUNCTION

Without virtual

Parent *ptr = &Child;

↓

ptr->show();

↓

Parent::show()

(Because compiler checks pointer type.)

-----------------------------------------------------

With virtual

Parent *ptr = &Child;

↓

ptr->show();

↓

Child::show()

(Because compiler checks actual object type.)

=====================================================

Runtime Polymorphism

Base Pointer

↓

Derived Object

↓

Virtual Function

=====================================================

override keyword

Not compulsory

Recommended

Compiler checks whether overriding is correct.

=====================================================
*/


/*
===============================================

virtual

↓

Runtime Polymorphism

===============================================

Needs

Base Pointer

or

Base Reference

===============================================

override

↓

Compiler Safety

===============================================

Without virtual

↓

Early Binding

Compile-time Binding

===============================================

With virtual

↓

Late Binding

Runtime Binding

===============================================
*/