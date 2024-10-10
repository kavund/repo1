// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const BASE_URL = "https://jsonplaceholder.typicode.com/"
// // fetch(url)
// // .then((response)=>response.json())
// // .then((jsonBody)=>console.log(jsonBody))


// async function fetchTodoByIdPromise(id) {
//     return fetch(`${BASE_URL}todos/${id}`)
//         .then((response)=> response.json())
// }

// async function fetchTodoByIdAsync(id) {
//     const response = await fetch(`${BASE_URL}todos/${id}`)
//     const jsonBody = await response.json()
//     return jsonBody
// }

// fetchTodoByIdPromise(1).then((value)=>console.log(value))
// fetchTodoByIdAsync(1).then((value)=>console.log(value))

const createPost = async ()=> {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
}

const createPostBody = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}
// createPost(createPostBody).then((value)=> console.log(value))

console.log(createPostBody)
const stringified = JSON.stringify(createPostBody)
console.log(stringified)
console.log(typeof stringified)
const parsed = JSON.parse(stringified)
console.log(parsed)
console.log(typeof parsed)