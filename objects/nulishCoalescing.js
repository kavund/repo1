// // console.log(false || 1)
// // console.log("false" || 1)
// // console.log(true || 1)
// // console.log(0 || 1)
// // якщо перший приводиться у булевому визначенні як true то повертається перший аргумент, у всіх інших випадках другий
// // console.log(null || 1)
// // console.log(null ?? 1)

// // console.log(0 || 1)
// // console.log(0 ?? 1)
// // оператор ?? (об'єднання з null) повертає перший аргумент якщо він не null/undefined, якщо перший null/undefined то повернеться другий 

// const car = { 
//     brand: "Audi",     
//     model: "A6",
// }

// const car2 = { 
//     brand: "Renault",     
// }


// const cars = [car, car2]
// for (const carItem of cars){
//     const model = carItem.model ?? "Unknown model"
//     console.log(model)
// }

const defaultUserName = "Anonymous"

const user = {
    name: "Stanislav",
}

console.log(user.username ?? defaultUserName)