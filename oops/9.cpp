
#include <iostream>
using namespace std;
class Parent
{
public:
    void show()
    {
        cout << "Parent";
    }
};

class Child : public Parent
{
public:
    void show(int x)
    {
        cout << x;
    }
};

int main()
{
    Child obj;

    // obj.show();     // ❌ ERROR

    obj.show(10);
}