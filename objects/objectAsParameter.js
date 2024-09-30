function printUserInfo(name, age, gender, occupation, hasChildreb, isMarried, isStudent) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender: ${gender}`);
    console.log(`Occupation: ${occupation}`);
}

printUserInfo("John", 30, "male", "developer")
console.log("------------------------")

const person ={
    name: "Joe",
    age: 22,
    gender: "male",
    occupation: "worker"
}

function printUserInfo2({name, age, gender, occupation}) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender: ${gender}`);
    console.log(`Occupation: ${occupation}`);
}

printUserInfo2(person)
console.log("------------------------")
function printUserInfo3(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Gender: ${user.gender}`);
    console.log(`Occupation: ${user.occupation}`);
}

printUserInfo3(person)
console.log("------------------------")