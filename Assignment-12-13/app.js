                      //Assigment no 12-13
                     //IF…ELSE & ELSE IF STATEMENT, 
                    //TESTING SET OF CONDITIONS 
 //1. Write a program that takes a character (number or string)  in a variable & checks whether the given input is a 
 //number, uppercase letter or lower case letter. (Hint: ASCII  codes:- A=65, Z=90, a=97, z=122).

 //Answer no 1
// var userInput=prompt("Enter any random condition")
// if (userInput>= 'A'&& userInput<= 'Z'){
//   console.log("Uppercase letter");
// }
// else if (userInput>= 'a'&& userInput<= 'z'){
//   console.log("lowercase letter");
// }
// else {
//   console.log("Number");
// }


//2. Write a JavaScript program that accept two integers anddisplay the larger. Also show if the two integers are equal.

//Answer no 2
// var num1 =parseInt(prompt("Enter the number 1"))
// var num2 =parseInt(prompt("Enter the number 2"))
// var result =(num1,num2)

// if(num1 > num2){
//   document.write(num1 +" is larger then"+num2)
// }
//   else if(num1 > num2){
//   document.write(num2 +" is larger then"+num1)
//   }
//   else {
//   document.write("The number are equal")
// }
// document.write("<hr>")



//3. Write a program that takes input a number from user &  state whether the number is positive, negative or zero.

//Answer no 3
// var userInput= prompt ("Enter any Random number");
// if(userInput > 0)
// {
// alert("The entered number is positive");
// }
//else if(userInput < 0)
// {
// alert("The entered number is negative");
// }
// else{
//   alert("The number is zero");
// }


//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwis
//Answer no 4
// var arr =("a", "e", "i","o","u");
// var userInput=prompt ("Enter any random Alphabets");
// if (userInput = arr){
//   alert ("True")
// }
// else{
//   alert("Flase")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise
//Answer no 5

// var userpassword =prompt("Enter the pasword")
// var correctpassword=("123")
// if(userpassword==correctpassword){
//   document.write("correct! The password you entered matches the original password")
// }
// else {
//   document.write("Incorrect password")
// }
// document.write("<hr>");





// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
//Answer no 6
// var hour =prompt("Enter the current hour time");
// if (hour<18){
//   alert("Good day")
// }
// else{
//   alert("Good evening")
// }



// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
//Answer no 7
// var time =parseInt(prompt("Enter the time to 24 hour clock format (1900)"))
// if (time >=0 && time <1200){
//  document.write("Good morinig")

// }
// else if (time >=  1200 && time <1700){
//   document.write("Good afternoon")
// }
// else if (time >=  1700 && time <2100){
//   document.write("Good eveving")
//  }

//  else if (time >=  2100 && time <2359){
//   document.write("Good night")
//  }  
// else{
//   document.write("time is incorrect")
// }
// document.write("<hr>")


                      