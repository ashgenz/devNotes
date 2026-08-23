#include <iostream>
using namespace std;

class Parent
{
public:

    virtual void show()
    {
        cout << "Parent\n";
    }
};

class Child : public Parent
{
public:

    void show() override
    {
        cout << "Child\n";
    }
};

int main()
{
    Child c;

    Parent p = c;      // Object Slicing

    p.show();
}


/*
Avoid Object Slicing

Instead of copying

Parent p = c;

Use:
Parent &ref = c;
ref.show();

or:
Parent *ptr = &c;
ptr->show();

Now:
Output=
Child

No slicing happens because no new object is created.

*/