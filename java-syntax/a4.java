/*
=====================================================
        JAVA COLLECTIONS MASTER FILE
=====================================================

Topics Covered

✔ Generics
✔ ArrayList
✔ LinkedList
✔ Stack
✔ Queue
✔ PriorityQueue
✔ HashSet
✔ TreeSet
✔ HashMap
✔ TreeMap
✔ Iterator
✔ for-each loop
✔ Comparable
✔ Comparator
=====================================================
*/

import java.util.*;

//--------------------------------------------------
// Comparable
//--------------------------------------------------

class Student implements Comparable<Student>
{
    int id;
    String name;

    Student(int id,String name)
    {
        this.id=id;
        this.name=name;
    }

    @Override
    public int compareTo(Student s)
    {
        return this.id-s.id;
    }

    @Override
    public String toString()
    {
        return id+" "+name;
    }
}

public class a4
{
    public static void main(String[] args)
    {

        //--------------------------------------------
        // GENERICS
        //--------------------------------------------

        ArrayList<Integer> numbers = new ArrayList<>();

        //--------------------------------------------
        // ARRAYLIST
        //--------------------------------------------

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println(numbers);

        System.out.println(numbers.get(0));

        numbers.set(1,100);

        numbers.remove(0);

        System.out.println(numbers.size());

        System.out.println(numbers.contains(30));

        //--------------------------------------------
        // LINKED LIST
        //--------------------------------------------

        LinkedList<String> list=new LinkedList<>();

        list.add("A");

        list.add("B");

        list.addFirst("Start");

        list.addLast("End");

        System.out.println(list);

        //--------------------------------------------
        // STACK
        //--------------------------------------------

        Stack<Integer> stack=new Stack<>();

        stack.push(10);

        stack.push(20);

        System.out.println(stack.peek());

        stack.pop();

        //--------------------------------------------
        // QUEUE
        //--------------------------------------------

        Queue<Integer> queue=new LinkedList<>();

        queue.offer(1);

        queue.offer(2);

        queue.offer(3);

        System.out.println(queue.peek());

        queue.poll();

        //--------------------------------------------
        // PRIORITY QUEUE
        //--------------------------------------------

        PriorityQueue<Integer> pq=new PriorityQueue<>();

        pq.offer(50);

        pq.offer(10);

        pq.offer(20);

        System.out.println(pq);

        //--------------------------------------------
        // HASHSET
        //--------------------------------------------

        HashSet<Integer> set=new HashSet<>();

        set.add(10);

        set.add(20);

        set.add(20);

        System.out.println(set);

        //--------------------------------------------
        // TREESET
        //--------------------------------------------

        TreeSet<Integer> tree=new TreeSet<>();

        tree.add(30);

        tree.add(10);

        tree.add(20);

        System.out.println(tree);

        //--------------------------------------------
        // HASHMAP
        //--------------------------------------------

        HashMap<Integer,String> map=new HashMap<>();

        map.put(1,"Ashish");

        map.put(2,"Rahul");

        map.put(3,"Aman");

        System.out.println(map.get(2));

        System.out.println(map.containsKey(3));

        //--------------------------------------------
        // TREEMAP
        //--------------------------------------------

        TreeMap<Integer,String> treeMap=new TreeMap<>();

        treeMap.put(30,"C");

        treeMap.put(10,"A");

        treeMap.put(20,"B");

        System.out.println(treeMap);

        //--------------------------------------------
        // FOR EACH
        //--------------------------------------------

        for(Integer x:numbers)
        {
            System.out.print(x+" ");
        }

        System.out.println();

        //--------------------------------------------
        // ITERATOR
        //--------------------------------------------

        Iterator<Integer> it=numbers.iterator();

        while(it.hasNext())
        {
            System.out.println(it.next());
        }

        //--------------------------------------------
        // SORT
        //--------------------------------------------

        ArrayList<Integer> arr=new ArrayList<>();

        arr.add(5);

        arr.add(1);

        arr.add(9);

        Collections.sort(arr);

        System.out.println(arr);

        //--------------------------------------------
        // COMPARABLE
        //--------------------------------------------

        ArrayList<Student> students=new ArrayList<>();

        students.add(new Student(3,"C"));

        students.add(new Student(1,"A"));

        students.add(new Student(2,"B"));

        Collections.sort(students);

        System.out.println(students);

        //--------------------------------------------
        // COMPARATOR
        //--------------------------------------------

        students.sort(new Comparator<Student>()
        {
            @Override
            public int compare(Student a,Student b)
            {
                return a.name.compareTo(b.name);
            }
        });

        System.out.println(students);

    }
}

/*
=====================================================
WRONG SYNTAX
=====================================================

// vector<int>
❌ ArrayList<Integer>

--------------------------------

// map<int,string>
❌ HashMap<Integer,String>

--------------------------------

// push_back()
❌ add()

--------------------------------

// front()
❌ peek()

--------------------------------

// top()
❌ peek()

--------------------------------

// size(arr)
❌ arr.size()

--------------------------------

// arr.length
❌ ArrayList uses size()

=====================================================
C++ STL
↓

JAVA
=====================================================

vector

↓

ArrayList

--------------------------------

list

↓

LinkedList

--------------------------------

stack

↓

Stack

--------------------------------

queue

↓

Queue

--------------------------------

priority_queue

↓

PriorityQueue

--------------------------------

unordered_map

↓

HashMap

--------------------------------

map

↓

TreeMap

--------------------------------

unordered_set

↓

HashSet

--------------------------------

set

↓

TreeSet

=====================================================
TIME COMPLEXITIES
=====================================================

ArrayList

get()

O(1)

----------------------------

ArrayList

add()

Amortized O(1)

----------------------------

LinkedList

Insert Front

O(1)

----------------------------

HashMap

get()

Average O(1)

----------------------------

TreeMap

get()

O(log n)

----------------------------

HashSet

Average

O(1)

----------------------------

TreeSet

O(log n)

=====================================================
RULES
=====================================================

✔ ArrayList = Vector

✔ HashMap = Unordered Map

✔ TreeMap = Ordered Map

✔ HashSet = Unordered Set

✔ TreeSet = Ordered Set

✔ Queue

offer()

poll()

peek()

✔ Stack

push()

pop()

peek()

✔ Collections.sort()

Sorts List

✔ Comparable

Natural Ordering

✔ Comparator

Custom Ordering

=====================================================
*/