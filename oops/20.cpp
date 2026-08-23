#include <iostream>
using namespace std;

class Student
{
public:

    int id;

    Student(int x)
    {
        id = x;

        cout << "Constructor " << id << endl;
    }

    ~Student()
    {
        cout << "Destructor " << id << endl;
    }
};

int main()
{
    Student s1(1);

    Student s2(2);

    Student s3(3);
}
/*
Constructor 1
Constructor 2
Constructor 3

Destructor 3
Destructor 2
Destructor 1
*/