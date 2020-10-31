var num1 = Math.floor(Math.random()*101);
var num2 = Math.floor(Math.random()*101);
if(num1==num2){
  alert("The numbers are equal.");
}
else if (num1>num2) {
  alert(num1 + " is greater than " + num2 + ".");
}
else{
  alert(num1 + " is less than " +num2 + ".");
}
