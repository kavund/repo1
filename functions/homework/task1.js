// function declaration

function calcSquare(widht, height){
    return widht * height;
}
console.log(`Function declaration result ${calcSquare(5, 10)}`)

// function expression

const calcSquare2 = function (widht, height){
    return widht * height
}
console.log(`Function expression result ${calcSquare2(7, 8)}`)

// arrow function

const calcSquare3 = (widht, height) => {
    return widht * height
}
console.log(`Arrow function result ${calcSquare2(3, 9)}`)