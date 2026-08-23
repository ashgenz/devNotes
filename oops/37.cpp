#include <iostream>
using namespace std;

class Parent
{
public:

    virtual void show() final
    {
        cout << "Parent::show()" << endl;
    }
};

class Child : public Parent
{
public:

    /*
    // ❌ ERROR

    void show() override
    {
        cout << "Child::show()" << endl;
    }

    Reason:
    show() is final in Parent.
    */
};

int main()
{
    Child obj;

    obj.show();

    return 0;
}


/*
Parent::show()
*/

/*
=====================================================

FINAL FUNCTION

virtual void show() final

↓

Cannot be overridden.

=====================================================
*/