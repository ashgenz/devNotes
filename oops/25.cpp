#include <iostream>
using namespace std;

class Parent
{
public:

    Parent()
    {
        cout << "Parent Constructor\n";
    }

    // Virtual Destructor
    virtual ~Parent()
    {
        cout << "Parent Destructor\n";
    }
};

class Child : public Parent
{
public:

    Child()
    {
        cout << "Child Constructor\n";
    }

    ~Child()
    {
        cout << "Child Destructor\n";
    }
};

int main()
{
    Parent *ptr = new Child();

    delete ptr;

    return 0;
}


/*
Parent Constructor

Child Constructor

Child Destructor

Parent Destructor
*/


//remove virtual=>
/**
 Parent Constructor

Child Constructor

Parent Destructor
 */



 


/*
====================================================

Virtual Destructor

If a Base class destructor is virtual,
deleting a Base pointer pointing to a Derived object
calls BOTH destructors.

====================================================
*/