                          //Assigment no 26-30
//                          //MATH METHODS 
//1.Write a program that takes a positive integer from user &display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

//Answer no 1
// var num=prompt("Enter a positivie integer:");
// document.write("<h2>Number:</h2>" + num);
// document.write("<h2>Round off value</h2>" + Math.round(num));
// document.write("<h2>Floor value</h2>" + Math.Floor(num));
// document.write("<h2>ceil value</h2>" + Math.ceil(num));

//2. Write a program that takes a negative floating point number from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number
//Answer no 2
//var num=prompt("Enter a negative floating number:");
 //document.write("<h4>Number:</h4>" + num);
//document.write("<h4>Round off value:</h4>" + Math.round(-num));
 //document.write("<h4>Floor value</h4>" + Math.Floor(-num));
 //document.write("<h4>ceil value</h4>" + Math.ceil(-num));

//3. Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5
//Answer no 3
 //var num = prompt ("Enter a number:");
// var abs=Math.abs(num);
//document.write("The absolute value of" +num +"is "+abs);
//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
//Answer no 4
// var value = 4;
//  document.write("random dice value: "+value+"<br>")
//  var value =(Math.random()+6) + 1;
//  document.write("randomm dice value" + value);

//5. Write a program that simulates a coin toss using random()method of JS Math class. Display the value of coin in your browser.
//Answer no 5
// var coin =Math.floor(Math.random()*3);
// if(coin===1)
// document.write(coin+"<br>Random coin value: Tails");
// elseif (coin===2)
// document.write(coin+"<br>Random coin value: Heads");
//6. Write a program that shows a random number between 1 and 100 in your browser.
//Answer no 6
// var random;
// random = Math.floor(Math.random()* 100) +1;
// document.write("Random number between 1 and 100:"+ random);

//7.Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
//Possible user inputs can be:
//a. 50
//b. 50kgs
//c. 50.2kgs
//d. 50.2kilograms
//Answer no 7
// var user = prompt("Enter your weight")
//  document.write("The Weight of user is "+user);

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number 
//between 1 and 10. If the user input equals the secret number, congratulate the user.

//Answer no 8

// var secretNumber = 7;
// var guess =Number(prompt("Guess the secret number between (1 and 10):"));
// if(guess== secretNumber)
//  {
//   alert("congratulations!you won");
//  }
//  alert ("please try again");
