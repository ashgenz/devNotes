#include <iostream>
using namespace std;

class A
{
public:
    int x = 10;

protected:
    int y = 20;

private:
    int z = 30;

public:
    void showA()
    {
        cout << "Class A" << endl;
    }
};

// public inheritance
class B : public A
{
public:
    void display()
    {
        // Accessible inside derived class

        cout << x << endl;      // ✔ public remains public

        cout << y << endl;      // ✔ protected remains protected

        // cout << z << endl;   // ❌ ERROR
        // Private members are NOT inherited directly.

        showA();                // ✔
    }
};

int main()
{
    B obj;

    cout << obj.x << endl;      // ✔

    obj.showA();                // ✔

    // cout << obj.y;           // ❌ ERROR
    // protected can't be accessed outside class

    // cout << obj.z;           // ❌ ERROR
    // private can't be accessed outside class

    obj.display();

    return 0;
}




//public members ko publically inherit karna matlab every member will inherit as it is(except private).means public inherit as public.protected inherit as protected. whereas private does not get accessed (since private is not acessible in the child class).
//privately inherit karna matlab public become private and protected become private whereas private does not get accessed (since private is not acessible in the child class).
//protectedly inherit karna matlab public become protected and protected become protected whereas private does not get accessed (since private is not acessible in the child class).