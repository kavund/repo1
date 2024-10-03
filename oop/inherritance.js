// // Створення об'єкта "прототипу"
// const animalPrototype = {
//     speak() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// };
//     // Створення об'єкта, який успадковує прототип
// const dog = {
//     name: "Dog",
//     sound: "Woof"
// };
// dog.__proto__ = animalPrototype;
//     // Виклик методу від успадкованого прототипу
// dog.speak(); // Dog says Woof
    
class Animal {
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }
    speak() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

class Dog extends Animal {
    constructor(name){
        super(name, "Woof")
    }
}

const myDog = new Dog("Duke")
myDog.speak()

class Cat extends Animal {
    constructor(name){
        super(name, "Meow")
    }
}

const myCat = new Cat("Lisa")
myCat.speak()

class WildCat extends Cat{
    constructor(name){
        super(name)
    }
    speak(){
        console.log("rrrrrr")
    }
}

const wildCat = new WildCat()
wildCat.speak()