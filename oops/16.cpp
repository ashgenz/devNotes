#include <iostream>
using namespace std;

class Complex
{
public:

    int real;
    int imag;

    Complex(int r, int i)
    {
        real = r;
        imag = i;
    }

    // Operator Overloading

    Complex operator+(Complex c)
    {
        return Complex(real + c.real,
                       imag + c.imag);
    }

    void display()
    {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main()
{
    Complex c1(2,3);

    Complex c2(4,5);

    // Actually calls

    // c1.operator+(c2)

    Complex c3 = c1 + c2;

    c3.display();

    return 0;
}

/*
====================================================

OPERATOR OVERLOADING

Operator

+

↓

Function

operator+()

====================================================

c1 + c2

↓

c1.operator+(c2)

====================================================

Almost every operator can be overloaded.

Except

::

.

.*

?:

sizeof

typeid

====================================================
*/






//These operators can be overloaded:
/*
+

-

*

/

%

==

!=

<

>

<=

>=

++

--

[]

()

<<

>>

= 

*/






//while these operator cant be overload:
/*
::

.

.*

?:

sizeof

typeid

*/
