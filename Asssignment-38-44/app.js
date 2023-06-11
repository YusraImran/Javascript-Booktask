//                                   //Assignment # 38-44                               //FUNCTIONS, SWITCH STATEMENTS, WHILE… DO WHILE LOOPS

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
// function deleteVowels(sentence){
//   let vowels = "aeiouAEIOU";
//   let newSentence ="";

//   for (let i =0; i < sentence.lenght; i++){
//     if (vowels .indexOf(sentence[i])=== -1){
//       newSentence+=sentence[i];
//     }
//   }
//   return newSentence;
// }
// let ="This is a sentence without vowels.";
// let sentence = deleteVowels(sentence);
// console.log(newSentence);

//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
//“Pleases read this application and give me gratuity”Such occurrences are ea, ea, ui.
//Answer no 7

// function countVowelPairs(text){
//   var count =0;
//   var vowels ="aeiouAEIOU";

//   for (let i =0; i<text.lemght -1; i++){
//     let pair =text[i]; +text [i +1];
//     switch (pair){
//       case "ai":
//       case "ei":
//       case "oi":
//       case "au":
//       case "eu":
//       case "ou":
//       case "ia":
//       case "ie":
//       case "io":
//       case "iu":
//       case "ua":
//       case "ue":
//       case "ui":
//       case "uo":
//       case "ou":
//         count++;
//         break;
//     }
//   }
//   return count;
// }
// var text ="This is a sentences with some vowel paris.";
// var count =countVowelPairs (text);
// console.log(count);//Output:4

// //8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this 
// //distance in meters, feet, inches and centimeters.

//Answer no 8
// function kmToMeters(km){
//   return km * 1000;
// }
// function kmToFeet(km){
//   return km *3280.84;
// }
// function kmToInches(km){
//   return km * 39370.1;
// }
// function kmToCentimeters(km){
//   return km * 100000;
// }
// var distance =100
// var meters =kmToInches(distance);
// var feet =kmToFeet(distance);
// var inches =kmToInches(distance);
// var centimeters =kmToCentimeters(distance);

// console.log('${distance} km = ${meters} meters');
// console.log('${distance} km = ${feet} feet');
// console.log('${distance} km = ${inches} inches');
// console.log('${distance} km = ${centeimeters} cenitmeters');

//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
//worked above 40 hours. Assume that employees do not work for fractional part of an hour.


//Answer no 9
// var overtimeRate= 12.0;
// var regularHours =40;
// var hoursWorked =50;
// var overtimeHours = hoursWorked -regularHours;
// var overtimePay =overtimeHours * overtimeRate;
// console.log('The employee worked $ {overtimeHours} hours of overtime and earned Rs.${overtimePay.toFixed(2)} in overtime')

//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the  keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
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

