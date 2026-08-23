#include <iostream>
using namespace std;
class Shape
{
public:

    virtual void area() = 0;

    virtual void perimeter() = 0;
};

class Circle : public Shape
{
public:

    void area() override
    {
        cout<<"Area";
    }

    void perimeter() override
    {
        cout<<"Perimeter";
    }
};
/*
==================================================

virtual void show();

↓

Normal Virtual Function

==================================================

virtual void show() = 0;

↓

Pure Virtual Function

==================================================

Pure Virtual Function

↓

Abstract Class

==================================================

Abstract Class

↓

No Objects

Only Pointer/Reference

==================================================

Derived class must implement every
pure virtual function.

==================================================
*/
