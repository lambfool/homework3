var weight= prompt("Enter your weight:");
var height= prompt("Enter your height:");
var BMI = weight / (height * height); if(BMI< 18.5)
{
console.log( "Your BMI is " + BMI + " ,so you are underweight");
}
 else if(BMI >= 18.5 && BMI < 24.9)
{
console.log( "Your BMI is " + BMI + " ,so you have a noraml weight");
}
else if(BMI > 24.9){
 console.log( "Your BMI is " + BMI + " ,so you are overweight"); }
