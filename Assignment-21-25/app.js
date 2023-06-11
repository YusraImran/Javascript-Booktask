                                  //Assigment no 21-25
                                   //STRING METHODS 

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//Answer no 1
// var firstName =prompt("Enter your first name. ");
//var lastName=prompt("Enter your last name.");
 //var fullName = firstName +""+lastName
//alert("Hello ! "+fullName);

// document.write("<br>");

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

//Answer no 2
// document.write("<br>")
//var userInput=prompt("enter your favorite mobile phone model : ");
//document.write("My favorite phone is: " +userInput+"<br>");

//document.write("Lenght of string : "+userInput.lenght+"<br>")

//document.write("<br>");


//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

//Answer no 3

//var str="pakistani";

//document.write(" String : " +str+"<br>")
//document.write(" Index of 'n' is : " +str.search("n")+"<br>")
//document.write("<br>");


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//Answer no 4
//  document.write("<br>")

// var stri="Hello World";
//document.write(" string : " +stri+"<br>")
//document.write(" Last Index of 'l' is :  " +stri.lastIndexOf("l")+"<br>")

//document.write("<br>");



//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

//Answer no 5
// document.write("<br>");

// var str="pakistani";
// var index=3;
// document.write("string : "+str+"<br>")
// document.write( "charcter at index 3 :i  " +str+"<br>")
// document.write("<br>");


//6. Repeat Q1 using string concat() method.
//Answer no 6

//var firstname="yusra";
//var lastname="Imran";
//var fullName=firstName.concat("",lastname);
//alert("Hello ! "+fullName);
//document.write("<br>");
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
//Answer no 7
//var city = "Hyderabad";
//var result =city.replace (" Hyderabad,Islamabad");
//document.write("city: "+ city +"<br>" + "After replacement : "+result)
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

//Answer no 8
//document.write("<br>");
//var message ="Ali and sami are best friends.They play cricket and football together.";
//document.write(message.replace(/and/g,"&"))


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
//Answer no 9
// var stringnum="472";
// document.write("value : "+ stringnum +"<br>")
//  document.write("Type : "+ typeof stringnum +"<br>")
// var num =Number(stringnum);
// document.write("Value : 472"+"<br>")
// document.write("Type : "+ typeof num+"<br>")
//10. Write a program that takes user input. Convert and show the input in capital letters.
//Answer no 10
// var inp=prompt("Enter any input the convert in uppercase");
//  document.write("User input : " +inp +"<br>");
// document.write("Upper case : " +inp.toUpperCase());

//11. Write a program that takes user input. Convert and show the input in title case.
//Answer no 11
//var inp=prompt("Enter any input the  convert in Titlecase");
//document.write("User input : " +inp +"<br>");
 //document.write("Tittle case : " +inp[0].toUpperCase() + inp.slice(1).toLowerCase());
//12. Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.
//Answer no 12
//document.write("<br>");
 //document.write("Number : " +num+"<br>");
//var numString=write("Result : " +numstring.replace(".","")+"<br>");

// document.write("<br>");

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

//Answer no 13

// var valid=prompt("please enter valid username ")

//  var userName=prompt("Enter your Input: ");
// var containsAlphabets = flase;
// var specialChar=flase;
// for (var i =0; i < userName.lenght; i++) {
//  var charCode =userName.charCodeAt(i);

//  if ((charCode >= 65 && charCode <= 90)|| (charCode == 97&& charCode <= 122)){
//  containsAlphabets = true;
// }
//  if(charCode==33 || charcode==44 || charCode==64){
//   specialChar=true;
//  break;

// }
//  }
// //check if username meets the requirements
// if (containsAlphabets && specialChar ){
//   alert("please enter a valid username!");
// }
// else{
//   alert("valid username!");
// }

// 14. You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
//array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

//Answer no 14

// var A=["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC bakery.what do you want to order sir/mam?:").toLowetCase();

// // Prompt the user for input and convert it to lowerCase

// var found= flase;
// for (var i = 0; i<A.lenght; i++){
// if (A[i].toLowerCase()=== UserInput) {
//     found = true;
//    break;
//   }
//  }
//  if(found){
//  alert("The oder '"+ userInput + "' is found in the list.");
//   alert("The oder '"+ userInput + "' is not found in the list.");
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

//Answer no 15
// var pasword = prompt("Enter a pasword:");

// var containsAlphabets =flase;
// var containsNumbers = flase;
// var starsWithAlphabets= flase;
// var isLenghtvalid = password.lenght >=6;

// //check if password contains alphabets and numbers

// for (var i =0; i < pasword.lenght; i++) {
//  var charCode= password.charCodeAt(i);

//  if((charCode >=65 && charcode <=90) ||(charcode>=97 && charCode <=122)){
//   containsAlphabets =true;
//   }
// if(charcode>=48 && charcode<= 57){
//  var containsNumbers = true;
//  }
// }
// //check if pasword starts with an alphabet
// var firstCharCode = password.charCodeAt(0);
//  if((firstCharCode>= 65 &&firstCharCode <+ 90|| (firstCharCode >= 97 && firstCharCode<=122))){
//   var starsWithAlphabets= true; 
//  }

//check if pasword meets the requiermients
// if (containsAlphabets&& containsNumbers && starsWithAlphabets && isLenghtvalid){
// alert("pasword is valid!");
// }

// 16. Write a program to convert the following string to an 
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.
// Answer no 16
// var university ="university of karachi";
// var array =university.split("");
// document.write(" <br><br>" + array.join("<br>"));
// document.write( "<br>");
// document.write( "<br>");

// document.write( university.split())

// 17. Write a program to display the last character of a user input.
// Answer no 17
// document.write("<br>");

//var userIn="Pakistan";
//document.write(" User Input :" +userIn+"<br>")
//document.write(" Last character of input :" +userIn.slice(-1)+"<br>")

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
//Answer no 18

//var stringcount="the quick brown fox jumps over the lazy dog";
// var count = (stringcount.match(/the/g)).lenght;
// document.write("Text : "+stringcount+"<br>");
//  document.write("There are " +count+ "occurence(s) of word 'the' "+"<br>");

//                          //Assigment no 26-30
//                          //MATH                                  //Assigment no 21-25
                                   //STRING METHODS 

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//Answer no 1
// var firstName =prompt("Enter your first name. ");
//var lastName=prompt("Enter your last name.");
 //var fullName = firstName +""+lastName
//alert("Hello ! "+fullName);

// document.write("<br>");

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

//Answer no 2
// document.write("<br>")
//var userInput=prompt("enter your favorite mobile phone model : ");
//document.write("My favorite phone is: " +userInput+"<br>");

//document.write("Lenght of string : "+userInput.lenght+"<br>")

//document.write("<br>");


//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

//Answer no 3

//var str="pakistani";

//document.write(" String : " +str+"<br>")
//document.write(" Index of 'n' is : " +str.search("n")+"<br>")
//document.write("<br>");


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//Answer no 4
//  document.write("<br>")

// var stri="Hello World";
//document.write(" string : " +stri+"<br>")
//document.write(" Last Index of 'l' is :  " +stri.lastIndexOf("l")+"<br>")

//document.write("<br>");



//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

//Answer no 5
// document.write("<br>");

// var str="pakistani";
// var index=3;
// document.write("string : "+str+"<br>")
// document.write( "charcter at index 3 :i  " +str+"<br>")
// document.write("<br>");


//6. Repeat Q1 using string concat() method.
//Answer no 6

//var firstname="yusra";
//var lastname="Imran";
//var fullName=firstName.concat("",lastname);
//alert("Hello ! "+fullName);
//document.write("<br>");
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
//Answer no 7
//var city = "Hyderabad";
//var result =city.replace (" Hyderabad,Islamabad");
//document.write("city: "+ city +"<br>" + "After replacement : "+result)
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

//Answer no 8
//document.write("<br>");
//var message ="Ali and sami are best friends.They play cricket and football together.";
//document.write(message.replace(/and/g,"&"))


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
//Answer no 9
// var stringnum="472";
// document.write("value : "+ stringnum +"<br>")
//  document.write("Type : "+ typeof stringnum +"<br>")
// var num =Number(stringnum);
// document.write("Value : 472"+"<br>")
// document.write("Type : "+ typeof num+"<br>")
//10. Write a program that takes user input. Convert and show the input in capital letters.
//Answer no 10
// var inp=prompt("Enter any input the convert in uppercase");
//  document.write("User input : " +inp +"<br>");
// document.write("Upper case : " +inp.toUpperCase());

//11. Write a program that takes user input. Convert and show the input in title case.
//Answer no 11
//var inp=prompt("Enter any input the  convert in Titlecase");
//document.write("User input : " +inp +"<br>");
 //document.write("Tittle case : " +inp[0].toUpperCase() + inp.slice(1).toLowerCase());
//12. Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.
//Answer no 12
//document.write("<br>");
 //document.write("Number : " +num+"<br>");
//var numString=write("Result : " +numstring.replace(".","")+"<br>");

// document.write("<br>");

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

//Answer no 13

// var valid=prompt("please enter valid username ")

//  var userName=prompt("Enter your Input: ");
// var containsAlphabets = flase;
// var specialChar=flase;
// for (var i =0; i < userName.lenght; i++) {
//  var charCode =userName.charCodeAt(i);

//  if ((charCode >= 65 && charCode <= 90)|| (charCode == 97&& charCode <= 122)){
//  containsAlphabets = true;
// }
//  if(charCode==33 || charcode==44 || charCode==64){
//   specialChar=true;
//  break;

// }
//  }
// //check if username meets the requirements
// if (containsAlphabets && specialChar ){
//   alert("please enter a valid username!");
// }
// else{
//   alert("valid username!");
// }

// 14. You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
//array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

//Answer no 14

// var A=["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC bakery.what do you want to order sir/mam?:").toLowetCase();

// // Prompt the user for input and convert it to lowerCase

// var found= flase;
// for (var i = 0; i<A.lenght; i++){
// if (A[i].toLowerCase()=== UserInput) {
//     found = true;
//    break;
//   }
//  }
//  if(found){
//  alert("The oder '"+ userInput + "' is found in the list.");
//   alert("The oder '"+ userInput + "' is not found in the list.");
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

//Answer no 15
// var pasword = prompt("Enter a pasword:");

// var containsAlphabets =flase;
// var containsNumbers = flase;
// var starsWithAlphabets= flase;
// var isLenghtvalid = password.lenght >=6;

// //check if password contains alphabets and numbers

// for (var i =0; i < pasword.lenght; i++) {
//  var charCode= password.charCodeAt(i);

//  if((charCode >=65 && charcode <=90) ||(charcode>=97 && charCode <=122)){
//   containsAlphabets =true;
//   }
// if(charcode>=48 && charcode<= 57){
//  var containsNumbers = true;
//  }
// }
// //check if pasword starts with an alphabet
// var firstCharCode = password.charCodeAt(0);
//  if((firstCharCode>= 65 &&firstCharCode <+ 90|| (firstCharCode >= 97 && firstCharCode<=122))){
//   var starsWithAlphabets= true; 
//  }

//check if pasword meets the requiermients
// if (containsAlphabets&& containsNumbers && starsWithAlphabets && isLenghtvalid){
// alert("pasword is valid!");
// }

// 16. Write a program to convert the following string to an 
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.
// Answer no 16
// var university ="university of karachi";
// var array =university.split("");
// document.write(" <br><br>" + array.join("<br>"));
// document.write( "<br>");
// document.write( "<br>");

// document.write( university.split())

// 17. Write a program to display the last character of a user input.
// Answer no 17
// document.write("<br>");

//var userIn="Pakistan";
//document.write(" User Input :" +userIn+"<br>")
//document.write(" Last character of input :" +userIn.slice(-1)+"<br>")

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
//Answer no 18
//var stringcount="the quick brown fox jumps over the lazy dog";
// var count = (stringcount.match(/the/g)).lenght;
// document.write("Text : "+stringcount+"<br>");
//  document.write("There are " +count+ "occurence(s) of word 'the' "+"<br>");
