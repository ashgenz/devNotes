/*

template<typename T>

T add(T a, T b)
{
    return a + b;
}

int main()
{
    cout << add(5,6);

    cout << add(5.5,2.3);
}

 */
 /*

Compiler creates

add<int>()

add<double>()

add<float>()

automatically.
 */




 /*
 
 template<class T>

class Box
{
public:

    T data;
};

 */



 //stl




 /*
 sort()

find()

reverse()

count()

*/



/*
vector<int>::iterator it;
*/





//Lambda expressions

/*
instead of:
int square(int x)
{
    return x*x;
}
 

use:
auto square = [](int x)
{
    return x*x;
};

cout << square(5);

output=25
*/