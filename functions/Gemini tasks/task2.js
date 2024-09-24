// Завдання 2: Створення таймера
// Мета: Створити функцію, яка повертає іншу функцію - таймер. 
// Кожен виклик поверненої функції повинен виводити в консоль поточний час і збільшувати інтервал між викликами.


function createTimer() {
    let interval = 1000;
    return function(){
        console.log(new Date())
        interval *= 2
    }
}

// Приклад використання:
let timer = createTimer();
timer(); // Виведе поточний час
setTimeout(timer, 2000); // Виведе поточний час через 2 секунди
setTimeout(timer, 4000); // Виведе поточний час через 4 секунди після попереднього

