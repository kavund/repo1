// console.log("Before Loop")

// for (let i = 0; i < 10; i++){
//     console.log(`Index: ${i}`)
//     if(i === 5){
//         throw new Error("Index should not be equal to 5 ever")
//     } 
// }

// console.log("After loop")



console.log("Before Loop")

try {

    for (let i = 0; i < 10; i++) {
        console.log(`Index: ${i}`)
        if(i === 5){
        // throw new Error("Index should not be equal to 5 ever")
        } 
    }
}catch (err) {
    console.log(err.message)
}finally {
    console.log("From Finally")
}



console.log("After loop")