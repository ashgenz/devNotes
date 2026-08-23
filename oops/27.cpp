#include <iostream>
using namespace std;

class Student
{
public:

    int roll;                 // Non-static Data Member

    static int count;         // Static Data Member

    Student()
    {
        count++;
    }

    // Static Member Function
    static void showCount()
    {
        cout << "Total Students = " << count << endl;

        // cout << roll;      // ❌ ERROR
        // Static function has NO object.
        // Therefore it cannot access non-static members.

        // cout << this;      // ❌ ERROR
        // 'this' pointer doesn't exist inside static functions.since it has no current object.
    }


    //on static function can call other static function but not non-static function.
};

int Student::count = 0;

int main()
{
    Student s1;
    Student s2;
    Student s3;

    Student::showCount();     // ✔ Preferred

    // Also valid (not recommended)
    s1.showCount();

    return 0;
}

/*
=====================================================

STATIC MEMBER FUNCTION

Belongs to CLASS.

Not to any object.

=====================================================

Preferred Call

Student::showCount();

=====================================================

Can Access

✔ Static Data Members

✔ Other Static Member Functions

=====================================================

Cannot Access

❌ Non-static Data Members

❌ Non-static Member Functions

❌ this pointer

=====================================================
*/

