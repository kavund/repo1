let radius = 7 // см
let area = Math.PI * Math.pow(radius, 2)
let roundedArea = Number(area.toFixed(2))
console.log ('Площа кола = ' + roundedArea + ' см²')

let length = 41.7
let width = 23.5
let squareArea = length * width
let roundedSquareArea = Number(squareArea.toFixed(2))
console.log('Площа прямокутника = ' + roundedSquareArea + ' см²')

let height = 17
let radiusCyl = 28
let resultCyl = Math.PI * Math.pow(radiusCyl, 2) * height
let resultNumbered = Number(resultCyl.toFixed(2))
console.log(resultNumbered)