#include <iostream>
using namespace std;

class Parent
{
public:
    virtual void show() {}
};

class Child : public Parent
{
public:
    void display()
    {
        cout << "Child\n";
    }
};

int main()
{
    Parent p;

    Parent *ptr = &p;

    Child *cptr = dynamic_cast<Child *>(ptr);

    if(cptr)
    {
        cptr->display();
    }
    else
    {
        cout << "Not a Child Object\n";
    }
}

//output=Not a Child Object.