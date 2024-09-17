// console.log("Before Function declaration")


//                    // (parameters)
// function calculateSum(num1, num2){
//     const sum = num1 + num2
//     console.log("Sum: ", sum)
// }
// console.log("After Function declaration")

// console.log("Before Function call")
//            // (arguments)
// calculateSum(2, 3)
// calculateSum(2, 2)
// calculateSum(345, 28)
// console.log("After Function call")


function printHello(){
    console.log("Hello suka js")
}
printHello()



function calculateSum(num1, num2){
        const sum = num1 + num2
        return sum
    }
    const sumTest = calculateSum(2, 4)
    console.log(sumTest)