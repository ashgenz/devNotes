#include <iostream>
using namespace std;

class Parent
{
public:
    void show()
    {
        cout << "Parent\n";
    }
};

class Child : public Parent
{
public:

    using Parent::show;

    void show(int x)
    {
        cout << x << endl;
    }
};

int main()
{
    Child obj;

    obj.show();      // ✔ Parent

    obj.show(100);   // ✔ Child
}