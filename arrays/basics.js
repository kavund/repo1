const age = 18;
const list = [1,2, "Qalox", true, {name: "Alice"}, ["Joe", "Peter", ["Hell"]]]

// console.log(list[1])
// console.log(list[list.length - 1])

console.log(list[list.length - 1][1]) // доступ до індексу в масиві

// console.log(list[list.length - 2].name) 

console.log(list[list.length - 1][2][0])



// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits)
// fruits[0] = "raspberry"
// console.log(fruits)

const fruits = [['apple', 'banana', 'orange'], ['apple', 'banana', 'orange']];
console.log(fruits)
fruits[1][1] = "raspberry"
console.log(fruits)
fruits[1] = ["blackberry", "pear"]
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0].length)