#include <iostream>
using namespace std;

class Father
{
public:
    void show()
    {
        cout << "Father\n";
    }
};

class Mother
{
public:
    void show()
    {
        cout << "Mother\n";
    }
};

class Child : public Father, public Mother
{
};

int main()
{
    Child obj;

    // obj.show();     // ❌ Ambiguous
//if only one parent class has show function?
//ans=No ambiguity.

    obj.Father::show();  //Correct(No ambiguity)

    obj.Mother::show();  //Correct(No ambiguity)
}