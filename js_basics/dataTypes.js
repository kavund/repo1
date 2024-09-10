import chalk from "chalk"

// number

const age = 28
const percent = 14.4

console.log(chalk.green(typeof age))
console.log(chalk.blue(typeof percent))

// string
const name1 = "Arthas"
const name2 = 'Jaina'
const text = `${name1} & ${name2}`

console.log(name1)
console.log(name2)
console.log(text)
console.log(typeof name1)

// booleans

const isSunny = true
const isCloudy = false

console.log(typeof isCloudy)

// big int
const bigNum = 12n
console.log(Number.MAX_SAFE_INTEGER)
console.log(bigNum)

// undefined

let something
console.log(something)

// null
let nullTalisman = null
console.log(nullTalisman)