// // function declaration
// function calcSum(num1, num2){
//     return num1 + num2
// }
// // console.log(calcSum(1, 2))


// // function expression
// const calcSum2 = function (num1, num2){
//     return num1 + num2
// }
// // console.log(calcSum2(2, 3))


// // arrow function
// const calcSumArrow = (num1, num2) => {
//     return num1 + num2
// }


// // precise arrow function
// const calcSumPreciseArrow = (num1, num2) => num1 + num2
// console.log(calcSumArrow(1, 2))
// console.log(calcSumPreciseArrow(2, 2))


// console.log(calcSumDeclaration(2, 2)) // хоіститься лише function Declaration

// function calcSumDeclaration(num1, num2){
//     return num1 + num2
// }

// calcSumDeclaration(1, 2) //  Cannot access 'calcSumExpression' before initialization

// const calcSumExpression = function (num1, num2){
//     return num1 + num2
// }

const user = {
    name: "Alice",
    age: 18,
    printName: function (){
        console.log(`Hello i am ${this.name}, i am ${this.age} y. o.`)
    }
}

user.printName()