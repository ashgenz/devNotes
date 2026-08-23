#include <iostream>
using namespace std;

class Parent
{
public:
    int publicVar = 10;

protected:
    int protectedVar = 20;

private:
    int privateVar = 30;

public:
    void show()
    {
        cout << "Parent Function\n";
    }
};

//------------------------------------------------------
// PUBLIC INHERITANCE
//------------------------------------------------------

class PublicChild : public Parent
{
public:
    void display()
    {
        cout << "Public Inheritance\n";

        cout << publicVar << endl;        // ✔ public -> public

        cout << protectedVar << endl;     // ✔ protected -> protected

        // cout << privateVar << endl;    // ❌ ERROR
        // Private members are not directly accessible
    }
};

//------------------------------------------------------
// PRIVATE INHERITANCE
//------------------------------------------------------

class PrivateChild : private Parent
{
public:
    void display()
    {
        cout << "Private Inheritance\n";

        cout << publicVar << endl;        // ✔ public -> private

        cout << protectedVar << endl;     // ✔ protected -> private

        // cout << privateVar << endl;    // ❌ ERROR
    }
};

//------------------------------------------------------
// PROTECTED INHERITANCE
//------------------------------------------------------

class ProtectedChild : protected Parent
{
public:
    void display()
    {
        cout << "Protected Inheritance\n";

        cout << publicVar << endl;        // ✔ public -> protected

        cout << protectedVar << endl;     // ✔ protected -> protected

        // cout << privateVar << endl;    // ❌ ERROR
    }
};

int main()
{
    PublicChild obj1;

    cout << obj1.publicVar << endl;       // ✔ still public

    // cout << obj1.protectedVar;         // ❌ ERROR

    obj1.display();

    cout << "\n";

    PrivateChild obj2;

    // cout << obj2.publicVar;            // ❌ ERROR
    // Became private because of private inheritance.

    obj2.display();

    cout << "\n";

    ProtectedChild obj3;

    // cout << obj3.publicVar;            // ❌ ERROR
    // Became protected because of protected inheritance.

    obj3.display();

    return 0;
}

/*
=========================================================

            ACCESS CONVERSION TABLE

=========================================================

PUBLIC INHERITANCE

public      -> public
protected   -> protected
private     -> inaccessible

---------------------------------------------------------

PRIVATE INHERITANCE

public      -> private
protected   -> private
private     -> inaccessible

---------------------------------------------------------

PROTECTED INHERITANCE

public      -> protected
protected   -> protected
private     -> inaccessible

=========================================================

IMPORTANT

Inheritance mode DOES NOT change the access level
inside the Base class.

It only changes how inherited members are exposed
through the Derived class.

=========================================================
*/