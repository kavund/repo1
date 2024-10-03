// class BankAccount {
//     constructor(balance) {
//         this.balance = balance;
//     }
  
//     getBalance() {
//         return this.balance;
//     }
// }
    
// const myAccount = new BankAccount(22000)
// console.log(myAccount.balance)
// console.log(myAccount.getBalance())

// class BankAccount {
//     #balance

//     constructor(balance) {
//         this.#balance = balance;
//     }
  
//     #getBalance(){
//         return this.#balance;
//     }
    
//     printBalance(){
//         console.log(`This balance is ${this.#getBalance()}`)
//     }

    // getBalance() {
    //     return this.#balance;
    // }
// }
    
// const myAccount = new BankAccount(22000)
// // console.log(myAccount.balance)
// // console.log(myAccount.getBalance())
// // console.log(printBalance())
// myAccount.printBalance()

// class EBankAccount extends BankAccount {
//     constructor(balance){
//         super(balance);
//     }

//     printBalance(){
//         console.log(this.#balance)
//     }
// }

// const myEBankAccount = new EBankAccount(25000)
// console.log(myEBankAccount.printBalance())


class BankAccount {
    constructor(balance) {
        this._balance = balance
    }
}

class EBankAccount extends BankAccount {
    constructor(balance){
        super(balance);
    }

    printBalance(){
        console.log(this._balance)
    }
}

const myEBankAccount = new EBankAccount (34000)
myEBankAccount.printBalance()