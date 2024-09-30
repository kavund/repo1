// Завдання 4: Додавання та видалення властивостей
//     • Створіть об'єкт person з такими властивостями:
//     • firstName: рядок, представляє ім'я особи.
//     • lastName: рядок, представляє прізвище особи.
//     • age: число, представляє вік особи.
//     • Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
//     • Видаліть властивість age з об'єкта person.
//     • Виведіть оновлений об'єкт person в консоль.

let person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 23
}
person.email = "example@mail.com"
console.log(person)
delete person.age
console.log(person)