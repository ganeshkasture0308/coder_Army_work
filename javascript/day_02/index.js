//how to build a variable

// first way

// let name="Ganesh";
// let age=22;
// age=30;
// console.log(name,age);

// second way

// const account=1234;
// console.log(account);


// third way (the older one we dont use this now because it has many problems)

// var a =10;
// var a =20;
// console.log(a);

// data types

// primitive data type
// number,string,boolean,undefined,null,bigint,symbol

// number
// let a=10;
// let b=2.5;
// console.log(typeof a,b)
// console.log(a,b);

// string
// let c="MERN stack developer";
// let d="Coding Skill";
// console.log(c,d);

// boolean
// let login=true;
// let f=false;
// console.log(login,f);

// undefined
// let user;
// console.log(user);

// bigint
// let number=1234566885n;
// console.log(number);


// null
// let weather=null;
// console.log(weather);

// symbol
// const id1=Symbol("id");
// console.log(id1);

// non-primitive data type
// array,object,function


// array
// let arr=[10,20,11,"Ganesh",true];
// console.log(arr);
// arr.push(5);
// console.log(arr);


// object
// let user={
//     name:"Ganesh",
//     account:12345,
//     age:21,
//     gender:"male"
// }
// console.log(user)


// function
// function add(){
//     console.log("Hello World!!!")
// }
// add();


// function in the javascript are stored in the variable too.
// let a=function add(){
//     console.log("Hello World!!!")
// }
// console.log(a());


// how to check type of that primitive data type:
// ex1
// let g=10;
// let m=20.34;
// console.log(typeof g);
// console.log(typeof m);


// ex2
// let name="ganesh";
// console.log(typeof name);

// ex2 the legacy bug of null
// let account_no=null;
// console.log(typeof account_no);


// how to check type of non-primitive data types:
// ex1
// object:-
// let student={
//     name:"ganesh",
//     age:21,
//     mobile_no:123456

// }
// console.log(typeof student)

// ex2:-
// array:-

// let a=[1,2,3,4,5,"OMKAR"]
// console.log(typeof a)

// ex3:-
// function:-
// let s=function greet(){
//     console.log("hello world!!!");
// }
// console.log(typeof s)



// primitive data type is immutable
// example:-
// let a=10;
// a=20;
// let str="Ganesh";
// str="omkar";
// console.log(str[0]);


// Non-primitive data type is mutable
// example:-
// let arr=[10,20,30,40];
// arr.push(90);
// arr[0]=70;
// console.log(arr);
// console.log(typeof arr);

// example:-
// let obj={
//     name:"ganesh",
//     age:21,
//     account_no:45676756
// }
// obj.name="rohit";
// console.log(obj);

// Pass by value (primitive data types):-

// let a=10;
// let b=a;
// b=20;
// console.log(a,b);


// pass by reference(non-primitive data types):-

// let obj={
//     name:"Rohan",
//     age:21,
//     mobile_no:9845635645
// }
// let obj2=obj;
// obj.name="Ganesh";
// console.log(obj);