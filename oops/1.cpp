

//link: https://chatgpt.com/share/6a677014-3cf4-83e8-a7e7-928d272e3611
//for more logic and depth.


#include <iostream>
using namespace std;

class Student
{
public:              //0.public means everything below is accessible outside               
    int roll;           
    string name;


    Student(int r)        //1.constructor should be always public 
    {
        cout << "Constructor Called\n";           
        roll = r;
        name = "Ashish2";
    }

    //obv.we can also define constructor like this 
    // Student(): roll(0), name("Ashish")  
    // {
    //     cout << "Constructor Called\n";           
    // }


    void display()      // Member Function
    {
        cout << roll << endl;
        cout << name << endl;
    }
};              //2.Mandatory Semicolon

int main()
{
    Student s1(102);    //obv.Object creation
    
    s1.roll = 101;       //obv.Accessing data members
    s1.name = "Ashish";
    s1.display();  
}




