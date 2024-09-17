// function fog(){
//     if(true){
//         var age = 19
//         console.log(age)
//     }

//     console.log(age)
// }

// fog()


function makeCounter(){
    let i = 0
    return function (){
        i += 2
        console.log(i)
    }
}

const counter = makeCounter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()

console.log("break")

const counter2 = makeCounter()
counter2()
counter()
counter()
counter()
counter2()
counter2()
