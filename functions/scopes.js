
const name = "Peter"

function printName(){
    const age = 22
    const name = "Alice"

    if(age > 20){
        const isAdult = true
        console.log("isAdult", isAdult)
        console.log(age)

        const name = "Joe"
        console.log(name)
    }

    // console.log("Inside ", name)
    // console.log("Inside", age)
}

// console.log("Outside ", name)

printName()