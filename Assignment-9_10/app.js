//Assigment no 9-10
                                                //USER INPUT & CONDITIONAL STATEMENT 
 //1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
 //“Welcome to city of lights”

//Answer no 1

// var user =prompt("Enter your city name")
// if (user.toLowerCase()=="karachi"){
//   document.write("<h2>Welcome to karachi");
// }
// else{
//   document.write("retype plz")
// }
// document.write("<hr>")



//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
//Answer no 2

// var gender =prompt("select your gender: (male or Female)")
// if (gender.toLowerCase()=="male"){
//   document.write("Hello sir.");
// }
// else if (gender.toLowerCase()=="female"){
//   document.write("Hello mam.");
// }
// else{
//   document.write("Invalied gender: plz tryagain")
// }
// document.write("<hr>")


//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
//Answer no 3

// var color =prompt("select the color: [black,blue,red]")
// if (color =="black"){
//   document.write("black  Must Stop")
// }
// else if (color =="blue"){
//   document.write("blue:  Ready to move")
// }
// else if (color =="red"){
//   document.write("red: Move now")
// }
// else{
//   document.write("plz choose the selected colours.")
// }
// document.write("<hr>")



//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

//Answer no 4
// var fuel =parseFloat(prompt("type the remaining fuel in your car [In liters]"))
// if (fuel<0.25){
//   document.write("refill the fuel in your car")
// }
// else{
//   document.write("fuel is full")
// }
// document .write("<hr>")



//5.Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a. var a = 4;
//if (++a === 5){
// alert("given condition for variable a is true");
//}
//b. var b = 82;
//if (b++ === 83){
// alert("condition 1 is true");
//}
//c. var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
// alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//d. var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
//e. if (true){
//alert("True")
//}
//if (false){
// alert("False");
//}
//f. if("car" < "cat"){
//alert("car is smaller than cat");
//}

//Answer no5
// var a =4;
// if (++a === 5){
//   alert("give condition for variable a is true");
// }
// var b =82;
// if(b++== 83){
//   alert ("give condition for variable b is true");
// }
// var c =12;
// if(c++== 13){
//   alert ("condition 1 is true");
// }
// if (c === 13){
//   var c=12;
//     alert("condition 2 is true");
//   }
//   if(++c , 14){
//     alert("condition 3 is true");  
//   }
// if (c===14){
//   alert("condition 4 is true");
// }
// var materialCost =20000;
// var laborCost =2000;
// var (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }
// if (true){
//   alert("True");
// }
// if ("car"<"cat"){
// alert("car is smaller than cat");
// }
// document.write("<hr>")

//6. Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute 
//grade as per following table:
//Answer no 6
// var subject1=parseFloat(prompt("Enter your obtained marks in subject 1 :"));
// var subject2=parseFloat(prompt("Enter your obtained marks in subject 2 :"));
// var subject3=parseFloat(prompt("Enter your obtained marks in subject 3 :"));

// var totalmarks =parseFloat(prompt("Enter the total marks of subject 1,2,3"))
// var totalobtainedmarks = subject1 + subject2 + subject3
// var percentage = (totalobtainedmarks/totalmarks) =100 
// var grade, remarks
// if (percentage >=80){
//   grade ="A-one"
//   remarks = "Execllent"
// }
// else if (percentage >= 70){
//   grade ="A"
//   remarks = "Good performance"
// }

// else if (percentage >= 60){
//   grade ="B"
//   remarks = "you need to improve"
// }
// else if (percentage >=20){
//   grade ="fail"
//   remarks = "sorry work hard again"
// }  
// document.write("[Mark sheet] " +"<br>")
// document.write("Total marks " +totalmarks  +"<br>")
// document.write("Mark obtained " + totalmarks +"<br>")
// document.write("Precentage" + percentage.toFixed() + "%" +"<br>")
// document.write("Grade " +grade  +"<br>")
// document.write("remarks " +"<br>")
// document.write("<hr>")

//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct
//answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

//Answer no7
// var secretNumber=parseInt(prompt("choose the secrect num from 1 to 10"))
// if (secretNumber ==6){
//   document.write("your answer is right")

// }
// else if(secretNumber ==+1){
//   document.write("Close enough to the correct answer")
// }
// else {
//   document.write("you lose")
// }
// document.write("<hr>")


//8. Write a program to check whether the given number is
//divisible by 3. Show the message to the user if the number 
//is divisible by 3.
//Answer no8
// var givenum =parseInt(prompt("write your num to divided by 3"))
// if (givenum %3 == 0){
//   document.write("If the num is divide by 3:")
// }
// else{
//   document.write("If num is divide by 3:")
// }
// document.write("<hr>")



//9. Write a program that checks whether the given input is aneven number or an odd number.
//Answer no 9
// var num =parseInt(prompt("Enter the num [Even or add]"))
// if (num % 2 ===0){
//   document.write(num + " is Even num")
// }
// else{
//   document.write(num + " is odd num")
// }
// document.write("<hr>")



//10 Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”
//Answer no 10
// var temperature =parseInt(prompt("Enter the lastest temperature "))
// if (temperature >= 40){
//   document.write("It is too hot outside")
// }
// else if (temperature >= 30){
//   document.write("The weather today is Normal.") 
// }

// else if (temperature >= 20){
//   document.write("Today weather today is cool.") 
// }
// else if (temperature >= 10){
//   document.write("OMG! today's weather is so cool.") 

// }
// else {
//   document.write("Temperature is normal")
// }
// document.write("<hr>")


//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.
//Answer no 11

// var firstnumber =parseInt(prompt("Enter your first number of calculator"))
// var secondnumber =parseInt(prompt("Enter your second number of calculator"))
// var operation =prompt("= - * / %")
// var result
// if (operation === "+"){
//   document.write("Your calculated result is:" + (firstnumber + secondnumber))
// }
// else if(operation === "-"){
//   document.write("Your calculated result is:" + (firstnumber - secondnumber))
// }
// else if(operation === "/"){
//   document.write("Your calculated result is:" + (firstnumber / secondnumber))
// }
// else if(operation === "%"){
//   document.write("Your calculated result is:" + (firstnumber % secondnumber))
// }
// else if(operation === "*"){
//   document.write("Your calculated result is:" + (firstnumber *secondnumber))
// }
// else {document.write("your operation is invalid : ")
//   } 
//   document.write("<hr>")


