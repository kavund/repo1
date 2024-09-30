// // const user = {
// //     age: 22,
// //     name: "Joe",
// //     isStudent: false
// // }
// // console.log(user)

// // function User (name, age, isStudent){  // це використовувалось коли в js не було класів
// //     this.name = name 
// //     this.age = age
// //     this.isStudent = isStudent
// // }

// // const user2 = new User ("Peter", 21, true)
// // console.log(user2)

// // const property = 'name'

// const user = {
//         age: 22,
//         name: {
//             firstName: "Joe",
//             lastName: "Kavun"
//         },
//         isStudent: false,
//         'is married': true
//     }
// // console.log(user.name.firstName)
// // console.log(user.name.lastName)
// // console.log(user.age)
// // console.log(user['age'])
// console.log(user['is married'])
//             // user['name']
// // console.log(user[property])
// console.log(user)

// user.age = 45
// // user.name = `${user.name.firstName} ${user.name.lastName}`
// user.name.lastName = "Gator"
// user.hasChildren = false

// console.log(user)

// delete user['is married']
// delete user.age

// console.log(user)

const brand = "Audi"
const model = "A6"

// const car = {           // довгий запис
//     brand: brand,
//     model: model,
// }

const car = {          // короткий запис
    brand,
    model,
}
