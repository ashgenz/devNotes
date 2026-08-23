#include <iostream>
using namespace std;

class A
{
public:

    A()
    {
        cout<<"A Constructor\n";
    }

    ~A()
    {
        cout<<"A Destructor\n";
    }
};

class B : virtual public A
{
public:

    B()
    {
        cout<<"B Constructor\n";
    }

    ~B()
    {
        cout<<"B Destructor\n";
    }
};

class C : virtual public A
{
public:

    C()
    {
        cout<<"C Constructor\n";
    }

    ~C()
    {
        cout<<"C Destructor\n";
    }
};

class D : public B, public C
{
public:

    D()
    {
        cout<<"D Constructor\n";
    }

    ~D()
    {
        cout<<"D Destructor\n";
    }
};

int main()
{
    D obj;
}

/*
A Constructor

B Constructor

C Constructor

D Constructor

D Destructor

C Destructor

B Destructor

A Destructor
*/


/*
======================================================

SINGLE OBJECT

Constructor

↓

Destructor

======================================================

MULTIPLE OBJECTS

Constructor

Top → Bottom

Destructor

Bottom → Top

======================================================

INHERITANCE

Construction

Base

↓

Derived

--------------------------------------

Destruction

Derived

↓

Base

======================================================

MULTIPLE INHERITANCE

Construct

Left → Right

(as written)

Destroy

Right → Left

======================================================

VIRTUAL INHERITANCE

Virtual Base

↓

Other Bases

↓

Derived

======================================================

Destruction

Reverse Order

======================================================
*/