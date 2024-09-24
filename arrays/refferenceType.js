// value tyoe
let a = 12

let b = a 

// a = 25

// console.log("a", a)
// console.log("b", b)

// refferenceType

// const array1 = ["Hello", "World"]
// const array2 = array1

// console.log("Array1", array1)
// console.log("Array2", array2)

// array1[1] = "JS"
// console.log('----------------------')
// console.log("Array1", array1)
// console.log("Array2", array2)


// const age = 25; 
// function foo(userAge){
//     userAge = 12;
//     console.log("Inside function", userAge);
// }

// foo(age);
// console.log("Outside", age);



const ageList = [25, 34, 32] 
// function foo(ages){
//     ages[0] = 18;
//     console.log("Inside function", ages);
// }
// console.log("Outside before", ageList);
// foo(ageList);
// console.log("Outside after", ageList);

function foo(ages){
    // const agesList = Array.from(ages) - копіювання масиву
    const agesList = [...ages]
    agesList[0] = 18
    console.log("Inside function", agesList);
}

console.log("Outside before", ageList);
foo(ageList);
console.log("Outside after", ageList);
