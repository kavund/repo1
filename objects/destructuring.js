// const person = {
//     name: "John",
//     age: 30,
//     gender: "male"
//     };

// const {name : fullname, age, gender, isMarried = false} = person

// // console.log(person.name)
// // console.log(fullname)
// // console.log(age)
// // console.log(gender)
// console.log(isMarried)


// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
// ];

// for (const { name, age } of people) {
// console.log(`${name} is ${age} years old`);
// }

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//     city: "New York",
//     country: "USA"
//     }
// };


// const { name, address: { city, country } } = person;
// console.log(name); 
// console.log(city); 
// console.log(country); 
    

// const numbers = [1, 2, 3]
// const [first, second, ololo] = numbers
// console.log(first, second, ololo)

const numbers = [1, 2, 3]
const [first, ,third] = numbers
console.log(first)
console.log(third)