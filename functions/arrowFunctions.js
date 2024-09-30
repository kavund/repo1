// const calcArea(width, height) =>{
//     return width * height
// }


// const calcArea = (width, height) => {
//     return widht * height
// }

// const calcArea = (width, height) => widht * height

const user = {
    name: "Alice",
    printName: () =>{
        console.log(this.name)     // не буде працювати (undefined)
    }

    // printName: function (){
    //     console.log(this.name)      // буде працювати
    // }
}

const user2 = {
    name: "Joe",
    printName: function (){
        user.printName()
    }
}

user2.printName()