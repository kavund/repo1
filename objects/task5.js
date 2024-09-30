let users = [
    { name: "John", email: "jomailex@mail.com", age: 30 },
    { name: "Jane", email: "janemailex@mail.com", age: 25 },
    { name: "Mike", email: "mikemailex@mail.com", age: 40 }
]

for (const user of users){
    console.log(user)
}
for (const {name, email, age} of users){
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`)
}