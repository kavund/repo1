function createCounter() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
  }
  
  // Приклад використання:
  let counter = createCounter();
  console.log(counter()); // Виведе 1
  console.log(counter()); // Виведе 2
  console.log(counter()); // Виведе 3