#include <iostream>
using namespace std;

class Student
{
public:
    int a = 10;

private:
    int b = 20;

protected:
    int c = 30;

    friend class Teacher;       //0.we initialize friend class inside the class here(we can define in public/private/protected anywhere no difference)
};


class Teacher       //obv.friend class.
{
public:
    void display(Student s)
    {
        cout << s.a << endl;
        cout << s.b << endl;
        cout << s.c << endl;
    }
};





class Child : public Student       //obv.first derived class
{
public:
    void display()
    {
        cout << a << endl;
        // cout << b << endl;   //since.b is private
        cout << c << endl;      //since.c is protected and child class can access protected members of parent class
    }
};

int main()
{
    Student s;

    cout << s.a << endl;    //since a is public 
    // cout << s.b << endl;    //error.since b is private
    // cout << s.c << endl;    //error.since c is protected

    Child obj;
    obj.display();

    Teacher t;
    t.display(s);
}


//1.public: we can access these anywhere
//2.private: we can access it in the same class and in friend function/class.

//3.protected: we can access it in the same class , first derived class and in friend function/class.