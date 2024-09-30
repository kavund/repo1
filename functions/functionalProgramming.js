// const arr = [1,2,3,4,5]

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum  += arr[i]
// }



// const arr = [1,2,3,4,5]

// const sum = arr.reduce((acc, item)=>acc + item)
// console.log(sum)




const a = 6
let b = 2

const calculateSum = () =>{
    console.log(a+b)
}

calculateSum()
b = 6
calculateSum()

// брудна функція, змінні оголошені глобально 

// const a = 6
// let b = 2

// const calculateSum = (a, b) =>{
//     console.log(a+b)
// }

// calculateSum(a, b)
// b = 6
// calculateSum(a, b)

// чиста функція 
