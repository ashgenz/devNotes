#include <iostream>
using namespace std;

// final class
class Parent final
{
public:

    void show()
    {
        cout << "Parent::show()" << endl;
    }
};

/*
// ❌ ERROR

class Child : public Parent
{

};

Reason:
Parent is declared as final.
No class can inherit from it.
*/

int main()
{
    Parent obj;

    obj.show();

    return 0;
}

/*
=====================================================

FINAL CLASS

class Parent final

↓

No class can inherit Parent.

=====================================================
*/