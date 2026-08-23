#include <iostream>
using namespace std;

//--------------------------------------------------
// Parent Class 1
//--------------------------------------------------

class Father
{
public:
    void fatherProperty()
    {
        cout << "Father Property\n";
    }
};

//--------------------------------------------------
// Parent Class 2
//--------------------------------------------------

class Mother
{
public:
    void motherProperty()
    {
        cout << "Mother Property\n";
    }
};

//--------------------------------------------------
// Child inherits from BOTH classes
//--------------------------------------------------

class Child : public Father, public Mother
{
public:
    void childProperty()
    {
        cout << "Child Property\n";
    }
};

int main()
{
    Child obj;

    // Own function
    obj.childProperty();

    // Inherited from Father
    obj.fatherProperty();

    // Inherited from Mother
    obj.motherProperty();

    return 0;
}

/*
========================================================

MULTIPLE INHERITANCE

Syntax

class Child : public Parent1, public Parent2
{
};

Meaning

Child inherits members of BOTH Parent1 and Parent2.

========================================================

Memory Layout

Child Object

+------------------------+
| Father Part            |
+------------------------+
| Mother Part            |
+------------------------+
| Child Part             |
+------------------------+

========================================================

NO AMBIGUITY HERE

Reason

Father and Mother have different function names.

Father  -> fatherProperty()

Mother  -> motherProperty()

Compiler knows exactly which function to call.

========================================================
*/