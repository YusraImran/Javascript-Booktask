                               //Assigment no 6
                              //MATH EXPRESSIONS 

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your required arithmetic to display the following result in your browser:
//Answer no 1

// var a=10;
// document.write("Result:<br>")
// document.write("The value of a is : "+a +"<br>")
// document.write("..............................")
// document.write("<br>")
// document.write("<br>")

// ++a;
// document.write("The Value of ++a is : " +a+"<br>")
// document.write("Now the value of a is : "+a+"<br>")
// document.write("<br>")

// document.write("The Value of ++a is : " +a+"<br>")
// a++;
// document.write("Now the value of a is : "+a+"<br>")
// document.write("<br>")

// a--;
// document.write("The value of --a is : "+a +"<br>")
// document.write("Now the value of a is : "+a +"<br>")
// document.write("<br>")

// document.write("The value of --a is : "+a +"<br>")
// a--;
// document.write("Now the value of a is : "+a +"<br>")



//2. What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;
//Answer no 2

// var a =2;
// document.write("a is : "+a+"<br>")

// var b =1;
// document.write("b is : "+b+"<br>")

// --a - --b + ++b + b--;

// --a;
// var e= --a;
// document.write("b is : "+e+"<br>")
//  var g=--a- --b;
// document.write("---a --b is : "+g+"<br>")

//  var c=--a- --b + ++b + b--;
//  document.write("---a --b + ++b +b--is : "+c+"<br>")
// document.write("<br>");

// var r=--a- --b + ++b + b--;
//  document.write("---a --b + ++b +b--is : +r>")
// document.write("<br>");

// var result = --a - --b + ++b +b--;
// document.write("Result is : "+result+ "<br>")


//3. Write a program that takes input a name from user & greet the user.
//Answer no 3
// var user =prompt("Enter Your Name :")
// alert("Hello Everyone,"+user+"Welcome to js");


//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
//Answer  no 5

// var number=prompt("Enter a number you want: ");
// if (number===null|| number === ""){
// number=5;
// }

// var table="";
// for (var i=1;i<=10;i++){
//   var nul=number*i;
//   table+=number+ "x " +i + "=" +(null) + "<br>";
// }
// document.write("<h3> Multiplication Table of " +number + "</h3>");
// document.write(table);


//6. Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
//Answer no 6
// var subject1 =prompt("Enter the name of subject 1:");
// var subject2 =prompt("Enter the name of subject 2:");
// var subject3 =prompt("Enter the name of subject 3:");

// var totalMarks =100;


// var obtainedMarks1 =paresFloat(prompt("Enter the obtained marks for " + subject1 + ":"));
// var obtainedMarks2 =paresFloat(prompt("Enter the obtained marks for " + subject2 + ":"));
// var obtainedMarks3 =paresFloat(prompt("Enter the obtained marks for " + subject3 + ":"));

// var totalobtatainedMarks =obtainedMarks1 +obtainedMarks2 +obtainedMarks3;
// var per=((totalobtatainedMarks/100)*100);
// var per1=((totalobtatainedMarks/100)*100);
// var per2=((totalobtatainedMarks/100/100)*100);
// var per3=((totalobtatainedMarks/100)*100);
// var percentage=(per1+per2+per3)/3;
// var totalAll=300;


// document.write("<table>");
// document.write("<tr><th>subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
// document.write("<tr><td>" + subject1 + "</td></td>" +totalMarks + "</td><td>"+obtainedMarks1 + "</td><td>" + per1 + "%"+"</td></tr>")
// document.write("<tr><td>" + subject2 + "</td></td>" +totalMarks + "</td><td>"+obtainedMarks2 + "</td><td>" + per2 + "%"+"</td></tr>")
// document.write("<tr><td>" + subject3 + "</td></td>" +totalMarks + "</td><td>"+obtainedMarks3  + "</td><td>" + per3 + "%"+"</td></tr>")
// document.write("<tr><td>" + "</td></td>" +totalAll + "</td><td>"+ totalobtatainedMarks + "</td><td>" + percentage + "%" +"</td></tr>");
// document.write("</table>");

