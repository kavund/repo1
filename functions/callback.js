
// function foo(cb){  // cb = callback
//     console.log("Before Callback")
//     cb()
//     console.log("After Callback")
// }

// function sayHello(){
//     console.log("Hello")
// }

// foo(sayHello)
// console.log("---------------------")
// foo(function (){
//     console.log("Hiii")
// })


function getCardType(cardNumber){
    switch (true){
        case cardNumber.startsWith('4111'):
            return "Visa"
        case cardNumber.startsWith('5555') && cardNumber.endsWith('4444'):
            return "MasterCard"
        default:
            throw new Error("Unknown card provider")
            
    }
}


function processPayment(cb){
    console.log("Before Process")
    cb()
}

const processVisa = ()=> console.log("Processing Visa Payment")
const processMasterCard = ()=> console.log("Processing MasterCard Payment")

function process(cardNumber){
    if(getCardType(cardNumber) === "Visa"){
        processPayment(processVisa)
    }else if (getCardType(cardNumber) === "MasterCard"){
        processPayment(processMasterCard)
    }
}

const cardNumber = "4111 4455 5555 4449"
const cardNumber2 = "5555 4455 5555 4444"

process(cardNumber)
process(cardNumber2)

