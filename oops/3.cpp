#include <iostream>
using namespace std;

class Student;    //0.we have to do this befrre friend function declartoin
void display(Student); //1.Friend Function Declaration



class Student
{
private:
    int marks = 95;
protected:
    int roll = 101;
public:
    string name = "Ashish";




    friend void display(Student);    //2.we initialize friend function like this.(we can initialize in public/private/protected anywhere no difference)
};

// Normal Function (NOT a member function)
void display(Student s)
{
    cout << s.name << endl;     // public
    cout << s.marks << endl;    // private
    cout << s.roll << endl;     // protected
}

int main()
{
    Student s;
    display(s);    
    return 0;
}

//1.public: we can access these anywhere
//2.private: we can access it in the same class and in friend function/class.

//3.protected: we can access it in the same class , first derived class and in friend function/class.