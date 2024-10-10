const assert = require('node:assert');
// const  promise = new Promise((resolve, reject)=>reject("Error smth bad"))
// promise
//     .then((value)=>{
//     console.log("value: ", value)
// })
//     .catch((reason)=>{
//         console.log("reason: ", reason)
//     })
//     .finally(()=>{
//         console.log("Finally block")
//     })


// const promise1 = Promise.resolve("Проміс1");
// const promise2 = Promise.resolve("Проміс2");

// Promise.all([promise1, promise2]).then((values)=>console.log(values))

// function foo1(){
//     return Promise.resolve("Проміс1");
// }

// function foo2(){
//     return Promise.reject("Проміс2");
// }

// foo1().then((value)=>console.log(value)) // послідовно
// foo2().then((value)=>console.log(value))

// Promise.all([foo1(), foo2()])
//     .then((values)=>console.log(values)) //promise all дозволяє викликати всі одночасно
//     .catch((reason)=>{
//         console.log("reason: ", reason)
//     })


// Promise.allSettled([foo1(), foo2()])
//     .then((values)=>console.log(values)) 
//     // .catch((reason)=>{
//     //     console.log("reason: ", reason)
//     // })


// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Проміс 1"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Проміс 2"), 1500));
// Promise.race([promise1, promise2])
// .then((result) => {
// console.log("значення з промісів:", result);
// })
// .catch((error) => {
// console.error("Помилка:", error);
// });


// console.log("Before promise")

// Promise.race([promise1, promise2])
//     .then((result) => {
//         console.log("значення з промісів:", result);
//     })
//     .catch((error) => {
//         console.error("Помилка:", error);
//     });

// console.log("After promise")

const fetchUserPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ]);
        }, 1500);
    });
};
// let actualValues
// fetchUserPosts().then((values)=>{
//     actualValues = values;
// })

// console.log(actualValues)

async function test(){
    const userPosts = await fetchUserPosts()
    console.log(userPosts)
}

test()