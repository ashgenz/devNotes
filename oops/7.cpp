#include <iostream>
using namespace std;

class A
{
public:
    int x = 10;
};

class B : virtual public A
{
};

class C : virtual public A
{
};

class D : public B, public C
{
};

int main()
{
    D obj;

    obj.x = 5;      // ✅ Correct (due to virtual inheritance)
    obj.B::x = 5;   // ✅ Correct
    obj.C::x = 5;   // ✅ Correct
}


//what if only one of them is virtual and the other is not?
//ans=ambiguity.

