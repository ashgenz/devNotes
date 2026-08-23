#include <iostream>
using namespace std;

class Parent
{
public:

    int x = 10;

    void show()
    {
        cout << "Parent::show()" << endl;
    }
};

class Child : public Parent
{
public:

    int y = 20;

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

    cout << ptr->x << endl;      // ✔ Parent member

    ptr->show();                 // ✔ Parent function

    // cout << ptr->y;           // ❌ ERROR

    // ptr->display();           // ❌ ERROR

    return 0;
}

/*
====================================================

UPCASTING

Parent *ptr = &ChildObject;

====================================================

Allowed Automatically.

(No casting required.)

====================================================

Pointer Type

↓

Parent

====================================================

Object Type

↓

Child

====================================================

Can access ONLY Parent members.

====================================================
*/