// const user = {
//     age: 22,
//     name: "Joe",
//     isStudent: false
// }

const users = {
    user1 : {
        age: 22,
        name: "Joe",
        isStudent: false
    },
    user2 : {
        age: 25,
        name: "Alice",
        isStudent: true
    }
}


/*
for (const userKey in user){
    console.log(userKey, user[userKey])
}
*/

// console.log(Object.keys(users))
// console.log(Object.values(users))

// for (const user of Object.values(users)){
//     console.log(user.name)
// }

// console.log(Object.entries(users))
// _______________________________________

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
// // console.log(dog);// {name: 'Манго'}
// // console.log(dog.name);// 'Манго'
// // console.log(dog.legs);// 4

// console.log("in", "legs" in dog)
// console.log("hasOwnProperty", Object.hasOwnProperty("legs"))
// console.log("hasOwnProperty", Object.hasOwnProperty("name"))

const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 40 }
    ];
people.push({ name: "Anna", age: 28 });

console.log(people[3]); 