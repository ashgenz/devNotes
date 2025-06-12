/*it adds functionality on a website
its a programming language like c/c++,java,python

we will use console first to write js code,,then we will use the ledgit way

it uses repl method=read -evaluate -print -loop

no need to add semicolon at last
and agar add kar bhi de toh error nhi aata

no need to add var,let,const
their purpose will be studied in a while
*/

//variable=nmae of storage location
let c;  
var a=17;
var age=20
name1="avi"
console.log("heey!!","spartaa!!")
console.log(name1)
console.log(a)
console.log(c)
//data types=
/*number=131,-1299,3.14,-4.3
boolean=true/false
string=text
undefined=0/0(NaN)  or not given any value yet
null
bigint
symbols     
typeof tells us type of datatype
*/
console.log(typeof a)
console.log(typeof name1)

//no need to specify int or float

//(two operant)binary operations in js=
//a ,b =opearants
//+,-,*,/=opeartors
//a+b,a-b,a*b,a/b
//remainder operator/modulo=a % b
//power opeartor/exponentiation=a**b
const b=2
var sum=a+b
console.log(sum)

var rem=a % b
console.log(rem)

var exp=a**b
console.log(exp)

//NaN=not a number=its a number but undefined  like;-0/0 is a NaN
//bcz its a number by we cant tell what it is
un=0/0;
console.log(typeof un)
//opeartion with NaN will give a Nan too


//opeartor rprecedance=BODMAS
//  () >   **  >   *,/,%   >  +,-

console.log((7*2)/2+3*3-3+2)

//let ,var are similar ,,at present let is used
//const is used to definea constant ,,which cant be changed further

var a=a+100
console.log(a)
//Assignment opeartors

//a+=1   means a=a+1     and unary= a++,++a
//similarly a-=1   a=a-1   a--,--a
//a*=2  a=a*2
//a/=3  a=a/3
//a%2  a=a%2
//a**=4  a=a**4

//unary opeartors
a+=2
a++
console.log(a)

//pre-increment=++a =first increase then use
//similarly post-increment
num=10
newnum =num++
console.log(newnum)
console.log(num)
//ismei newnum ko pehle num ki value mili,,,then num ki vakue badhi

new2num =++num
console.log(new2num)
console.log(num)

//identifiers rules=reles to follow while naming a variable

//it contains a-z,0-9,_,$  but no space
//variable must start with a letter or $ or _ (cant start with a number)
//names are case sensitive,,means num and Num
//we cant use reserved keywords as variable name

//camelcase =  fullName
//snake_case=  full_name
//pascalcase=   FUll_Name
//these are way of writing any variable name


//$boolean in js =true/false not True/False

//we can change the type of variable in js,,by changing its value

//typescript=a recent version of js ,,which have strict rules of of syntax than js
//designed by microsoft



//string=text or sequence of character(sentences,paragraphs..etc)
name1 = "tonystark 'wdym' 1234 3.14 true false"
console.log(name1)
console.log(typeof name1)

//index number of string= 0 ,1,2,3....
console.log(name1[8])

//%   variable.length
l=name1.length
console.log(l)
console.log(typeof l)
    
console.log("avi".length-3,"inch")


//adding two strings
firstname= "avi"
lastname= "maheshwari"
fullname= firstname+" "+lastname
console.log(fullname)


//here 1 converted into string
console.log("avi"+1)


//null=its a value we can give to a variable
//undefined=variable to which we havent defined yet or we are trying to print a mathematicaly undefined expressions(NaN)

d=null
console.log(d)
d=1
console.log(d)

console.log("sum is :",a+b)


//template literals =`` =used to write "string expression string" esaily
let a1=3
let b1=4
console.log("total:",a+b,"rupees")

console.log(`total: ${a+b} rupees`)

//operators in js
//arthmatic opeartors =+,-,*,/,**,%
//unary opeartors(it has only a single opearnt,and opeartion gets done) =a++,a--
//assignment opeartors=   =,+=,-=,*=,/=,%=\//comparision=  >,>=,==,!=
//comparision=  >,>=,==,!=
console.log(b1%=3)

console.log(10>=1)
console.log(5=="5")
console.log(0==" ") 
console.log(0==false)
console.log(null==undefined)

console.log(5==="5")
console.log(0===" ") 
console.log(0===false)
console.log(null===undefined)


console.log("a">"A")/*every letter,symbol have  a unicode value like
a=91,b=62,....
A=67,.....
we can search for syymols unicodes on web*/


//logical=  &&,||
console.log(1==1 && 2==2)
console.log(1==2 || 1==1)

//conditinal statements=
//if,if else,else if,nested if else,switch
a2=9
if (a>=3) {
    console.log("spartaa!!")
}//we can use continuous if if if....,to add as many condition we want

if (a2>9) {
        console.log("1")
} else {
        console.log("0")
}

if (a2>8) {
    console.log("1")
}
else if(a2>7){
    console.log("2")
}
else if (a2>1) {
    console.log("3")
}
else{
    console.log("4")
}/*else if ki condition sirf tabhi heck hogi jab upae wa;a if wali condition
galat ho

we can do if elseif elseif ......*/


//nested if else
let marks=91
if (marks>=33){
    if (marks>=90) {
        console.log("A++")
    }
    else if(marks<90){
        console.log("in between:)")
    }
}
else{
    console.log("fail")
}

//logical operators
console.log(!(!true&&false)) //*
console.log(!true)

//question
let strr1="avii"
if (strr1[0]==="a"  && strr1.length>3) {
    console.log("its a good string")
}
else{
   console.log("not a good string")
}
//question2(predict output ofthe foll. code)
//ans=safe


//truthy and falsy value
//every value is either a truthy or falsy

//falsy= false,0,on(bigint value),"",null,undefined,NaN
//truthy=rest are truthy


//switch statement
let color="blue"
switch(color){
    case "blue": console.log("color was blue")
    break
    case "red": console.log("color was red")
    break
    default: console.log("light is broken")
}
//if we remove break ,then deafult will be printed no matter what


//alert
/*
alert("something is wrong");
*/
console.error(":) ha ha!")


//prompt

// let name0=prompt("enter your name")
// console.log(name0)



//string method = variable.method()
//methods doesnot alter the string value,,it takes the string and do function ....,therefore in java script strings are immutable

//$ trim=removes start and end spaces
msg = "  helloprj  "
console.log(msg.trim())

//$ touppercase
console.log(msg.toUpperCase())
//$ tolowercase
console.log(msg.toLowerCase())


//string methods with arguments= variable.method(argument);

//$ indexOf=finding index number 
console.log(msg.indexOf("hello"))
console.log(msg.indexOf("l")) //*when l came for the first time
//-1 output means the string isnt present in the variable

//$slice method
msg.slice(5);
console.log(msg) 
console.log(msg.slice(5)) //printing from index 5 to.. end
console.log(msg.slice(2,7)) //2 included 7 not included(2 to 6 included)
console.log(msg.slice(-7))  //means length-7=12-7=5
//! these dot functions isnt iterating the msg

//$replace
console.log(msg.replace("hello","hi"))

//$repeat
console.log(msg.repeat(2))




//arrays =linear collection of values
let students=["prj","a lie ;)","ash",7,false]
console.log(students)
console.log(students.length)
console.log(["prj","a lie ;)","ash",7,false].length)
console.log(students[1])
console.log(students[1][2]) //1=a lie ;), 2="l"
console.log(students[0].length)

//% strings are immutable ,,while arryas are mutable
fruits0 = ["mango","apple","lemon"]
fruits0[0]="banana"
console.log(fruits0)
fruits0[6]="pineapple"
console.log(fruits0)
console.log(fruits0.length)

// %array methods

//$ push method=adds vslue to the last
console.log(fruits0.push("wow"))  //* added value ,printed final length of array
console.log(fruits0)

//$ pop= removes value from last
console.log(fruits0.pop())  //* poped out last value,,and printed last value
console.log(fruits0)

//$ unshfit=add to start
console.log(fruits0.unshift("hey")) //8
console.log(fruits0)

//$ shift=removes from start
console.log(fruits0.shift())
console.log(fruits0)



//practice question
ary1=['january','july','march','august']
console.log(ary1)
ary1.shift()
ary1.shift()
ary1.unshift("june")
ary1.unshift("july")
console.log(ary1)

//$ indexOf for array
console.log(ary1.indexOf("march"))
console.log(ary1.indexOf("october"))

//$ includes for array=to check either a value is present in array or not ,,it answers in true and false
console.log(ary1.includes("july") )

//$ concat=concatination or merging two arrys
ary2=["hey","ngl","wdym","ohh","ou","dk"]
console.log(ary1.concat(ary2))
console.log(ary1);

//$reverse=reverse an array
console.log(ary2.reverse())
//$ note-reverse function will revrse the actual ary2 permanently
console.log(ary2)

//$ slice in array(doesnot changes the array)
console.log(ary2.slice())   //prints complete array
console.log(ary2.slice(1))  //prints from index=1
console.log(ary2.slice(1,2)) //prints index 1
console.log(ary2.slice(-1))  //prints last 1 element

//splice in array=all in one tool to removes/replace/add
//variable.splice(starting index,no. of vaalues to delete from start index,values to relace at space where deleting happened)

//splice changes the array permanently
console.log(ary2)
console.log(ary2.splice(3))  //removes 2 to...end,and alsoo printed what it removed
console.log(ary2)
console.log(ary2.splice(2,1))   //removes 1 value from start index=2,also prints what it removed
console.log(ary2)
console.log(ary2.splice(1,0,"woooooh!")) //nothing deleted
console.log(ary2)

//sort in array=it arranges in ascending a/c to first letter of every elemennt
ary3=["sfjj","asdf","jkl","prj",9,19]
console.log(ary3.sort())
ary4=[100,3,97,64]
console.log(ary4.sort())


//practice question
ary5=['january','july','march','august']
ary5.splice(0,1)
ary5.splice(1,0,"june")
console.log(ary5)

//ques2
ary6=['c','c++','html','javascript','python','java','c#','sql']
ary6.reverse()
console.log(ary6.indexOf("javascript"))


//reference=address in memory
//variable name is the adress ,where array value have stored
// ary7 = [1,2,3]  means 1,2,3 value get stored in a memory block/address ,,,and ary7 is pointing it when we call ary7
// ary8=[1,2,3],,ary7,8 stored same values but at different address
//and since ary7,ary8 are addressesonly
//so [1,2,3] !===[1,2,3]  ,,bcz we are comparing addresses here,,lhs and rhs are address
ary7=[1,2,3]
ary8=[1,2,3]
console.log(ary7===ary8)
ary9=ary8
console.log(ary8===ary9)  //bcz both have same addresses,both 8,9 pointing the same memory block
//and agar ary8 ko mute karenge toh ary9 bhi automatically change ho jaaega,and vice versa


//const arrays=addresses of array become cost,,we can still change the values


//nested array
//we can visualise it as grid with rows ,column,,,,row =outer index,,coloumn=inner index
nary=[[9,8],["heyy",1,2],[6,5]]
console.log(nary[1][1])
console.log(nary[1][1])
console.log(nary[1].length)

//for loop in js
for (let i = 1; i <=10;i++){
    console.log("spartaa!!")
    console.log(i)
}
console.log("---")
for(let i =1;i<=15;i=i+2){
    console.log(i)
}
console.log("---")
for(let i =2;i<=10;i=i+2){
    console.log(i)
}
console.log("---")
//infinte loop in js
/*
for(let i =1;i>=10;i++){
    console.log(1)
}
*/
for(let k=5;k<=50;k=k+5){
    console.log(k)
}
//nested for loop
for (let i = 1; i <= 4; i++) {
   for (let j = 1; j <= 3; j++) {
        console.log(j)
   }
}
//console.log automatically chnages line:(
console.log("---")

//while loop=jab tak
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}
console.log("---")
//question
/*
const favmovie="avatar"
let guess=prompt("guess the favourite movie!")
while((guess!=favmovie) && (guess!=quit)){
    prompt("wrong guess!,try again !")
}
if (guess="avatar"){
    console.log("congrats!!,right guess :)")
}
else{
    console.log("u quit:(")
}
*/


//break; =usedto break any loop,,from in between
for (let i = 1; i <=5; i++) {

    if (i==3) {
        break;
    }
    console.log(i)

}

console.log("---")
//loops with arrays
let fruits=["mangoes","banana","apple","orange","pineapple"]

for (let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i])

}
console.log("---")
//loops with nested arrays

let marvel=[["ironman","spiderman","thor"],["superman","wonder women","flash"]]

for (let i = 0; i < marvel.length; i++) {
    console.log(`list #${i}`)
    for (let j = 0; j < marvel[i].length; j++) {
        console.log(i,j,marvel[i][j])

    }
}
console.log("---")


//for  of loop
let apna="apnacollege"
for(char of apna ){
    console.log(char)
}
console.log("---")

let fruits1=["mango","pineapple","apple","orange"]
for(fruit of fruits1){
    console.log(fruit)
}
console.log("---")


//nested of loop
let heroes=[["ironman","spiderman","thor"],["superman","wonder women","flash"]]
for(lists of heroes){
    for(hero of lists){
        console.log(hero)
    }
}
//its means heroes ke inner arrays ko lists naam de diya
//then lists arrays inner elements ko hero naam de diya
//aese apan saare elements print kara sakte
console.log("---")


//question 1
let arr=[1,2,3,4,5,6,2,3]
let num9=2

for(i=0;i<arr.length;i++){
if(arr[i]==num9){
    arr.splice(i,1)
}}
console.log(arr)

//questiion 2
let num0=287152
let str00=num0+""
console.log(str00.length)

//question 3
let numm9=287152
let numm8=numm9.toString()
let sum8=0
for(let i=0;i<=numm8.length-1;i++){
      sum+=parseInt(numm8[i])
}
console.log(sum)
//to string convert into string and parseInt convert into number(integer)

//question 4
let n=7
fact=1
for(let i=7;i>=1;i--){
    fact=i*fact
}
console.log(fact)

//question 5
array6=[1,35,5,7,2]
largest=0
for (let i = 0; i < array6.length; i++) {
   if(largest<array6[i]){
    largest=array6[i]
   }

}
console.log(largest)

//javascript objects literals =used to store (key,value) pair and complex entities
let student1={
    name:"prj",
    age:19,
    college: "ju",
    pros: ["pure  soul","daze smile","so  adorable"]
}

//get values from object literal
 console.log(student1.name)
 //or
console.log(student1["name"])


let prop="pros"
console.log(student1.prop)
console.log(student1[prop])  //here we can only use sqaure brackets

let st={
    1:"wooh",
    true:"yeh",
    null:"oh"
}
console.log(st[true])

//update  values
st.null="grt!!"
console.log(st[null])

//add values
let gender
st.gender="female"
console.log(st.gender)

//$ delete values
delete st.null
console.log(st)

//objects of objects /nested objects
let classinfo={
    name:{shardha:"present", aman:"present"},
    age:{shardha:19,aman:20}
}
console.log(classinfo.name.aman)
classinfo.age.shardha=20
console.log(classinfo.age.shardha)

//array of objects
let classs=[{age:19},{name:"Avi"}]
classs[0].age=21
console.log(classs[0].age)

//math object=pre buid object in  js,,used to call math functions..etc

//modulus /absolute function
console.log(Math.abs(-13))

//power
console.log(Math.pow(2,3))

//floor function/gif function
console.log(Math.floor(3.76))

//ceiling function
console.log(Math.ceil(8.23))

//random value between [0,1)
console.log(Math.random())

//random integer between [0,10) or [0,9]
num5=Math.random()
num3=num5*10
console.log(Math.floor(num3))

//guessing game ,,a integer between a,b ,,integer is random,,like between 5 and ten [5,10)
console.log(Math.floor((Math.random())*5+5))


//functions in js ---like we used-->console,.push,.pop
function hello(){
    console.log("hello")
}
hello();
hello();
//like we can make a function which outputs a random no. between [1,6]
//which we can use as a dice :)


//function with arguments(value/values we pass to function)
function hey(i,j){
    console.log(i+10,j+20)
}
hey(7,9)

//question=find avearge of the given 3 no.s--->easy
//we can check that either the name is a variable or pre-defined function or defined function,,,by just entering the name with .dot function in console

//printing table of a no.
function printTable(n) {
    for(let i=n;i<=n*10;i=i+n){
        console.log(i)
    }
}
printTable(10)

console.log("---")

//return keyword=value u want  in the end to execute
function hyy(a,b){
    console.log("heeyy!")
    return a+b;
}
console.log(hyy(2,9))

//adding the stringd of an aray in function
let strrr=["hey","hoh","yeh","wowo","woooh!!!"]
function concat(strrr){
    result=""
    for (let i=0;i<=strrr.length-1;i++){
        result+=strrr[i]
    }
    return result;
}
console.log(concat(strrr))

//scope=determines accessibility of variable ,object and function

//function scope=variables defined inside a function cannot be accessed from outside

function calsum(a,b){
    let summ=a+b
    return summ;
}
//console.log(summ)  summ is not desined outside ,,and we are unable to call it from the function
console.log(calsum(1,2))

//global scope=variables defined outside ,,can be accessed from everywhere

//block scope=variable deifned between "{},()" cant bbe accessed from outside
{
   let kk=9
}
//console.log(kk)
//let,const are unable to accessed from outside
//#defining as var or writing nothing before(system count it as var) ,, then it can be accesed from outside

console.log("---")

//lexical scope=when a function is defined inside another function then
//we can call variables from outer function in inner function,,but vice versa is not true
function outerfunc(){
    let a=2
    function innerfunc(){
        let x=1
        console.log(a)
    }
    console.log(a)
}
console.log(outerfunc())


//question
//solution=hello,namaste,namaste


//function expression /defining function with variable name
const sum7 = function(a,b){
    return a+b
}
console.log(sum7(2,3))

//high order functions =function which either take an functional argument or returns a function

//taking functional argument
function func11(func,count){
    for(let i=1;i<=count;i++){
            func()
    }
}
let greet =function(){
    console.log("hello")
}
console.log(func11(greet,5))    //we shouldnot write greet()
console.log(func11(function hh(){console.log("hey!")},5))

console.log("---")
//taking function as return
function oddeven(request){
    if(request=="odd"){
        let odd=function(n8){
            console.log(!((n8)%2==0))
        }
        return odd(n8);
    }
    else if(request=="even"){
        let even=function(n8){
            console.log((n8)%2==0)
        }
        return even(n8);
    }
    else{return "wrong request";}
}

let n8=8
console.log(oddeven("even"))

console.log("---")

//methods

const calculator={
    add: function(a8,b8){
        return a8+b8;
    }
    ,sub: function(a8,b8){
        return a8-b8;
    }
    ,mul:function(a8,b8){
        return a8*b8;
    }
}

console.log(calculator.add(2,4))
console.log("---")
//array is a object in js,,so array dot functions=object dot function

//q1
let array1=[1,3,4,6,8,10,14]
function greaterarray(n){
    for (let i = 0; i < array1.length; i++) {
        if (array1[i]>n) {
            console.log(array1[i]);
        }

    }
}
console.log(greaterarray(4))
console.log("---")


//q2
let strr="abcdabcdefgggh"
function getunique(strr){
    let ans="";
    for (let i = 0; i < strr.length; i++) {
        let currchar=strr[i]
        if (ans.indexOf(currchar)==-1) {
            ans+=currchar //adding new letters in ans string
        }
    }
    return ans;
}
console.log(getunique(strr))

//q3
let country = ["australia", "germany", "united states of america"];

function longestName(country) {
    let maxLengthString;
    let maxLength = 0;

    for (let i = 0; i < country.length; i++) {
        let currentCountry = country[i];

        if (currentCountry.length > maxLength) {
            maxLength = currentCountry.length;
            maxLengthString = currentCountry;
        }
    }

    return maxLengthString;
}

console.log(longestName(country));


//q4
let sttrr;
function vowelsCount(sttr) {
    let count = 0;

    for (let i = 0; i < sttr.length; i++) {
        if (sttr[i] == "a" || sttr[i] == "e" || sttr[i] == "i" || sttr[i] == "o" || sttr[i] == "u") {
            count++;
        }
    }

    return count;
}

console.log(vowelsCount("aeiouuygygygyg"));

//q5
function randomint(a,b){
    console.log(Math.floor(Math.random()*(b-a))+a)
}
console.log(randomint(5,10))


//this keyword=used to access variables/key  of object,,in an function
const  studentt={
    name:"Avi",
    age:23,
    maths:100,
    phy:100,
    chem:100,
    getavg(){
        console.log(this)//checking what is this
        let avg=((this.maths+this.phy+this.chem)/3)
        console.log(avg)
    }
}
console.log(studentt.getavg())
//window object,,(defualt ,in which all things of website stores)


//try & catch statement=since whenever a error is pop in any line
//the lines of code below it ,doesnot get runned ,chahe vo sahi ho ya galat
//so if we want ki jis code mei error nhi hai woh toh chale lam se kam,,then we use this statement

//try{code to check for errors}
//catch{code to be executed if ,try code get errors}

try{cfviu}
catch(errorcode){console.log("error in try code")
           // console.log(errorcode)
}
//we can also print the code causing error


//arrow function
let ssum=(a,b) => {console.log(a+b)}
console.log(ssum(2,3))
//for no argument we should write "()"
//for single argument we can write "arg1" or "(arg1)"


//implicit return ,,in arrow function=we can directly write value to return without consolelog or return keyword

let ssum1=(a,b) =>(a*b) //curved bracketts or no brackets used in place of curly
console.log(ssum1(3,3))

let divd=(a,b) =>a/b
console.log(divd(3,3))

console.log("---")

//set timeout function=when we have to output the code after some miliseconds

let tt1=setTimeout( () =>{console.log("apna college 1!!")}
,1000)

//set interval function=if we want to execute something repeatedly after the given time(ms)
let tt2=setInterval( () =>{console.log("apna college 2!!")}
,1000)
setTimeout( () =>{clearInterval(tt2);}
,1100)//we have to give some extra ms ,,like i gave 100,so that it prints 1 time evertime


//this for arrow functions for normal function
//scope of this in normal function depends on calling object,,,this=student
//scope of arrow function depends on, object which calls parent of  the arrow function(kind a lexical scope),,this=window
const sstudent={
    name:"aman",
    marks:95,
    prop: this,//global scope
    getname: function (){
        console.log(this)
        return this.name    //this=object which calls getname,,here calling object is sstudent ,,so this.name =aman
    },
    getmarks:  ()=>{
        console.log(this)
        return this.marks  //this=scope of parent ..means parent of getmarks is sstudent,,,and calling object of sstudemnt = window ,,so this.marks=undefined
    },
    getinfo1: function  (){
        st1=setTimeout( ()=>{
            console.log(this)
            console.log("this was st1")
        },2000)
    },
    getinfo2: function(){
        st2=setTimeout(function(){
            console.log(this)
            console.log("this was st2")
        },2000)
    }
}
console.log(sstudent.getname())//here "this" is the object in which it contains=sstudent object
console.log(sstudent.getmarks())//in console this "{}" will be print as window object
console.log(sstudent.getinfo1())//undefined
console.log(sstudent.getinfo2())//undefined
console.log(sstudent.st1)//this of st1=this of its parent=sstudent object
console.log(sstudent.st2)//this of st2=window object

//prac question 1
nsquare=(n)=>{
    console.log(n*n)
}
console.log(nsquare(7))

//q2=easy


//array methods

//.forEach method=apply the function below,for every element of array
let ar4=[1,2,3,4,5]
function print(a){
    console.log(a)
}
console.log(ar4.forEach(print))

//or
ar4.forEach(function(a) {
    console.log(a)
})
console.log(ar4.forEach)

//.map function=it makes a new array with applied code to all elements
let num1=[1,2,3,4]
let double=num1.map((a)=>{
    return a*2 //if no return given ,,then new array will have all undefined elements
})
console.log(double)


//.filter function=finally we will get elements which obeys the condition inside function
let nums=[2,4,1,5,6,2,7,8,9]
let even=nums.filter((a)=>(a%2==0))
console.log(even)

//.every function=if every element obeys the condition then it will output true,,otherwise false
let arr1=[2,4,6,8]
let alleven=arr1.every((a)=>(a%2==0))
console.log(alleven)

//.some function=if at leat one element obeys the condition,,then it output true
let arr2=[2,1,3,5,7,9]
let alleven1=arr1.some((a)=>(a%2==0))
console.log(alleven1)

//.reduce function=output a single no. a/c to the condition
//.reduce(accumulator,element),,accumulator stores the f(a,b) a/c to the condition,and then it use the previous stor value in net step
//like in below example it saves first a=1,the, a=3,then 6,then 10.
let redu=[1,2,3,4].reduce((a,b)=>{
console.log(a)
return (a+b)})
console.log(redu)
console.log("---")
//max value in a array with reduce
let max1=[1,2,3,4,5,6,7,8,9].reduce((a,b)=>{
    if(a<b){
        return b;
    }
    else{
        return a;
    }
})
console.log(max1)


//q
let div10=[10,20,30,40].every((a)=>(
a%10==0
))
console.log(div10)

//default parameters
function sum9(a,b=3){
return a+b
}
console.log(sum9(5))
console.log(sum9(5,1))//here it taked b=1

//spread=expands an iterable()into multiple values
arr8=[1,2,3,4,5,6,7,8]
function ajh(...arr8){      //...arr8=all elements of arr8
    console.log(Math.min(...arr))
}
console.log(ajh())

console.log([..."hello"])

//joing any two iterates with spread
let array2=[1,2,3,4,5]
let array3=[6,7,8,9]
console.log([...array2,...array3])

//spreading a object literal(key value pair),,adding a key,value in final output
let data1={
    email:"jndfjnf@gmail.com",
    password:"abcd",
}
console.log({...data1,age:19}) //use curly brackets for object

console.log({...array2}) //here key is their index no.
console.log({..."hello"})

//rest=stores many values in one iterate like here "args array"
function sum5(...args){
    for (let i = 0; i < args.length; i++) {
       console.log("input was",args[i])
    }
}
console.log(sum5(1,2,3,4))

//arguments keyword
function mina(...arg2){
    console.log(arguments)
}
console.log(mina())
//aruments.function is invalid,,we can tapply dot function to it
function min2(msg, ...arg2 ){//we have to take the string input (msg)before elements (...args)input here
    console.log(msg)
    console.log(arguments)
}
console.log(min2())

//destructuring=storing values of array into multiple variables
let names =["tony","bruce","peter","steve","abc"]
let [winner,runnerup,...others]=names

console.log(winner,runnerup,...others)

//destructuring an object
let student2={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    usernames:"kasjbakb@gmail.com"
}
let {usernames:user,age:age1,city="mumbai"}=student2

//q1
let sum1=0;
squaresum=((...a)=>{
   return a;
})
console.log(squaresum(1,2,3))

//will do remaining questions in first revision










//now we will start applying js on website


//document object model=document with a logical tree
//like when html and css converts in js,,it stores in a logical tree format

//every html tag converts into a object in js
//type document in console to see the htmlcode of site
//console.dir(document) to see html as objects


//we can select and then manipulate things with  js

//cosole.dir(document.all)=to see all htmlallcollection

//console.dir(document.all[23])
//console.dir(document.all[23].innertext)
//document.all[23].innertext="new inner text"

//how to select elements

//getElementByid
//document.getElementByid("idname")=element as object ,we can save this object in any variable
//idname.src  =directory link
//idname.tagName   like-IMG
//idname.id

//getElementByClassName=it gives a html collection(similar to object) means we cant use dot function for it
//document.getElementByClassName("class id name")
//document.getElementByClassName("class id name")[2]
//getelementbyclassname gives empty html cllection object ,when we give wrong idname 

//selecting using tag name 
//idname as "p",means every paragraph tag
//getElementbyTagName("p")  --it means selecting all paragraph tag by 
//getelementbytagname gives empty html cllection object ,when we give wrong idname 

//we can apply js(like -loops) on any object by storing it into a variable ,,,and 

let smallimages= document.getElementsByClassName("oldimg")

for (let i = 0; i < smallimages.length; i++) {
    smallimages[i].src="C:/Users/hanuman/Downloads/picc1.jpg" //sky image
    console.log(`value of ${i} is been changed successfully`);
    
} 


//query selectors-select any element by class,id,tag name
//document.queryselector('p')
//document.queryselector('#myid')
//document.queryselector('#myclassname')

//query selector selects the first element named oldimg in our webpage,,it doesnot select all oldimg elemnents
//document.queryselector('div a')-it means selecting anchors tag tag in first div

//document.queryselectorAll('div a ')-it will slect all anchor tags inside all divs
//we will get list named  node list

console.log(document.querySelectorAll('div a '))






//manupiating/doing changes in webpage using js element selectors 

//.innertext---show all visible texts 
//.textcontent--- show all texts ,,whether its set as hidden by css
//.innerhtml--shows complete inner html code inside od element

//inner text doesnot add \n,wgereas textcontent and innerhtml will add
console.log(Quora.innerText)

console.log(Quora.textContent)
console.log(Quora.innerHTML)

//manupulating
console.log(adam.innerHTML="<u>Adam</u>")
console.log(ghj1.innerHTML=`<u>hey waaap!</u>`)
console.log(ghj2.innerHTML=`<b>${ghj2.innerText}</b>`)


//manupulating attributes(like -id,class,stlying- like image source)

//getters and setters 

console.log(ghj3.getAttribute('id'))
let ghjj3=document.querySelector("#ghj3")
ghjj3.setAttribute('innerText',"text have changed with manupulation")
//ghj3.setAttribute('id','ghj4')--do in console ,only works for id,placeholder(text inside input)
//$inner text is unable to set with this :(

//manupulating styling/css

//object names  of styles in console is also seen in camelcase ,,like backgrounnd-image is written as backgroundImage

ghjj3.style.color="yellow";

//with manupulation ,we can set or see  inline styles only,,we cant set/see the styling that have been set in the css file
//whereas we can see/set the styles which have been set in the html


//checking all classidname or class list
ghj3.classList.add("bip")

//ghj3.classList.remove("bip")

//if we set class name by setattribute,,then it set the style of one class name only
//and agar pehle mutiple classes se styling definr ki gayi ho,,and fir class ko setsttribute kare,,then vo saari other class ki style hata dega,,ecept the one we have just set 
//isiliye set attributr sirf ek class ki styling hi lagaane deta hai
//so we dont use it for styling often

//classlist contains
console.log(ghj3.classList.contains("bip"))

//classlist toggle
console.log(ghj3.classList.toggle("bip")) //toggle makes class add to remove and remove to add
//since bip pehle se tha ,,,so ulta means,,usko remove kardo
console.log(ghj3.classList.contains("bip"))
//so it no longer there

console.log("---")
console.log(ghj3.classList.contains("huo"))
console.log(ghj3.classList.toggle("huo"))
console.log(ghj3.classList.contains("huo"))


//navigation on page -children,parentELement and childElementcount
console.log(ghj.children)
console.log(ghj.childElementCount)
console.log(hey1.parentElement)
console.log(ghj.children[1])
console.log(ghj.children[1].previousElementSibling)//sibling previous to second children of ghj

ghj.children[1].previousElementSibling.style.color="green"//changing style of previous sibling



//adding new elements with manupulation

let newp=document.createElement('p')
newp.innerText="new para element with manupulation"
let body=document.querySelector("body")
body.appendChild(newp)

//we can only add/append this new element to anyone one space in website

//adding a button
let btn=document.createElement("button")
btn.innerText="click me"
body.appendChild(btn)

//adding text directly 
newp.append("---.second line also added:0")

//adding button in the same line
let btn2=document.createElement("button")
btn2.innerText="click mee"
newp.append(btn2)


//as we have seen,,that jab new line mei button banaya toh backgroung color grey nhi aaya,whereas same line mei kiya toh aa gaya 

//use of prepend
body.append("append text")
body.prepend("prepend text in new line:)----")

//append text added in the button line bcz it was a inline element


//before begin=in previous line of kj
//after begin=in kj line ,,before kj starts
//before end =in the line of kj,after kj
//after end =next line of kj
let btn3=document.createElement("button")
btn3.innerText="before begin"
kj.insertAdjacentElement('beforebegin',btn3)




//removing elements
//removechild,remove

let btn4=document.createElement("button")
btn4.innerText="button we gonna remove"
body.append(btn4)
//now we will remove thid btn4
body.removeChild(btn4)

//btn4.remove()  --to remove btn4 from site/body 
//body.remove()  --to remove all elements from our site 




//dom events
//signals occur when user inputs something/ we do any action

//onclick
// <button onclick="console.log('button was clicked');">dom event button</button>
//doubt--this working in console but not by writing here and running on site
/*
let btt1=document.querySelectorAll("#btt1")
console.dir(btt1)
btt1.onclick=function(){
    alert("btt1 was clicked")
}
*/

//we can only set only one function to onclick
//if we set more events to a button at a time,,,then we will use addeventlistener("click/dblclick(event)",callback)
/*
let btn0=document.querySelector("#btn00")
btn0.addEventListener("dblclick",say)
function say(){
    console.log("btn0 was double clicked");
}
*/

//check mdn for web events,to check more events like click and double click

//activity--generate random color
/*
let btn80=document.querySelector("#btn8")
btn80.addEventListener("click",generatecolor)

function generatecolor(){
    let redd=Math.floor((Math.random())*255)
    let bluee=Math.floor((Math.random())*255)
    let greenn=Math.floor((Math.random())*255)  
    let color0=`rgb(${redd}, ${bluee}, ${greenn})`
    console.log("generate botton was clicked")
    console.log(color0)
    let headingg=document.querySelector("#headingg")
    headingg.innerText=color0
    gc.style.backgroundColor=color0
    
}
*/

//we can also use addeventlistener for things other than button also like-text(p tag,h1-6 tags..) 
//we can use mouseenter event to any div,so that it will do the callback if mouse enters inside the div



//this in event listener

//we use console.dir for object printing and conole.log for normal printing and output

/*
let tb=document.querySelector("#btn2")
tb.addEventListener("click",function(){
    console.dir(this)
    console.dir(this.innerText)
    this.style.backgroundColor="blue"
}) 
*/


//pointerevent and mouse event objects
/*
let btn88=document.querySelector("#pme")
btn88.addEventListener("click",function(event){
    console.log(event)
    console.log("click event button clikced")})
btn88.addEventListener("dblclick",function(event){
    console.log(event)
    console.log("dbl event button clikced")})
*/


//keyboard event for addeventlistener
/*
let input55=document.querySelector("#inc")
input55.addEventListener("keypress",function(){
    console.log("key was pressed")
})
*/
/*
let input55=document.querySelector("#inc")
input55.addEventListener("keypress",function(event){
    console.log(event)
})
*/


//.key and .code of keyboard event
 /*
let input55=document.querySelector("#inc")
input55.addEventListener("keypress",function(event){
    console.log(event.key)
    console.log(event.code)
})
*/

//we can write a code so  that in input when arrow up is pressed,,then it output "up was pressed",similarly for all direction..,by using if else 


//form events
/*
let form4=document.querySelector("#form1")    //use event.preventDefault() to prevent redirect to any link in submitting the form
form4.addEventListener("submit",function(){
    console.log("form is submitted")
    alert("form is submitted")
})
*/

//extract from data
/*
let form5=document.querySelector("#form2")    //use event.preventDefault() to prevent redirect to any link in submitting the form
form5.addEventListener("submit",function(){
    console.dir(inc.value)
})
*/
/*
let form5=document.querySelector("#form2")    
    form5.addEventListener("submit",function(event){
        event.preventDefault()
        console.dir(in3.value)
        console.dir(form5.elements)
})
*/

//change event and input event
/*
let form76=document.querySelector("#in4")
form76.addEventListener("change",function() {
    console.log("change event")
    console.log("final value =",this.value)
})
form76.addEventListener("input",function() {
    console.log("input event")
    console.log("final value =",this.value)
})
*/

//making a text editor ,,what we enter in input,it will visible in below div also



//event bubbling
/*
let div0=document.querySelector("#div1");
let ul0=document.querySelector("#ul1");
let li0=document.querySelectorAll(".li1");

div0.addEventListener("click",function(){
    console.log("div was clicked");
})
ul0.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})
li0.forEach(function (li) {                //**imp
    li.addEventListener("click", function () { 
        console.log("li was clicked");
    });
});
*/

//we have to add event.stoppropagation(); to stop calling the parent while clicking using add event selector


//building todo with dom
/*

let but10=document.querySelector("#but2");
let ul10=document.querySelector("#ul2");
let in10=document.querySelector("#in2");



but10.addEventListener("click",function(){
    let item10=document.createElement("li");
    let del10=document.createElement("button");
    item10.innerText=in10.value;
    del10.innerText="delete";
    ul10.appendChild(item10);
    item10.appendChild(del10);
    in10.value="";
    del10.addEventListener("click",function(){
    ul10.removeChild(item10);              //functioning delete button
})
})
ul10.addEventListener("click",function(event){
    console.log(event.target);  
    console.log(event.target.nodeName);    //event delgation-adding chidren triggers code to parrent,so that parent apply to all childs
    console.log("button was clicked");
})
*/


//simon says game 

//giving type as button to lower divs
let simp10 = document.querySelector("#simonp");
let btns = ["greens", "purples", "reds", "blues"];
let btnss = document.querySelector(".btn76");
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
function gamestart() {
  if (started == false) {
    console.log("game started");
    started = true;
    levelup();
  }
}

document.addEventListener("click", gamestart);



function gameFlash(b) {
  b.classList.add("flash");
  setTimeout(function() {
    b.classList.remove("flash")
  }, 130);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function() {
    btn.classList.remove("userflash")
  }, 100);
}
function levelup() {
  userSeq = [];
  level++;
  simp10.innerText = `level ${level}`
  let randindex = Math.floor(Math.random() * 3);
  let randcolor = btns[randindex];
  let randbtns = document.querySelector(`.${randcolor}`);

  setTimeout(function() {
    gameFlash(randbtns);
    gameSeq.push(randcolor);
  }, 1000)
  console.log(gameSeq)
}
function btnPress() {

  let tb = this;
  userFlash(this);
  usercolor = tb.getAttribute("id");
  userSeq.push(usercolor)
  console.log(userSeq)
  checkans();

}
let allbtns = document.querySelectorAll(".btn76");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}
function checkans() {
  let indexc = userSeq.length - 1;
  console.log(userSeq[indexc])
  console.log(gameSeq[indexc])


  if (userSeq[indexc] !== gameSeq[indexc] || userSeq.length > gameSeq.length ) {
    simp10.innerText = `game over!    refresh or press any key  start again!!     your score was:  ${level-1}`

    document.addEventListener("keypress", function() {
      gameSeq = [];
      userSeq = []
      level = 0;
      levelup();
    });
  }

  if (userSeq[indexc] === gameSeq[indexc] && userSeq.length == gameSeq.length) { levelup() }
}


//call stacks-in a data stack,,last in will be out first

//visulaizing the call stack for the below code
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+two()
    console.log(`*${ans}`);
}
three();
//since in call stacking three() will be wipe out from the stack after giving the output,,there will cant access ans from outside in js

//breakpoints=when we want to run specific line only from our code to run in site,,we use breakpoints

//use  of breakpoint and step in in next function call,steo out current function call

//console also updates its output as we travel to next function calls


//js is a single threaded language=means it reads only one line at a time unlike c,c++

//but why js outputs both below setTimeout at once
setTimeout(function(){console.log("hey1")},2000);
setTimeout(function(){console.log("hey2")},2000);
//actually js is not outputting both at once,,js reads both set timeout one by one,,nad give it to browser ans then browser outputs them simultaneously,,bcz browser is coded in c++ which is multithreaded

//synchronous nature=lagatar run karte jaane one by one
//whereas in setTimeout it wait then run,,means its aynchronous,,,there js also have asynchronus nature


//callback hell
function changecolor(color,delay,nextcolorchange){
    setTimeout(()=>{
        apnac.style.color=color;
        if(nextcolorchange) nextcolorchange(); //*
    },delay);
}
changecolor("red",1000,()=>{
    changecolor("orange",1000);
})
//we can do infinite nesting in it


//storing things to database
function savetodb(data,success,failure){
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4){
        success();
    }
        else{
            failure();
        }
    
}
savetodb("apna college",()=>{console.log("success: your data is saved1");

    savetodb("data2",()=>{console.log("success2:data2 saved1")},()=>{console.log("failure:data 2 not saved1")})
},
()=>{console.log("failure: weak conneection.data not saved1");}
);

//promises="object" which represent result(success or failure) of an asynchronous operation,an its resulting value
//resolve(success) and reject(failure)

function savetodb2(data){
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            success("data was saved2");
        }
            else{
            failure("weak connection:(2");
            }
        
    }
)}
console.log(savetodb2("apna college"))

//we can also name success and failure as resolve and reject


//then() and catch() methods for fullfillment and rejection respectievly,, in promise object
function savetodb3(data){
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            success("data was saved3");
        }
            else{
            failure("weak connection:(3");
            }
        
    }
)}
savetodb3("apna college");

let request = savetodb3("apna college")
request.then(()=>{
    console.log("promise was resolved3")
})
.catch(()=>{
    console.log("promise was rejected3")
})

//promise chaining
function savetodb4(data){
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            success("data was saved4");
        }
            else{
            failure("weak connection:(4");
            }
        
    }
)}
savetodb4("apna college")
.then(()=>{
    console.log("data 1 saved4")
    return savetodb4("helloworld")

})
.then(()=>{
    console.log("data 2 saved4")
    return savetodb4("shradha")

})
.then(()=>{
    console.log("data 3 saved4")
})
.catch(()=>{
    console.log("promise was rejected4")
})
console.log(savetodb4("apna college"))


console.log("----------------------")

//results and errors in promises
function savetodb5(data){
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            success("data was saved5");
        }
            else{
            failure("weak connection:(5");
            }
        
    }
)}
savetodb5("apna college")
.then((result)=>{
    console.log("data 1 saved5")
    console.log("result of promise5:",result)

})
.then((result)=>{
    console.log("data 2 saved5")
    console.log("result of promise5:",result)
})
.then((result)=>{
    console.log("data 3 saved5")
    console.log("result of promise5:",result)
})
.catch((error)=>{
    console.log("promise was rejected5")
    console.log("error of promise:",error)

})
console.log(savetodb5("apna college"))
console.log("---------------------------------")


//refactoring old code
function changecolor2(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            apnac2.style.color=color;
            resolve("color changed6")
        },delay)
    })
}
changecolor2("red",1000)
.then(()=>{
    console.log("red color is completed")
    return changecolor2("orange",1000)
})
.then(()=>{
    console.log("orange color is completed")
    return changecolor2("green",1000)
})
.then(()=>{
    console.log("green color is completed")
    return changecolor2("blue",1000)
})
.then(()=>{
    console.log("blue color is completed")
})

//async fucntions -easier way for asynchronous functions (its a promise within in by default)
//async 
async function greet1(){
    return "hello world";
}
//throw-adding error jaan bujke
async function greet2(){
    return "u were hacked async :)"
}


greet2()
.then((result)=>{
    console.log("promise was resolved async")
    console.log("result was async:",result)
})
.catch((err)=>{
    console.log("promise was rejected with error async:",err)
})

//

let hello1=async ()=>{return 5;}
//await -pauses its surronding async funcitions until the promise get resolved/rejected

function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num =Math.floor(Math.random()*10)+1
            console.log(num)
            resolve()
        },1000)
    })
}
async function demo(){
    await getnum()
    await getnum()
    getnum()
}

//color changing with asnc await (easy)  
function changecolor3(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            apnac3.style.color=color;
            resolve("color changed6")
        },delay)
    })
}
async function color2(){
    await changecolor3("red",1000)
    await changecolor3("orange",1000)
    await changecolor3("green",1000)
    changecolor3("blue",1000)
}
color2();

//handling rejections with await 
function changecolor4(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            apnac4.style.color=color;
            resolve("color changed async 4")
        },delay)
    })
}
async function color3(){
    try{
        await changecolor4("red",1000)
        await changecolor4("orange",1000)
        await changecolor4("green",1000)
        changecolor4("blue",1000)
    }
catch(err){
    console.log("error caught")       //if any error comes from try then err will be printed
    console.log(err)
}
console.log("it will not be printed if catch get an error")
}
color3();


//api=like a waiter which takes order then go to kitchen and bring food to client/user

//api/web api-its a link which ,,to which we send request and it provides data in .json format

//software api=a api which connects two softwares


//many apis are free,, but some are paid or have password/key


//json code is similar js objects ,,but are much more comple..json is  read by machine



//json=javascipt object notation ,,used for every langauge's apis
//xml=extensible markup language ,,old languege for api data ,,but now json used everyplace

//json =key(strings) value pairs or objects
//value injson cant be undefined

let jsonres0='{"hi":24}'
console.log(JSON.parse(jsonres0).hi)
//or
let jsonres00=JSON.parse(jsonres0)
console.log(jsonres00.hi)


//parsing/converting json to js objects  .parse()
//and js objects to json    .stringify()

let sttrr1={
    he:"Avi"
}
console.log(JSON.stringify(sttrr1))

//api testing tools-hoppscotch.io,postman

//https://dog.ceo/api/breeds/image/random

//ajax/ajaj=asynchronous javascript and xml(json)

//http verbs=get,post(upload),delete....etc




//status code=
//100+=informational
//200+=successful
//300+=redirectional
//400+=client error
//500+=server error

//200=ok
//404=not found(client error)
//400=bad request(client error)
//500=internal server error .....and much much more



//adding information in urls ,,www.google.com/search?q=harry+porter

//?name=shradha&marks=95      ,using more than one key

//api routes:    https://api.potterdb.com/v1/movies  this link has many api routes
//check on happscotch

//   sdhb/cdkhbsd/:id  ,,here id means its a variable ,,we have to enter any id of movie (in this case) to run the api




//when we add a invalid key value with a valid key value in link then,,,invalid one get reaplced
//like =   countryiesuniversities/?name=nigeria&state=delhi     ,,here it will search for nigeria universities only bcz this site doesnot have content for states and delhi



//http headers(sending information with headers)
 
//headers option in inspect

//use of header on hoppscotch-header name(like accept) and resonse type(text/plain or application.josn etc)




//our first api request
//fetch(url) or in past with xml http request object,,if we paste it in console then it gives us a promise ,,with output as response

let url0="https://catfact.ninja/fact"

fetch(url0)
.then((response)=>{
    console.log(response)
    response.json().then((data)=>{
        console.log(data.fact)
    });
})
.catch((err)=>{
    console.log("ERROR---",err)
})


console.log(fetch(url0))

//asynchronous means eksaath bohot saari cheeze chalti,,and we dont have to wait for until previous code works,,here jo run hota jaayega wo print hota jaaega ,,jo pehle run hua wo pehle print hoga


//using fetch with async and await
async function getfacts(){
    try{
        let resp=await fetch(url0)
        let data=await resp.json()
        console.log(data.fact)
    }
    catch(e){
        console.log("error-",e)
    }
    console.log("bye")
}


//axios=similar as fetch but better thing,,used to call http request,,
//fetch needs to parse for js object output 
//but axios by default gives js objects
let bbtnn=document.querySelector("#factb")

bbtnn.addEventListener("click",async()=>{
    let fact =await getfacts2()
    let p=document.querySelector("#factp")
    p.innerText=fact;
})
async function getfacts2(){
    try{
        let res=await axios.get(url0)
        return res.data.fact
    }
    catch(e){
        console.group("error--",e)
        return "no fact found"
    }

}

//for dog image api
let url1="https://dog.ceo/api/breeds/image/random"
let bbtnn1=document.querySelector("#factb1")

bbtnn1.addEventListener("click",async()=>{
    let link =await getimage()
    let img=document.querySelector("#factp1")
    img.setAttribute("src",link)
})
async function getimage(){
    try{
        let res=await axios.get(url1)
        return res.data.message
    }
    catch(e){
        console.group("error--",e)
        return "/"
    }

}

//sending headers with axios
let url2="https://icanhazdadjoke.com/"
async function getjokes(){
    try{
        const header={headers:{accept:"application/json"}}  // giving the second argumrnt as appliaction/json in axios taken response in json rather than html,,if we dont write the second argumeant then it will give html data
        let res=await axios.get(url2,header)
        return res.data
    }
    catch(e){
        console.group("error--",e)
    }

}

//updating query strings 
let url3="http://universities.hipolabs.com/search?name="
let bbtnn2=document.querySelector("#btnc")

bbtnn2.addEventListener("click",async ()=>{
    let country=document.querySelector("#inputc").value
    console.log(country)
    let colarr=await getcollges(country)
    show(colarr)
})
function show(colarr){
    let list =document.querySelector("#listc")
    list.innerText=""
    for(col of colarr){
        console.log(col.name)
        let li=document.createElement("li")   //imp for loop
        li.innerText=col.name
        list.appendChild(li)
    }
}
async function getcollges(country){
    try{
        let res=await axios.get(url3+country)
        return res.data
    }
    catch(e){
        console.log("error:",e)
        return []
    }
}