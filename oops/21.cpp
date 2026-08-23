#include <iostream>
using namespace std;

class Parent
{
public:

    Parent()
    {
        cout << "Parent Constructor\n";
    }

    ~Parent()
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
    Child obj;
}

/*
Parent Constructor

Child Constructor

Child Destructor

Parent Destructor
*/



/*
Construction

Base

↓

Derived

--------------------------------

Destruction

Derived

↓

Base
*/