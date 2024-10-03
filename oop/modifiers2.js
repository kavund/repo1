Math.PI

class myMath {
    constructor(){
        this.message = "Available from instances only"
    }
    static PI = 3.14

    static sum(num1, num2){
        return num1 + num2
    }
}

// console.log(Math.PI)
// console.log(myMath.PI)
// console.log(myMath.sum(2,4))
// const myMathInstance = new myMath()
// // console.log(myMathInstance.sum(2,5))
// console.log(myMathInstance)
// console.log(myMathInstance.PI)  // undefined

// console.log(myMath.message) // undefined

class TimeUtils {
    static formatDate(){
        return date.toGMTString()
    }
}

const date = new Date()
const formattedDate = TimeUtils.formatDate(date)
console.log(date)
console.log(formattedDate)