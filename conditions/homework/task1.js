let averageGrade = 85;
if(averageGrade < 60 ){
    console.log(`Незадовільно - ${averageGrade}`)
}else if (averageGrade <= 70){
    console.log(`Задовільно - ${averageGrade}`)
}else if (averageGrade <= 80){
    console.log(`Добре - ${averageGrade}`)
}else if (averageGrade <= 90){
    console.log(`Дуже добре - ${averageGrade}`)
}else if (averageGrade <= 100){
    console.log(`Відмінно - ${averageGrade}`)
}else {
    console.log("Перевірте введені дані")
}
