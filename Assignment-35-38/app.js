                                  //Assignment # 35-38
                                  //FUNCTION

//1. Write a function that displays current date & time in your browser.

//Answer no 1
// function displayDateTime() {
//  var currentDate = new Date(); 
//   document.write(currentDate);
// }
// displayDateTime();

//2. Write a function that takes first & last name and then it greets the user using his full name.

//Answer no 2

//  function userName(){
//   varfirstName = prompt('Enter your first name');
//   var lastName = prompt('Enter last name');
//   var userName =firstName + '' + lastName;

//  }
//  userName();

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

//Answer no 3
// function sum(){
//  var firstNum = prompt ('Enter your num');
//    var lastNUm = prompt('Enter second num');
//  var sum = parseInt (firstNum) + parseInt(lastNUm);
// document.write('The sum is: ;',sum);
//  }
//  sum();

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and 
// //show the desired result in your browser.

// //Answer no 4
// function calculator(){
//  var num1 =parseFloat(prompt('Enter the first number'));
//  var num1 =parseFloat(prompt('Enter the second number'));
// var operator = prompt('Enter the operator(+, -,*,/)');
// var result;
//   if (operator ==='+'){
//   result=num1 +num2;
//  }else if (operator=== '-'){
//   result = num1 - num2;
//  }
//  else if(operator ==='*'){
//    result = num1 *num2;
//   }
//   else if(operator ==='/'){
//    result = num1 / num2;
// }
//  else{
//    document.write('Invalid operator'); 
//      return;
//   }
// document.write('The result is: ' +result);
// return;
// }

// calculator();

// //5. Write a function that squares its argument.

// //Answer no 5
// function squares(){
//  var input =parseFloat(prompt('Enter the number'));
// var sqr = input * input;

//  document.write('The result is: +sqr');
//   return sqr;
// }
//  squares();

// //6. Write a function that computes factorial of a number.

// //Answer no 6
// function functorial(){
//   var num =parseInt(prompt('Enter a number'));
//  function calculateFactorial(num){
//   if(num===0 || num===1){
//     return 1;
//  }else{
//      return num * calculateFactorial(num-1);
//    }
//    }
// var result = calculateFactorial(num);
// document.write('The factorial is: ' +result);
//  }

//  calculateFactorial();

// //7. Write a function that take start and end number as inputs & display counting in your browser.

// //Answer no 7
//  function numb(){
//   var startNum=prompt('Enter start num:');
//  var endNum=prompt('Enter end num:');
//  var counting ='';

//  if( startNum<= endNum){
//    for(var i=startNum ; i>= endNum;j--){
//     counting += i + '';
//     }
//   }else{
//     for(var j =startNum; j>= endNum;j--){
//       counting += j + '';
//     }
//   }
  
//   document.write(counting);
// }
// numb();

// //8. Write a nested function that computes hypotenuse of a right angle triangle. 
// //Hypotenuse2 = Base2 + Perpendiculas
// //Take base and perpendicular as inputs.
// //Outer function : calculateHypotenuse()
// //Inner function: calculateSquare()

// //Answer no 8
//  function traingle(){
//   var base =prompt('Enter base value');
//  var perpendicular = prompt('Enter prependicular value');

//  function square(number){
//     return Math.pow(number,2);
//   }
//   var hypotenuseSquared = square(base) + square(perpendicular);
//   var hypotenuse=Math.sqrt(hypotenuseSquared);

//    console.log('Hypotenuse:',hypotenuse)
//  }
// traingle();

// //9. Write a function that calculates the area of a rectangle.
// //A = width * height
// //Pass width and height in following manner:
// //i. Arguments as value
// //ii. Arguments as variables

// //Answer no 9

// function areaOfRectangle(){
//   var width = prompt('Enter width');
//   var height = prompt('Enter width');
//   var area = width *height;
//   console.log(area);
// }

// areaOfRectangle();

// //10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// //A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// //Answer no 10
// function palindrome(check){
//   var user = check.spilt("").reverse().join("")
//   if(user==check){
//   alert("This is a palindrome ")
// }else{
//   alert("This is not a Palindrome Sequence")
// }
// }
// var input =prompt("Enter any phrase to check the palindrome squence");
// var result = palindorme(input);


// //11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// //EXAMPLE STRING : 'the quick brown fox'
// //EXPECTED OUTPUT : 'The Quick Brown Fox'

// //Answer no 11
// function capitalWords(str){
//   var letter =str.split('');
//   for(i =0; i < letter.lenght; i++) {
//     var word = letter[i];
//     letter[i]= word.charAt(0).toUpperCase() + word.slice(1);
//   }
//   return letter.join('');
// }
// var str ='the quick brown fox';
// var capitalizedStr =capitalWords(str);
// document.write(str + '<br>' + '<b>CapitalizedString:</b>'+capitalizedStr);


// //12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// //EXAMPLE STRING : 'Web Development Tutorial'
// //EXPECTED OUTPUT : 'Development'

// //Answer no 12

// function longestWord(word){
//   var words = word.split("");
//   var longest ="";
//   for(i=0; i<words.lenght; i++){
//     if(words[i].lenght; i++){
//     longest = words[i]
//   }
// }
// return longest;
// }
// var word ="Web Development Tutorial";
// document.write(word, '</br>');
// var longest =longestWord(word);
// document.write('<br>Longest word is:</br>' +longest);

// function countOccurrences(string,  letter){
//   var count =0;
//   for (var i =0;i < string.length; i++){
//     if(string[i]===letter){
//       count++;
//     }
//   }
//   return count;
// }
// var occurences = countOccurrences("JSResources.com",",","o",",",occurences);
// //13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number ofoccurrences of the specified letter within the string. 
// //occurrences of the specified letter within the string. 

// //Answer no 13

// //14. The Geometrizer
// //Create 2 functions that calculate properties of a circle, using the definitions here.
// //Create a function called calcCircumference:
// //• Pass the radius to the function.
// //• Calculate the circumference based on the radius, and output 
// //"The circumference is NN".
// //create a function called calcArea:
// //• Pass the radius to the function.
// //• Calculate the area based on the radius, and output "The area is NN".
// //Circumference of circle = 2πr
// //Area of circle = πr2

// //Answer no 14

// functionccalcCircumference(radius){
//   var circumference =2*3.142*radius;
//   return circumference
// }
// function calArea(){
//   var area =3.142*radius*radius;
//   return area
// }
// var radius =4;
// var CircumferenceOfcircle = calcCircumference(radius);
// var areaOfcircle = calcArea(radius);
// document.write("Circumference of circle is: "+ circumferenceOfcircle + '<br>'+"Area of circle is:"+areaOfcircle)

//                                   //Assignment # 38-44 
                          //FUNCTIONS, SWITCH STATEMENTS, WHILE… DO WHILE LOOPS

                                  //FUNCTIONS| SWITCH | WHILE.. DO-WHILE |
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

//Answer no 1:
// function power(a,b){
//   var result = a ** b
//   document.write("<br> " + a + "raised to power" + b + " is "+ result);
//   return result
// }
// power (2, 5)
// document.write("<hr>")

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
//Leap years ..., 2012, 2016, 2020, …

//Answer no 2:
// function leapYear (year){
//   if (year%4==0)
//   {
//     document.write(year+" is aleap year")
//   }
//   else
//   document.write(year+" is not a leap year")
// }
// var year= prompt ("enter year to check\nwhether the year is a leap year or not:");
// leapYear(year);



//3. If the lengths of the sides of a triangle are denoted by a, b, and 
//c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions

//Answer no 3:
// document.write("calculate Traingle Area")
// function calcS(a,b,c){
//   return(a + b + c)/2
// }
//  function calculateArea(a,b,c){
//   var S =calcS(a,b,c)
//   var area =Math.sqrt(S *(S-a)*(S-b)*(S-c))
//   document.write("<br> A =" + a + ",B="+ b + ",C ="+ c +"and S ="+S);
//   document.write("<br> The Area of the traingle is " +area);
//  }
// var sideA =5
// var sideB =7
// var sideC =9
// calculateArea(sideA,sideB, sideC)
// document.wwrite("<hr>")

//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
//marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.

//Answer no 4
// const studentsAverage =(sub1 ,sub2, sub3) => {
//   return(sub1 + sub2 + sub3)/3;
// }
// const studentspercentage =(totalMarks,maxMarks)=>{
//   return(totalMarks/maxMarks)* 100;
// }
// const mainFunction =(sub1,sub2, sub3)=>{
//   const averageMarks = studentspercentage(averageMarks, 100);
//   document.write("Average Marks: " + averageMarks.toFixed(2)+ '</br>');
//   document.write("precentage: " + precentage.toFixed(2)+ '%');

// }
// let sub1 =prompt("Enter the marks for Subject 1");
// let sub2 =prompt("Enter the marks for Subject 2");
// let sub3 =prompt("Enter the marks for Subject 3");

// mainFunction(+sub1, +sub2, +sub3);

//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

//Answer no 5
// const indexOf =(str, element)=> {
//   for (let i =0; i< str.lenght; i++){
//     if(str[i]=== element){
//       return i;
//     }
//   }
//   return-1;
// }
// let str ="Hello Everyone";
// document.write('The first occurence of r in str is at ${indexof(str,'i')}<br>');
// document.write('The first occurence of r in str is at ${indexof(str,'z')}');

//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
//Answer no 6
// function deleteVowles(sentence){
//     var vowels =['a','e','i','o','u'];
//     var result ="";

//     for (var i = 0; i < sentence.lenght; i++){
//         var char =sentence[i];
//         if(vowels.indexof (char.tolowerCase())===-1){
//             result += char;
//         }
//     }
//     return result;
// }
// var sentence ="This is a sample sentences.";
// var result =deleteVowles(sentence);

// console.log("Original sentence: " + sentence);
// console.log("Modified sentence without vowels: "+ result);

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
//“Pleases read this application and give me gratuity”Such occurrences are ea, ea, ui.


//Answer no 7

//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this 
//distance in meters, feet, inches and centimeters.

//Answer no 8


//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
//worked above 40 hours. Assume that employees do not work for fractional part of an hour.
//Answer no 9
// function calculateovertimepay(hoursWorked){
//     var regularHours =40;
//     var overtimeRates =12.00;

//     if (hoursWorked <= regularHours){
//         return 0;
//     }
//     else{
//         var overtimeHours = hoursWorked -regularHours;
//         var overtimepay = overtimeHours *overtimeHours ;
//         return overtimepay;
//     }
// }
// var hoursWorked =parseFloat(prompt("Enter the  num of hours worked by the employee:"));
// var overtimepay = calculateovertimepay(hoursWorked);
// console.log("Overtime pay: Rs. " + overtimepay.toFixed(2));
// //10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the  keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
//Answer no 10

//   function CurrencyNotes(amount)  {
//     var Note100= amount/100;
//     var Note50 =amount/50;
//     var Note10 =amount/10;

//     document.write("<br>Note of 100; "+Note100);
//     document.write("<br>Note of 50; "+Note50);
//     document.write("<br>Note of 10; "+Note10);

//   }                           
// var amount =+(prompt("Enter the amount to be withdrawn in hundreds:"));
// CurrencyNotes(amount);

