#include <iostream>
using namespace std;

class Animal
{
public:

    // Pure Virtual Function
    virtual void sound() = 0;

    // Normal Function
    void eat()
    {
        cout << "Animal can eat." << endl;
    }
};

class Dog : public Animal
{
public:

    // Mandatory
    void sound() override
    {
        cout << "Dog Barks" << endl;
    }
};

int main()
{
    // Animal a;      // ❌ ERROR
    // Cannot create object of abstract class.

    Dog d;

    d.sound();

    d.eat();

    return 0;
}

/*
========================================================

PURE VIRTUAL FUNCTION

virtual void function() = 0;

========================================================

CLASS HAVING AT LEAST ONE PURE VIRTUAL FUNCTION

↓

ABSTRACT CLASS

========================================================

ABSTRACT CLASS

❌ Cannot create object.

✔ Can create pointer/reference.

Animal *ptr;

========================================================

Derived class MUST override every pure virtual
function.

Otherwise derived class also becomes abstract.

========================================================
*/