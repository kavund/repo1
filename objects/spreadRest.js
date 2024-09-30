// const user = {
//     age: 22,
//     name: "Joe",
//     isStudent: false
// }

// const user2 = {
//     ...user
// }
// console.log(user)
// console.log(user2)

// const user = {
//     age: 22,
//     name: {firstName:"Joe"},
//     isStudent: false
// }

// const user2 = {
//     ...user,
//     name: {
//         ...user.name
//     }
// }
// user2.name.firstName = "Joel"
// console.log(user)
// console.log(user2)

// const user3 = structuredClone(user)
// user3.age = 34

// console.log(user)
// console.log(user3)

// const car = {
//     brand: "Audi",
//     model: "A3",
//     year: 2020
// }

// const car2 = {
//     ...car,
//     year: 2021
// }

// console.log(car)
// console.log(car2)


const greet = (name, ...args) =>{
    console.log(name)
    console.log(args)
}

greet("Stas", 1, true)