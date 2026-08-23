#include <iostream>
using namespace std;

class Student
{
public:

    int roll;               // Normal Data Member

    static int count;       // Static Data Member
};

// Static data member must be defined outside the class.
int Student::count = 0;

int main()
{
    Student s1;
    Student s2;
    Student s3;

    s1.roll = 101;
    s2.roll = 102;
    s3.roll = 103;

    s1.count++;
    s2.count++;
    s3.count++;

    cout << s1.roll << endl;
    cout << s2.roll << endl;
    cout << s3.roll << endl;

    cout << endl;

    cout << s1.count << endl;
    cout << s2.count << endl;
    cout << s3.count << endl;

    return 0;
}

/*
======================================================

Normal Data Member

Each object gets its OWN copy.

roll

s1 -> 101
s2 -> 102
s3 -> 103

======================================================

Static Data Member

Only ONE copy exists.

count

        count = 3

          ↑
   -----------------
   |       |       |
  s1      s2      s3

======================================================
*/