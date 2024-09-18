// const user = {
//     name: "Alice",
//     printName: function (){
//         console.log(this.name)
//     }
// }

// const user2 = {
//     name: "Joe"
// }

// user.printName()
// user.printName.call(user2)  



// function foo(){
//     console.log(Array.from(arguments))
// }

// foo (1,2,3)


const bar = (num1, num2, ...rest) =>{
    console.log(num1, num2)
    console.log(rest)
}

bar (1,2,3, "Hello", true)