//let variable = argumentOfFunction => returnValue

//Normal Functions => Arrow Functions (PREDEFINED)
    //1. remove function keyword
    //2. let VARIABLE =
    //3. remove return & brackets
    //4. replace argument/funtion with ()
    //5. add returnValue after =>

//function w/ 2 parameter
// function sum(a,b){               //NORMAL FUNCTION SYNTAX
//     return a+b
// }

// let sum2 = (a,b) => a+b          //ARROW
    

// //function w/ 1 parameter
// function isPositive(number){            //NORMAL FUNCTION SYNTAX
//     return number>=0
// }

// let isPositive2 = number => number>=0    //ARROW


// //function w/ no parameters
// function randomNumber() {               //NORMAL FUNCTION SYNTAX
//     return Math.random;
// }

// let randomNumber2 = () => Math.random   // () = no functions go intoit

// //anonymous function
// document.addEventListener('click', function(){      //NORMAL FUNCTION SYNTAX
//     console.log('Click')
// })

// document.addEventListener('click', () => console.log('Click'))




// //PERSON CLASS SAMPLE-----------------------2 Functions: printNameArrow & printNameFunction-------------------------------------------------
// class Person{
//     constructor(name){
//         this.name = name  //not defined in a gobal scope(STANDARD FUNCTION SYNTAX)
//     }
// }
// //Arrow  -  () =>  
// printNameArrow() {
//     setTimeout(() => {  //method calls a function after a number of milliseconds. 1 second = 1000 milliseconds
//         console.log('Arrow: ' + this.name)      //arrow=
//     }, 100)    //100millisecond
// }
// //STANDARD FUNCTION SYNTAX -  function()
// printNameFunction() {
//     setTimeout(function() {  //method calls a function after a number of milliseconds. 1 second = 1000 milliseconds
//         console.log('Function: ' + this.name)   //function- needs global
//     }, 100)    //100millisecond
// }

// //Person object/instance
// let person = new Person('Wei Wuxian')
// person.printNameArrow()
// person.printNameFunction()