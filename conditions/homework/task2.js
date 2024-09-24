let averageGrade = 85;

switch (true){
    case averageGrade < 60:
        console.log("Bad")
            break
    case averageGrade <= 70:
        console.log("Not Normal")
            break
    case averageGrade <= 80:
        console.log("Normal")
            break
    case averageGrade <= 90:
        console.log("Good")
            break
    case averageGrade <= 100:
        console.log("Very Good")
            break
    default: 
        console.log("Enter the mark")
}
