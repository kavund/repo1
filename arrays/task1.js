const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let number of numbers){
    if(number > 0){
        positiveCount++
    } else if (number === 0){
        zeroCount++
    } else if (number < 0){
        negativeCount++
    }
}
console.log("Кількість позитивних чисел:", positiveCount)
console.log("Кількість негативних чисел:", negativeCount)
console.log("Кількість нульових чисел:", zeroCount)

// console.log("Positive Count = ", positiveCount);
// console.log("Negative Count = ", negativeCount);
// console.log("Zero Count =", zeroCount);

// for (const number of numbers){
//     console.log(number)
// }


// for (let i = 0; i < 10; i++){
//     if(i % 2 !== 0){
//         continue
//     } 

//     console.log(`Index: ${i}`)

// }