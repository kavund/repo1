class Animal {
    constructor(name, age = "age is not defined") {
        this.animalName = name
        this.animalAge = age
    }

    walk(){
        console.log(`${this.animalName} is walking`)
    }
    talk(){
        console.log(`${this.animalName} is talking`)
    }
}

const duck = new Animal("Scrudge", 5)
const cat = new Animal("Tom")
console.log(duck.animalName)
console.log(cat)
console.log(duck)
duck.animalName = "random"
console.log(duck)