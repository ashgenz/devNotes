/*
=====================================================
                JAVA SYNTAX BASICS
=====================================================

Topics Covered

✔ Program Structure
✔ Variables
✔ Data Types
✔ Type Casting
✔ Operators
✔ Input (Scanner)
✔ Output
✔ if-else
✔ switch
✔ for
✔ while
✔ do-while
✔ break
✔ continue
✔ Arrays
✔ Enhanced for loop
✔ Methods
✔ Method Overloading
=====================================================
*/

import java.util.Scanner;      // Like #include<iostream>

public class a2
{
    // -----------------------------
    // Method
    // -----------------------------

    static int add(int a, int b)
    {
        return a + b;
    }

    // Method Overloading
    static double add(double a, double b)
    {
        return a + b;
    }

    public static void main(String[] args)
    {
        //----------------------------------------------------
        // OUTPUT
        //----------------------------------------------------

        System.out.println("Hello Java");

        System.out.print("Ashish ");
        System.out.print("Sharma");

        System.out.println();

        //----------------------------------------------------
        // VARIABLES
        //----------------------------------------------------

        int age = 22;

        double cgpa = 8.5;

        float pi = 3.14f;      // 'f' compulsory

        char grade = 'A';

        boolean placed = false;

        String name = "Ashish";

        //----------------------------------------------------
        // CONSTANT
        //----------------------------------------------------

        final double PI = 3.14159;

        // PI = 5;      // ❌ Error

        //----------------------------------------------------
        // TYPE CASTING
        //----------------------------------------------------

        int x = 10;

        double y = x;          // Widening

        double d = 5.8;

        int z = (int)d;        // Narrowing

        //----------------------------------------------------
        // INPUT
        //----------------------------------------------------

        Scanner sc = new Scanner(System.in);

        // int n = sc.nextInt();

        // double d1 = sc.nextDouble();

        // String s = sc.next();

        // String line = sc.nextLine();

        //----------------------------------------------------
        // OPERATORS
        //----------------------------------------------------

        int a = 10;
        int b = 20;

        System.out.println(a + b);

        System.out.println(a < b);

        System.out.println(a == b);

        //----------------------------------------------------
        // IF ELSE
        //----------------------------------------------------

        if(a > b)
        {
            System.out.println("Greater");
        }
        else
        {
            System.out.println("Smaller");
        }

        //----------------------------------------------------
        // SWITCH
        //----------------------------------------------------

        int day = 2;

        switch(day)
        {
            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            default:
                System.out.println("Invalid");
        }

        //----------------------------------------------------
        // FOR LOOP
        //----------------------------------------------------

        for(int i=1;i<=5;i++)
        {
            System.out.print(i + " ");
        }

        System.out.println();

        //----------------------------------------------------
        // WHILE
        //----------------------------------------------------

        int i=1;

        while(i<=3)
        {
            System.out.print(i+" ");
            i++;
        }

        System.out.println();

        //----------------------------------------------------
        // DO WHILE
        //----------------------------------------------------

        int j=1;

        do
        {
            System.out.print(j+" ");
            j++;

        }while(j<=3);

        System.out.println();

        //----------------------------------------------------
        // BREAK
        //----------------------------------------------------

        for(int k=1;k<=10;k++)
        {
            if(k==5)
                break;

            System.out.print(k+" ");
        }

        System.out.println();

        //----------------------------------------------------
        // CONTINUE
        //----------------------------------------------------

        for(int k=1;k<=5;k++)
        {
            if(k==3)
                continue;

            System.out.print(k+" ");
        }

        System.out.println();

        //----------------------------------------------------
        // ARRAY
        //----------------------------------------------------

        int[] arr = {10,20,30,40};

        System.out.println(arr[0]);

        //----------------------------------------------------
        // ENHANCED FOR LOOP
        //----------------------------------------------------

        for(int value : arr)
        {
            System.out.print(value+" ");
        }

        System.out.println();

        //----------------------------------------------------
        // 2D ARRAY
        //----------------------------------------------------

        int[][] matrix =
        {
            {1,2},
            {3,4}
        };

        System.out.println(matrix[1][0]);

        //----------------------------------------------------
        // METHOD CALL
        //----------------------------------------------------

        System.out.println(add(5,7));

        System.out.println(add(2.5,6.5));

        //----------------------------------------------------
        // String Methods
        //----------------------------------------------------

        System.out.println(name.length());

        System.out.println(name.toUpperCase());

        System.out.println(name.charAt(2));

        //----------------------------------------------------
        // Scanner Close
        //----------------------------------------------------

        sc.close();
    }
}

/*
=====================================================
            WRONG SYNTAX
=====================================================

// bool x=true;
❌ boolean

-----------------------------------------

// string s="abc";
❌ String

-----------------------------------------

// cout<<"Hello";
❌ System.out.println()

-----------------------------------------

// cin>>x;
❌ Scanner

-----------------------------------------

// delete obj;
❌ Garbage Collector

-----------------------------------------

// Student s;
❌ Student s = new Student();

-----------------------------------------

// #include<iostream>
❌ import

-----------------------------------------

// using namespace std;
❌ Not Required

-----------------------------------------

// int arr[5];
❌ int[] arr = new int[5];

-----------------------------------------

// float f=5.5;
❌ 5.5f

=====================================================
            C++ → JAVA
=====================================================

cout

↓

System.out.println()

-----------------------------

cin

↓

Scanner

-----------------------------

bool

↓

boolean

-----------------------------

string

↓

String

-----------------------------

delete

↓

Garbage Collector

-----------------------------

new/delete

↓

new only

-----------------------------

virtual

↓

Default in Java

-----------------------------

#include

↓

import

=====================================================
RULES
=====================================================

Everything is inside a class.

Execution starts from

public static void main()

Every statement ends with ;

String starts with capital S.

boolean replaces bool.

Scanner replaces cin.

System.out.println replaces cout.

Arrays use []

Objects use new.

=====================================================
*/