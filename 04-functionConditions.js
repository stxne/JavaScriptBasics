function gradeConditions(grade){
  if (grade >= 90){
    return "Grade: " + grade + "%" + ". . .Excellent! You get an A.";
  }
  else if (grade >= 80 && grade <= 89 ){
    return "Grade: " + grade + "% " + ". . .Very Good! You get a B.";
  }
  else if (grade >= 70 && grade <= 79){
    return "Grade: " + grade + "% " + ". . .Satisfactory, you get a C.";
  }
  else if (grade >= 60 && grade <= 69){
    return "Grade: " + grade + "% " + ". . .Below average, you get a D.";
  }
  else if (grade <= 59){
    return "Grade: " + grade + "% " + ". . .F for failed!"
  }
}

console.log(gradeConditions(Math.floor(Math.random()*101)))
