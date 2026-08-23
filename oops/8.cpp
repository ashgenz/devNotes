#include <iostream>
using namespace std;

class Parent
{
public:
    void show()
    {
        cout << "Parent::show()" << endl;
    }

    void display()
    {
        cout << "Parent::display()" << endl;
    }
};

class Child : public Parent
{
public:

    // Same name
    // Same parameters

    void show()
    {
        cout << "Child::show()" << endl;
    }
};

int main()
{
    Child obj;

    obj.show();          // ✔ Child::show()

    obj.display();       // ✔ Parent::display()

    obj.Parent::show();  // ✔ Parent::show()

    return 0;
}

/*
=========================================================

FUNCTION OVERRIDING (without virtual)

Parent

show()

↓

Child

show()

↓

obj.show()

↓

Child::show()

=========================================================

Parent::show() is NOT deleted.

It is hidden.

Still accessible using

obj.Parent::show();

=========================================================
*/