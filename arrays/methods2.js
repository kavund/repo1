// const numbers = [1, 2, 3, 4, 5];
// // const cb = (value, index) => {
// //     console.log(value, index)
// // };
// // numbers.forEach(cb);

// numbers.forEach((value, index) => {
//     console.log(value, index)
// })


// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers)


// const users = [
//     {
//         name: "Joe",
//         age: 12
//     },
//     {
//         name: "Alice",
//         age: 22
//     },
//     {
//         name: "Peter",
//         age: 30
//     }
// ]

// const adultUsers = users.filter((user) => user.age >= 18)
// console.log(adultUsers)
// const joe = users.find((user) => user.name === "Joe");
// console.log(joe)
// const unknown = users.find((user) => user.name === "ololo");
// console.log(unknown)


// const fruits = ["apple", "banana", "orange"]
// const upperFruits = fruits.map((fruit) => fruit.toUpperCase())
// console.log(upperFruits)


// const fruits = ['banana', 'apple', "Apple", 'orange', 'grape'];
// fruits.sort();
// console.log(fruits)


const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, number) => {
//     acc  = acc + number
//     return acc
// })

const sum = numbers.reduce((acc, number) => acc + number, 10)
console.log(sum)