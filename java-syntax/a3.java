/*
=====================================================
                JAVA OOP MASTER FILE
=====================================================

Topics Covered

✔ Class
✔ Object
✔ Constructor
✔ Constructor Overloading
✔ this
✔ static variable
✔ static method
✔ final variable
✔ final method
✔ final class
✔ Encapsulation
✔ Inheritance
✔ super
✔ Method Overriding
✔ @Override
✔ Runtime Polymorphism
✔ Upcasting
✔ Downcasting
✔ instanceof
✔ Abstract Class
✔ Interface
=====================================================
*/

//----------------------------------------------------
// ABSTRACT CLASS
//----------------------------------------------------

abstract class Animal
{
    protected String name;

    // Static Variable
    static int count = 0;

    // Final Variable
    final String kingdom = "Animal";

    //------------------------------------------------
    // Constructor
    //------------------------------------------------

    Animal(String name)
    {
        this.name = name;       // this keyword
        count++;
    }

    //------------------------------------------------
    // Static Method
    //------------------------------------------------

    static void totalAnimals()
    {
        System.out.println("Objects Created = " + count);

        // Cannot access non-static variables directly.
        // System.out.println(name);   ❌
    }

    //------------------------------------------------
    // Normal Method
    //------------------------------------------------

    void sleep()
    {
        System.out.println(name + " Sleeping");
    }

    //------------------------------------------------
    // Final Method
    //------------------------------------------------

    final void breathe()
    {
        System.out.println("Breathing...");
    }

    //------------------------------------------------
    // Abstract Method
    //------------------------------------------------

    abstract void sound();
}

//----------------------------------------------------
// INTERFACE
//----------------------------------------------------

interface Pet
{
    void play();

    // public static final int x = 10;   // Implicit

    // public abstract void play();      // Implicit
}

//----------------------------------------------------
// CHILD CLASS
//----------------------------------------------------

class Dog extends Animal implements Pet
{
    private int age;

    //------------------------------------------------
    // Constructor
    //------------------------------------------------

    Dog(String name, int age)
    {
        super(name);        // Parent Constructor

        this.age = age;
    }

    //------------------------------------------------
    // Method Overriding
    //------------------------------------------------

    @Override
    void sound()
    {
        System.out.println(name + " Barking");
    }

    //------------------------------------------------
    // Interface Method
    //------------------------------------------------

    @Override
    public void play()
    {
        System.out.println(name + " Playing");
    }

    //------------------------------------------------
    // Getter
    //------------------------------------------------

    public int getAge()
    {
        return age;
    }

    //------------------------------------------------
    // Setter
    //------------------------------------------------

    public void setAge(int age)
    {
        this.age = age;
    }

    //------------------------------------------------
    // Method Overloading
    //------------------------------------------------

    void info()
    {
        System.out.println(name);
    }

    void info(int x)
    {
        System.out.println(name + " " + x);
    }

    //------------------------------------------------
    // Uncomment to see Error
    //------------------------------------------------

    /*
    @Override
    void breathe()
    {

    }

    ❌ ERROR

    breathe() is final.
    */
}

//----------------------------------------------------
// FINAL CLASS
//----------------------------------------------------

final class Cat
{

}

/*

class Tiger extends Cat
{

}

❌ ERROR

Cannot inherit final class.

*/

//----------------------------------------------------
// MAIN CLASS
//----------------------------------------------------

public class a3
{
    public static void main(String[] args)
    {
        //--------------------------------------------
        // Object
        //--------------------------------------------

        Dog d = new Dog("Tommy",5);

        //--------------------------------------------
        // Method Calls
        //--------------------------------------------

        d.sound();

        d.play();

        d.sleep();

        d.breathe();

        //--------------------------------------------
        // Encapsulation
        //--------------------------------------------

        d.setAge(6);

        System.out.println(d.getAge());

        //--------------------------------------------
        // Method Overloading
        //--------------------------------------------

        d.info();

        d.info(100);

        //--------------------------------------------
        // Upcasting
        //--------------------------------------------

        Animal a = new Dog("Rocky",4);

        a.sound();

        //--------------------------------------------
        // Downcasting
        //--------------------------------------------

        if(a instanceof Dog)
        {
            Dog d2 = (Dog)a;

            d2.play();
        }

        //--------------------------------------------
        // Static
        //--------------------------------------------

        Animal.totalAnimals();

        //--------------------------------------------
        // Final Variable
        //--------------------------------------------

        System.out.println(d.kingdom);

        // d.kingdom = "Bird";

        // ❌ Cannot assign value
    }
}

/*
=====================================================
WRONG SYNTAX
=====================================================

// class Dog : public Animal
❌ Java uses extends

-----------------------------

// virtual void show()
❌ No virtual keyword

Methods are virtual by default.

-----------------------------

// friend class
❌ Java doesn't have friend.

-----------------------------

// delete obj;
❌ Garbage Collector

-----------------------------

// Animal a;
❌ Only reference.

Need object.

Animal a = new Dog();

-----------------------------

// this->x
❌

this.x

-----------------------------

// Parent::show()
❌

super.show()

=====================================================
C++ → JAVA
=====================================================

public inheritance

↓

extends

--------------------------------

virtual

↓

Default

--------------------------------

friend

↓

Not Available

--------------------------------

this->

↓

this.

--------------------------------

Parent::

↓

super.

--------------------------------

Pure Virtual Class

↓

Abstract Class

--------------------------------

Pure Virtual Function

↓

abstract method

--------------------------------

new/delete

↓

new + Garbage Collector

--------------------------------

Multiple Inheritance

↓

Not Allowed

--------------------------------

Multiple Interfaces

↓

Allowed

implements

=====================================================
INTERVIEW NOTES
=====================================================

Q. Why no virtual keyword?

Every non-static,
non-final,
non-private method
is virtual.

--------------------------------

Q. Why use @Override?

Compiler checks
whether overriding is correct.

--------------------------------

Q. Difference between extends
and implements?

extends

↓

Class inherits another class.

implements

↓

Class implements an interface.

--------------------------------

Q. Why use super()?

Calls Parent Constructor.

--------------------------------

Q. Why use this?

Refers to current object.

=====================================================
RULES
=====================================================

✔ extends = Inheritance

✔ implements = Interface

✔ super() = Parent Constructor

✔ super.method() = Parent Method

✔ this = Current Object

✔ @Override = Compiler Check

✔ instanceof = Check Object Type

✔ abstract class cannot be instantiated.

✔ interface cannot be instantiated.

✔ final method cannot be overridden.

✔ final class cannot be inherited.

✔ static belongs to class.

=====================================================

*/