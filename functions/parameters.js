// function printGreeting(name = "Anonymous"){
//     console.log(`Hello ${name}!`)
// }

// printGreeting("Joe")
// printGreeting("Alice")
// printGreeting()


function calcSum(){
    // console.log(arguments)
    const args = Array.from(arguments)
    // console.log(args)

    let sum = 0
    for (let i = 0; i < args.length; i++){
        sum = sum + args[i]
    }
    return sum
}

 // calcSum()
console.log(calcSum(1, 2, 4, 5))