let firstArray = [12, "Orange"]
let secondArray = ["Apple", "Grapes", 15]
firstArray.push(...secondArray);
console.log(firstArray)

// let combinedArray = firstArray.concat(secondArray); // Метод concat
// let combinedArray = [...firstArray, ...secondArray]; // Оператор розширення в літералі масиву