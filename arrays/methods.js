// const sentence = "Це речення має кілька слів";
// const words = sentence.split(" ");
// console.log(words);

// const newSentence = words.join(" ")
// console.log(newSentence);

// const numbers = [10, 20, 30, 40, 50];
// // const index = numbers.indexOf(30);
// // const index = numbers.indexOf("30");
// // console.log(index)

// const hasTwenty = numbers.includes(20)
// console.log(hasTwenty)

// const stack = [1, 2, 3];
// stack.push(3, 5, 6);
// // console.log(stack);

// // const lastEl = stack.pop()
// // console.log(lastEl)
// // console.log(stack)


// // const firstEl = stack.shift()
// // console.log(firstEl)
// // console.log(stack)

// stack.unshift(9)
// console.log(stack)


// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const arr3 = arr2.concat([]) -- copy array

// const arr3 = arr2.concat(arr1)
// console.log(arr3)


// slice
// const numbers = [1, 2, 3, 4, 5];
// // const slicedArray = numbers.slice(0, 3) // не включає третє значення
// // console.log(slicedArray)
// // const slicedArray = numbers.slice(1) // від 1 до кінця
// // console.log(slicedArray)
// const slicedArray = numbers.slice() // copy array
// console.log(slicedArray)

// splice
const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 0, "жовтий", "оранжевий");
// colors.splice(1, 1);
colors.splice(2, 1, "orange")
console.log(colors);
