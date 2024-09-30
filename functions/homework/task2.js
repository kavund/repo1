// function checkAge(age1, age2 = 'no information given') {
//     console.log(`Person 1: ${age1 >= 18 ? 'true' : 'false'}`);
//     console.log(`Person 2: ${age2 >= 18 ? 'true' : 'false'}`);
// }
  
// checkAge(25);
// Коли ви передаєте лише один аргумент, age2 отримує значення 'no information given', яке є рядком. 
// При порівнянні рядка з числом 18, JavaScript намагається привести рядок до числа, 
// але це призводить до неочікуваних результатів.
// Логічне вираження: Навіть якщо б порівняння працювало коректно, 
// логічне вираження 'no information given' >= 18 завжди буде false, 
// оскільки JavaScript не може порівнювати рядок з числом в такому контексті


function isAdult(age) {
    return age >= 18;
  }
console.log(isAdult(15))
console.log(isAdult(25))


function checkAge(age1, age2 = null) {
    console.log(`Person 1: ${age1 >= 18 ? 'true' : 'false'}`);
    if (age2 !== null) {
      console.log(`Person 2: ${age2 >= 18 ? 'true' : 'false'}`);
    } else {
      console.log('Information about the second person is not provided');
    }
  }
  
  checkAge(25, 15);