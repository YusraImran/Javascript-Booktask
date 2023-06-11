//Assigment no 13-15
                                       //ARRAYS

// 1. Declare an empty array using JS literal notation to storestudent names in future.
//Answer no 1

// var studentNames =[];
// console.log(studentNames[0]="subhan")
// console.log(studentNames[1]="sobiya")

// 2. Declare an empty array using JS object notation to storestudent names in future.
//Answer no 2
// var studentNames =[];
// console.log(studentNames[0]="subhan")
// console.log(studentNames[6]="sobiya")
// console.log(studentNames[9]="soha")


// 3. Declare and initialize a strings array.
//Answer no 3

// var series =["You","Thursday,","Ginny and Geogria"]
// console.log(series)

// 4. Declare and initialize a numbers array.
//Answer no 4

// var num =[1,2,3,4]
// console.log(num)

// 5. Declare and initialize a boolean array.
//Answer no 5


// var boolen=[true,flase, true,flase]


// 6. Declare and initialize a mixed array.
//Answer no 6

//var mixedarry =["subhan",45, "mango",12,"fries",true,flase ];


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,  BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

//Answer no 7
// var education=[

// "1.SSc",
// "2.HSC",
// "3.BSC",
// "4.BS",
// "5.BCOM",
// "6.MS",
// "7.M.Phil",
// "8.Phd",
// ];
// document.write( "<h1>Qualification</h1>")
// for (var i =0; i <education.length; i++){
//   document.write( education [i]+ "<br>");
 
// }
//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores & percentages of students like:

//Answer no 8
// var studentnames =["subhan","sara","soha"];
// var studentscore =["300","400","250"];
// document.write("<h2> Students Result </h2>")

// for(var i=0; i< studentnames.length; i++){
//   var percentage =(studentscore[i]/500)*100;
//   document.write("Score of " + studentnames[i] + "is" +studentscore[i] +".percentage: " +percentage + "<br>");
// }


// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to thebeginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
//Answer no 9
// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
//Answer 10
// var studentscore =[40,100, 1,5,25,10];
// studentscore.socrt(function(a,b){return a-b});
// console.log(studentscore);
// // 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
//Answer no 11

// var cities =["karachi","punjab","Islamabad","Quetta","lahore"]
// var selectedCities =cities.slice(1,3);
// console.log(selectedCities);

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
//Answer no 12
// var arr = ["This", "is","my" ,"cat"];
// var str =arr.join ("");
// alert(str);



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
// Answer no 13

// var value =[];
// value.push("First");
// value.push("second");
// value.push("Third");
// var first =value.shift();
// console.log(first);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last Instx First Out)
// Answer no 14
// var values =[];
// values.push("value 1");
// values.push("value 2");
// values.push("value 3");
// var reversedvalues =[];
// while(values.length > 0){
//   reversedvalues.push(values.pop());
// }
// alert("Reversed array " +reversedvalues);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:

//Answer no 15
// var phoneManufactures =[
//   "Apple",
//   "samsung",
//   "Redmi",
//   "Realme",
//   "Nokia",
//   "sony",
// ];
// document.write("<select>");
// for(var i=0 ; i <phoneManufactures.length;i++) {
//   document.write("<option>" + phoneManufactures[i] +"</option>")
// }

