#include "College.h"
#include "School.h"

using namespace College;

int main()
{
    College::Student c;
    School::Student s;
    //same reason we use std:: when dont write using namespace std.
    //that means if we write using namespace College,,we dont need to write College:: anywhere needed. 
    Student c1;  //College ki object
    c.show();
    s.show();
}