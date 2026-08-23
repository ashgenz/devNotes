/*
=====================================================
        ADVANCED JAVA MASTER FILE
=====================================================

Topics Covered

✔ Exception Handling
✔ throw
✔ throws
✔ finally
✔ Custom Exception
✔ File
✔ FileWriter
✔ FileReader
✔ BufferedWriter
✔ BufferedReader
✔ Wrapper Classes
✔ Auto Boxing
✔ Auto Unboxing
✔ Enum
✔ Package
✔ Import
=====================================================
*/

import java.io.*;
import java.util.*;

//-----------------------------------------------
// CUSTOM EXCEPTION
//-----------------------------------------------

class AgeException extends Exception
{
    AgeException(String msg)
    {
        super(msg);
    }
}

//-----------------------------------------------
// ENUM
//-----------------------------------------------

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
}

public class a5
{

    //-------------------------------------------
    // throws
    //-------------------------------------------

    static void checkAge(int age) throws AgeException
    {
        if(age < 18)
        {
            throw new AgeException("Not Eligible");
        }

        System.out.println("Eligible");
    }

    public static void main(String[] args)
    {

        //------------------------------------------------
        // TRY - CATCH - FINALLY
        //------------------------------------------------

        try
        {
            int a = 10;

            int b = 0;

            System.out.println(a / b);
        }

        catch(ArithmeticException e)
        {
            System.out.println(e.getMessage());
        }

        finally
        {
            System.out.println("Always Executes");
        }

        //------------------------------------------------
        // throw + throws
        //------------------------------------------------

        try
        {
            checkAge(15);
        }

        catch(AgeException e)
        {
            System.out.println(e.getMessage());
        }

        //------------------------------------------------
        // FILE WRITING
        //------------------------------------------------

        try
        {
            FileWriter fw = new FileWriter("data.txt");

            fw.write("Hello Java");

            fw.close();
        }

        catch(IOException e)
        {
            e.printStackTrace();
        }

        //------------------------------------------------
        // BUFFERED WRITER
        //------------------------------------------------

        try
        {
            BufferedWriter bw =
                    new BufferedWriter(new FileWriter("demo.txt"));

            bw.write("Buffered Writer");

            bw.newLine();

            bw.write("Second Line");

            bw.close();
        }

        catch(IOException e)
        {

        }

        //------------------------------------------------
        // FILE READER
        //------------------------------------------------

        try
        {
            FileReader fr = new FileReader("data.txt");

            int ch;

            while((ch = fr.read()) != -1)
            {
                System.out.print((char)ch);
            }

            fr.close();
        }

        catch(IOException e)
        {

        }

        //------------------------------------------------
        // BUFFERED READER
        //------------------------------------------------

        try
        {
            BufferedReader br =
                    new BufferedReader(new FileReader("demo.txt"));

            String line;

            while((line = br.readLine()) != null)
            {
                System.out.println(line);
            }

            br.close();
        }

        catch(IOException e)
        {

        }

        //------------------------------------------------
        // FILE CLASS
        //------------------------------------------------

        File file = new File("demo.txt");

        System.out.println(file.exists());

        System.out.println(file.getName());

        //------------------------------------------------
        // WRAPPER CLASS
        //------------------------------------------------

        Integer x = 10;      // Auto Boxing

        int y = x;           // Auto Unboxing

        Double d = 5.5;

        Boolean flag = true;

        Character c = 'A';

        //------------------------------------------------
        // STRING TO INT
        //------------------------------------------------

        String num = "100";

        int n = Integer.parseInt(num);

        System.out.println(n + 10);

        //------------------------------------------------
        // ENUM
        //------------------------------------------------

        Day today = Day.MONDAY;

        System.out.println(today);

        switch(today)
        {
            case MONDAY:
                System.out.println("Start");
                break;

            case TUESDAY:
                System.out.println("Second");
                break;

            default:
                System.out.println("Other");
        }

    }
}

/*
=====================================================
WRONG SYNTAX
=====================================================

// catch(Exception)
before

catch(IOException)

❌ Wrong Order

Specific Exception

↓

General Exception

----------------------------------

// throw Exception;

❌

throw new Exception();

----------------------------------

// throws inside try

❌

throws belongs in method declaration

----------------------------------

// parseInt(100)

❌

Integer.parseInt("100");

----------------------------------

=====================================================
PACKAGE
=====================================================

package com.company;

Must be first line.

----------------------------------

Import

import java.util.*;

Like

#include

=====================================================
WRAPPER CLASSES
=====================================================

int

↓

Integer

---------------------

double

↓

Double

---------------------

char

↓

Character

---------------------

boolean

↓

Boolean

=====================================================
FILE CLASSES
=====================================================

File

↓

Represents File

----------------------

FileWriter

↓

Write Characters

----------------------

BufferedWriter

↓

Fast Writing

----------------------

FileReader

↓

Read Characters

----------------------

BufferedReader

↓

Fast Reading

=====================================================
INTERVIEW NOTES
=====================================================

throw

↓

Actually throws exception.

-------------------------

throws

↓

Tells compiler

this method may throw exception.

-------------------------

finally

↓

Always executes

(except abnormal JVM termination).

-------------------------

Checked Exception

↓

Must Handle

(IOException)

-------------------------

Unchecked Exception

↓

Runtime

(ArithmeticException)

=====================================================
RULES
=====================================================

✔ throw → object

✔ throws → method

✔ finally always executes

✔ Integer.parseInt()

✔ Wrapper Classes are Objects

✔ File handles path

✔ BufferedReader faster than FileReader

✔ BufferedWriter faster than FileWriter

=====================================================
*/