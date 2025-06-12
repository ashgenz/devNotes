a1="ghjerg"
print(a1)

a=2
b=4
print(a*b)


#variable name.upper(),variable.lower()
#len(variable name)
#variable.replace("this","with this")
#variable.count("string")
#variable.find("string"/number)  it will give the index number of that thing
#variable.split(',')    it means variable will split around comma sign



#max. of time we use round brackets in python 
#tupple=set of elements inside "round brackets",but its immutable means cant edit it after by dot functions
tup1=(34567,88)


tup2=(647,56)
print(tup2[1])

#max function
print(max(tup1))

print(tup1+tup2)


#list=set of elements inside "square brackets",and its mutable
l1=["hhh",1,True,3.14]
l2=[5,6,7]
print(l1)
print(l2)

#adding two lists
print(l1+l2)

#type
print(type(l1))

#index fuctions 1
print(l1[0:2])

#index function 2(for replacing elements)
l1[0]=474
print(l1 )

#dot functions, for mutable groupings like-sets,list,dictionary but not tupple
#append=adding only one new elements in "list"
l1.append(2.7)
print(l1)



#pop=removing last element from group or specific element from group(list,dictinary,not in tupple bcz it is immutable and not in set bcz set have remove dot function)
#we cant use indexing in pop function to remove any element
l1.pop()
print(l1)

#reverse=to reverse the order of elements of list,since ordering is specific in list
l1.reverse()
print(l1)

#insert=adding exactly two elements 
l1.insert(1,"spartaa")
print(l1)

#sort=arranging elements alphabetically,numbers in increasing order
l1=["e","t","y","i"]
l1.sort()
print(l1)

#dictionary=its a type of group where we can assign values to strings,inside "curli brackets",dictionary is also mutable
fruit1={"apple":100,"banana":120}
fruit2={"orange":140,"gavava":160}
print(fruit1)

#adding new strings to dictionary or edit value of old string
fruit1["mangoes"]=180
print(fruit1)

fruit1["apple"]=101
print(fruit1)


#keys and values
print(fruit1.keys())
print(fruit1.values())

#update=adding one dictionary to another
fruit1.update(fruit2)
print(fruit1)

#pop for dictionary
fruit2.pop("orange")
print(fruit2)


#set=obvious
#we can write a element more than once in set
#order of element is always random,even while printing
s1={"spartaa",True,345,3.14}
print(s1)

#dot function 1 for set
s1.remove(True)
print(s1)


s1.remove("spartaa")
print(s1)

#dot function 2 for set
s1.add("wtf")
print(s1)

#use of union and intersection dot function in sets
s1={1,3,4,5}
s2={9,8,0,7,5,2,5,65,1}
print(s1.union(s2))
print(s1.intersection(s2))



#using if else statements for two inputs(learn the structure)
a=10
b=25

if (b>a):
       print("b is greater than a")
else:
       print("a is greater than b")



#using if elif statements for three inputs(learn the structure)
a=10
b=20
c=30
if (a>b) & (a>c):
                  print("a is greatest") 
elif (b>a) & (b>c) :
              print('b is the greatest')
elif  (c>a) & (c>b) :
                      print("c is the greatest")



#checking whether specific element present in specific "tupple" or not (learn the structure)
tup1=("s","a","g","u")
if "a" in tup1:
               print("a presents in tup1")



#checking whether specific element present in specific "list" or not (learn the structure)
l1=["a","b","c"]

if l1[1]=="b" :
              l1[1]="z"  #this means if "b" is present at index=1 then change it with "z"
print(l1)



#checking whether specific element present in specific "dictionary" or not (learn the structure)
d1={"k1":10,"k2":20,"k3":30}
print(d1)

if d1["k3"]==30 :
                 d1["k3"]=d1["k3"]+100   #it means if value stored in k3 is 30 ,then replace k3 with k3+100
print(d1)



#use while,for loop statement(means the thing will be printed repeatedly until the condition get true)
i1=1          #enter the value from which you have to start printing
while i1<=10:  #enter the value where to end printing  
       print(i1)
       i1=i1+1    #it means numbers will be printed with differce of 1


#printing table of 3(pretty same as the loop statement just above)
i=1
n=3
while i<=10:
       print(n,"*",i,"=",n*i)
       i=i+1

#using while with list 
l1=[1,2,3,4,5]
i=0
while i<len(l1):
    l1[i]=l1[i]+100     #it means we replaced every element of l1 by l1+100 ,but "one by one"
    i=i+1
    print(l1) 



l1=['apple','mangoes','grapes','orange']
for i in l1:                 #it means we denoted element in l1 with i
        print(i)             #now we printed all elements one by one 


l1=['apple','mangoes','grapes','orange']
l2=[1,2,3]
for i in l1: 
 for j in l2:
        print(i,j)     #it means we printed i,j will  in all possible way









#python function=group of code which perform a specific task
 #like in atm machine there is a function called deposit,,and when we click on it it execute the whole group of code "in single click" in real time 

def hello():    #here we named a function as hello,with help of def
        print("hello world")    #here we given group of code/input to it 
hello()                        #here we given command to execute the function



def add_10(x):
         return x+10
print(add_10(9))


def odd_even(x):
        if x%2==0:
                print(x,"is even")
        else:
                print(x,"is odd")

print(odd_even(9))


#lambda is a anonymous function we can assign as expresdsion to it(here input is x, output is x^3)(here g is variable)
g=lambda x: x*x*x   
print(g(10))


#filtering out elemnts from group of elements,whch follow the lambda function
l1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,66,67,99]
final_list=list(filter( lambda x:(x%2==0),l1))  #it means we created a function on l1,then filtering out even no.s ,then making list of all evens,then naming the final list as"final list 
print(final_list)


#map means'convert'
l1=[1,2,3,4]
list_final_new=list(map(lambda x: x*2,l1))
print(list_final_new)


#for using reduce  we  have to first import it here from functools,since its not pre availabled
from functools import reduce
sum=reduce(lambda x,y: x+y ,l1)
print(sum)







#object oriented programmig in poython
#class=its a blueprint of real world entities
#like if we talk about any object like mobile,it has properties(attributes) like-color,cost,battery life and behavior(methods) like-make calls,watch videos,play games
#class in python=its a user defined data type(data type means int,float,bool,string)
#objects in python=specific instances of a class ,like in a mobile class specific instance(objects) are apple,samsung,motorola..etc
#similarly if in integer data type , instances are a=10,b=20,c=30


#name of class will start from capital letter

class Phone:
           def make_call(self):    #self is used to connect function with class
             print("making phone call")   #it means if make call function will run,then it will print "msking a pkphone call"

           def play_game(self):
              print("playing game") 

p1=Phone()                             #now we have to asign a variable to "phone" class
p1.make_call()                   

p1.play_game()
           

   


class Phone:
       def set_color(self,color):
              self.color=color

       def set_cost(self,cost):
               self.cost=cost

       def show_color(self):
               return self.color         #return mei equalto sign nhi lagaate

       def show_cost(self):   
               return self.cost  

       def  make_call(self):
               print("make a call")

       def play_game(self):
               print("play a game")


p2=Phone()
p2.set_color("blue")
p2.set_cost(5000)
print(p2.show_color())          #jis jis function mei return ka use hua ho,waha print lagaana zaruri hai
print(p2.show_cost())
p2.make_call()
p2.play_game()


#creating a class with constructor,means mkaing a big function to print msnt thing at once
class Employee:
        def __init__(self,name,age,salary,gender):

          self.name=name
          self.age=age
          self.salary=salary
          self.gender=gender
        
        def show_employee_details(self):
                print("name of the employee is",self.name)
                print("age of the employee is",self.age)
                print("salary of the employee is",self.salary)
                print("gender of the employee is",self.gender)

e1= Employee("ram",32,50000,"male")

e1.show_employee_details()


#use of inheritance in functions,means to inherit parent class things in child class
class vehicle:
        def __init__(self,mileage,cost):
                self.mileage=mileage
                self.cost=cost

        def show_vehicle_details(self):                                  
                print("mileage of the vehicle is",self.mileage)
                print("cost of the vehicle is",self.cost)
                print("im a vehicle")
               
v1=vehicle(15,20)
v1.show_vehicle_details()

class Car(vehicle):
        def show_car_details(self):
                print('im a car')

c1=Car(20,20)
c1.show_vehicle_details()

c1.show_car_details()

#over riding with init method,super class=parent class
class Car(vehicle):
        def __init__(self, mileage, cost,tyres,hp):
                super().__init__(mileage, cost)
                self.tyres=tyres
                self.hp=hp
        def show_car_details(self): 
                print("tyres number is",self.tyres)
                print("hp of the car is",self.hp)
                print("im a car")

c1 = Car(20,235235,5,5235)  

c1.show_car_details()



# 4 type of inheritance: multiple ,single ,multi level ,hybrid inheritance
#multiple inheritance= when a feature/function inherit with more than pone parent class
class Parent1:
        def assign_string_one(self,str1):
                self.str1=str1
        def  show_string_one(self):                       #show only want self inside brackets
                return self.str1
        
class Parent2:
        def assign_string_two(self,str2):
                self.str2=str2
        def show_string_two(self):
                return self.str2

class Child(Parent1,Parent2):
        def assign_string_three(self,str3):
                self.str3=str3
        def show_string_three(self):
                return self.str3
        
my_child=Child()
my_child.assign_string_one('im from string  of parent1')
my_child.assign_string_two("im from string of parent2")
my_child.assign_string_three("im string of child")
print(my_child.show_string_one())
print(my_child.show_string_two())
print(my_child.show_string_three())


#multi level inheritance=when we inherit as,parent>child>grand child or grand parent>parent>child
class Parent:
        def get_name(self,name):
                self.name=name
        def show_name(self):
                return self.name
        
class Child(Parent):
        def get_age(self,age):
                self.age=age
        def show_age(self):
                return self.age

class Grandchild(Child):
        def get_gender(self,gender):
                self.gender=gender
        def show_gender(self):
                return self.gender
  
gc=Grandchild()

gc.get_name("avinash")
gc.get_age(23)
gc.get_gender("male")
print(gc.show_name())
print(gc.show_age())
print(gc.show_gender())








#libraries in python=libraries are collection of functions/methods that allow us to perform many actions with writing our code
                     #numpy(numerical python)=we can do numerical computing with it,like many complex mathematical operations
                     #matplotlib=we can use visualisation with it like-bar chart,graph,scatter plot etc
                     #pandas=if we have to do data manupulation ,like in a row of employee whose name is startim]ng with "J" (example)


#we can work with 3d arrayas (array means 3d version of matrix)

import numpy as np


n1=np.array([10,20,30,40])
print(n1)


n2=np.array([[10,20,30],[30,20,10]])  #yaha double square brackets dikhenge terminal mein chahe ,rows ko round bracket se enclosed kardo
print(n2)

print(type(n1))

print(type(n2))



#making a numpy array with all elements as zero

n1=np.zeros((3,4))    #(row,coloumn)   #its zeros not zeroes
print(n1)



#making a numpy array with same number 
n1=np.full((3,5),100)
print(n1) 


#making a numpy array with numbers of a range
n1=np.arange(10,20)
print(n1)

n1=np.arange(10,20,2)  #it means we want numbers between 10,20 with difference of 2
print(n1)


#making a numpy array with all random numbers
n1=np.random.randint(1,100,10)
print(n1)                           #it means we want 10 random numbers between 1 to 100 


#checking no. of rows and coloumn in a numpy array 
n1=np.array([[1,2,3,4,5,6,7],[5,7,7,5,5,8,8]])
print(n1)
print(n1.shape)


n1.shape=(7,2)
print(n1)


#horizontal,vertical and coloumn stacking in numpy array
n1=np.array([1,2,3,6])
n2=np.array([4,5,6,2])

print(np.hstack((n1,n2)))

print(np.vstack((n1,n2)))

print(np.column_stack((n1,n2)))

#interection,union,difference
print(np.intersect1d(n1,n2))

print(np.setdiff1d(n1,n2))

print(np.setdiff1d(n2,n1))

print(np.union1d(n1,n2))

#addition of numpy arrays
print(np.sum([n1,n2])) #sum of all the elements of numoy array

#addition of column elements
print(np.sum([n1,n2],axis=0))   #Yaxis

print(np.sum([n1,n2],axis=1))   #Xaxis



#basic add,sub,multipy,divide
n1=np.array([1,2,3,6])

n1=n1+10
print(n1)

n1=n1*10
print(n1)

n1=n1/10
print(n1)

#mean,mode,median,standard deviation
n1=np.array([1,2,3,6])

print(np.mean(n1))

print(np.median(n1))

print(np.std(n1))



#saving and loading a numoy array
n1=np.array([1,2,3,6])

np.save('my_numpy',n1)

n2=np.load('my_numpy.npy')
print(n2)



#datamanupulation and data analysiswith pandas
#pandas library=panel data and its core library datamanupulation and data analysis 

import pandas as pd

s1=pd.Series([1,2,3,4,5])   #series object
print(s1)

s1=pd.Series([1,2,3,4,5],index=['a','b','c','d','e'])
print(s1)

s2=pd.Series({ 'a':100,'b':120,'c':130,'d':150})
print(s2)

s3=pd.Series({ 'a':100,'b':120,'c':130,'d':150},index=['b','a','d','c'])
print(s3)



s1=pd.Series([1,2,3,4,5,6])
print(s1[0])

print(s1[:4])

print(s1[-3:])

s1=pd.Series([1,2,3,4,5,6])
s2=pd.Series([9,8,7,6,5,4])
print(s1+s2)




s1 = pd.Series([1,2,3,4,5]) #adding a constant value to list with help of pandas library
c = 10
m2 = s1 + c
print(m2)



s1=pd.DataFrame({"Name":['bob','sam','anne','ash','oak','anu'],"Marks":[76,25,92,35,36,97],"age":[20,21,22,21,24,22],"gender":['male','male','female','male','male','female']})
print(s1)

print(s1.head())

print(s1.tail())

print(s1.shape)

print(s1.describe())

#extracting a small dataframe of table from big dataframe

#.iloc
print(s1.iloc[0:3,0:])   #it means we extracted rows from 0 to 2,and all columns so we writed 0:,means extract  all after zero

#.loc
print(s1.loc[0:3,("age","Marks")])   #here 3rd row is also inclusive


#removing particular row/column from a dataframe 
print(s1.drop('Marks',axis=1))  #axis=0 means dropping any row,1 for column

print(s1.drop([1,2,3],axis=0))


#printing min/max value of all coloumns 
print(s1.min())

print(s1.max())

#lets make a new function

def half(s):
        return s*0.5

print(s1[['age','Marks']].apply(half))



#decribing any column types 
print(s1["gender"].value_counts())

#arranging complete data frame in increasing order of marks
print(s1.sort_values(by='Marks'))







#matplotlib
import numpy as np
from matplotlib import pyplot as plt

x=np.arange(1,11)
print(x)

y=2*x
print(y)

plt.plot(x,y)
plt.show()

#adding title, label to the plot
plt.plot(x,y)
plt.title("line plot")
plt.xlabel("x-label")
plt.ylabel("y-label")
plt.show()

#changing line asthetics of plot
plt.plot(x,y,color='g',linestyle=':',linewidth=2)


plt.show()

#adding two lines in same plot
x=np.arange(1,11)
y1=2*x
y2=10*x

plt.plot(x,y1,color='g',linestyle=':',linewidth=2)
plt.plot(x,y2,color='r',linestyle='-.',linewidth=3)
plt.title("line plot")
plt.xlabel("x-label")
plt.ylabel("y-label")
plt.grid(True)

plt.show()

#adding sub plots
x=np.arange(1,11)
y1=2*x
y2=10*x

plt.subplot(1,2,1)
plt.plot(x,y1,color='g',linestyle=':',linewidth=2)

plt.subplot(1,2,2)
plt.plot(x,y2,color='r',linestyle=':',linewidth=2)

plt.show()




#bar plot
student={"bob":87,"matt":56,"sam":27}
names=list(student.keys())
values=list(student.values())

plt.bar(names,values)
plt.show()
#horizontal bar plot
x=np.arange(1,100)
plt.barh(names,values,color='g')
plt.title("barh plot")
plt.xlabel("Names")
plt.ylabel("Marks")
plt.grid(True)
plt.show()




#scatter plot
x=[10,20,30,40,50,60]
a=[3,5,2,2,6,2]

plt.scatter(x,a,marker="*",c="b",s=100 )
plt.show()


#adding two markers  in the same plot
x=[10,20,30,40,50,60]
a=[3,5,2,2,6,2]
b=[12,13,14,15,16,17]
plt.scatter(x,a,marker="*",c="b",s=100 )
plt.scatter(x,b,marker="*",c="r",s=200 )
plt.show()

#scaterr sub plots
x=[10,20,30,40,50,60]
a=[3,5,2,2,6,2]
b=[12,13,14,15,16,17]
plt.subplot(1,2,1)
plt.scatter(x,a,marker="*",color='g',linewidth=1)

plt.subplot(1,2,2)
plt.scatter(x,b,marker="*",color='r',linewidth=2)

plt.show()


#histogram
data =[1,2,4,5,2,7,2,7,4,67,6,5]

plt.hist(data,bins=3)
plt.show()

#working with a dataset

s1.head()
plt.hist(s1["Marks"],bins=30,color='r')
plt.show()

#box plot(5 number summary)

one=[1,2,3,4,5,6,7,8,9]
two=[1,5,8,3,6,2,0,6,5]
three=[7,6,5,4,3,2,1,9,8]


data = list([one,two,three])
plt.boxplot(data)
plt.show()


#voilin plot
one=[1,2,3,4,5,6,7,8,9]
two=[1,5,8,3,6,2,0,6,5]
three=[7,6,5,4,3,2,1,9,8]


data = list([one,two,three])
plt.violinplot(data,showmedians=True)
plt.show()



#pie chart
fruit=['apple','orange','mango','gavava']
quantity=[2,15,26,85]

plt.pie(quantity,labels=fruit)
plt.show()

#changing pie chart asthetics
plt.pie(quantity,labels=fruit,autopct='%0.1f%%',colors=['yellow','grey','blue','black'])
plt.show()

#doughnut chart
fruit=['apple','orange','mango','gavava']
quantity=[2,15,26,85]
plt.pie(quantity,labels=fruit,radius=1)
plt.pie([1],colors=['w'],radius=0.5)
plt.show()












