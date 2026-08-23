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

class B
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

class C : public A, public B
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

int main()
{
    C obj;
}
/*

A Constructor

B Constructor

C Constructor

C Destructor

B Destructor

A Destructor
*/