// function a() { //fn definition/declration
//     console.log("I am a function");
// }
// //function body is called function statement/ defination...............
// //function statments support hoisting, i.e calling the function even before  declaration the function...

// //b();


// var b = function() { //this is a function expression/anonymous fn
//         console.log("I am function B");
//     }
//     // since here this is a anonymous, it can't support hoisting function expressions don't support hoisting.         
// console.log(b);
// // A function expression is a unnamed function assigned to the variable the variable receives the function definition which in turn can call the function by calling the variable now.{a()}

// {
//     let d = function() {
//         console.log("This is in abc")
//     }
//     d(); //gives the output
// }
// //d();//will throw not defined error as not in the scope
// //the fn can only be called inside the scope and not outside the scope

// //arrow function // declared in ESG

// let f = () => {
//     console.log("I am a function f")
// }
// f();

// //First Class Functions - The functions can be passed as values into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.


// //Higher Order functions(HDF) - The functions which accept the FCF's or return them are called as Higher Order Functions
// let g = function(paran) { //HDF
//     // console.log("I am a function g");
//     console.log(paran);

// }

// function h() { //fcf
//     console.log("I am a function h");
// }

// g(); // h function passed as an argument

// let i = function() {
//     return function j() {
//         console.log("I am a function j");
//     }
// }
// let returnVal = i();
// console.log("returnVal");
// i();
// //console.log(i());

// setTimeout(() {
//     console.log("He I am inside a callback function");
// }, 4000);

const sayHi = (nameofFreined) => {
    console.log("Hello", nameofFreined);
}

const greeting = (friend, callBackFUnction) => {
    callBackFUnction(friend);
}

greeting("Bala", sayHi);

//function sayHi(arg3){//arg3=Bala
// log("hello",arg3)//hello Bala
// }

//function greeting(arg1, arg2){//HOF
// arg1 = "Bala",
// arg2 = sayHi,
// arg2(Bala); => sayHi(Bala);//calling a function
// }

// greeting("Bala",sayHi)