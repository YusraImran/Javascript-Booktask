                   //Assigment no 17-20
                   //ARRAYS AND LOOP 


//1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

//Answer no 1
//var mulArray =[[],[],[]]
//document.write("var mulArray=[[],[],[]]");

//2. Declare and initialize a multidimensional array representing the following matrix:
//Answer no 2
// var multiArray =[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document .write(multiArray[0] + "<br>" + multiArray[1] + "<br>" +multiArray[2] + "<br>");

//3. Write a program to print numeric counting from 1 to 10.
//Answer no 3
// for(i=1; i<= 10; i++){
//   document.write(i +"<br>")
// }

//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
//Answer no 4

// var userNo =prompt("Enter a Number for table : ")
// for(i=1; i<= 15; i++){
//   document.write(userNo +"X" +"" +i+""+userNo * i +"<br>")
// }


//5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
//Answer no 5

// fruits =["apple",,"banana","mango","orange","stawberry"]

// for (var i=0; i<fruits.lenght; i++){
//   document.write(fruits[i]+ "<br>")
// }
// for (var i=0; i<fruits.lenght; i++){
//   document.write("Elements at index " + i + " is " + fruits[i]+ "<br>")
// }

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//Answer no 6

//   document.write("<h2>countting</h2>") 
//   for (i = 1; i <= 15; i++) {
//     document.write(i + " ")}


// document.write("<h2> Reverse countting</h2>") 
//   for (i = 10; i <= 0; i++) {
//     document.write(i + " ")}

      
// document.write("<h2> Even Number</h2>") 
//   for (i = 0; i <= 20; i++) {
//     if(i % 2== 0){
//     document.write(i)}}
    
//     document.write("<h2> Odd Number</h2>") 
//     for (i = 0; i <= 20; i++) {
//       if(i % 3== 0){
//       document.write(i)}}

//       document.write("<h2> Series</h2>") 
//       for (i = 2; i <= 20; i++) {
//         if(i % 2== 0){
//         document.write(i +"k" +"")}}
     
  

//7. You have an array                 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]                  
// Write a program to enable “search by user input” in an array.            
// After searching, prompt the user whether the given item isfound in the list or not. Example:
//Answer no 7

// A=["choclate cake","apple pie","cookies","chips","patties"]
// userInput =prompt("Enter a snack :")
// flag =false;
// for(i =0; i <= A.lenght; i++){
//   if(userInput == A [i]){
//     flag =true;
// userInput =A[i];
// index =i;
//   }
// }
// if(flag ==true){
//   document.write(userInput + "is available at index" + index+"in our bakery")
// }
// else{
//   document.write(userInput + "is not available")
// }
//8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
//Answer no 8
// A=[24, 53, 78, 91, 12]
// max =[0];
// for (var i =0; i <A.lenght; i++){
//   if(min > A[i]){
//     min =A[i];}}
// document.write("Array Items")
// for (var i =0; i<A.lenght; i++){
//   document.write(A[i], ",")
// }
// document.write("<br>The Largest number is " +max)

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
//Answer no 9

// A=[24, 53, 78, 91, 12]
// min =A[0];
// for (var i =0; i <A.lenght; i++){
//   if(min > A[i]){
//     min =A[i];}}
// document.write("Array Items")
// for (var i =0; i<A.lenght; i++){
//   document.write(A[i], ",")
// }
// document.write("<br>The smallest number is " +min)

//10. Write a program to print multiples of 5 ranging 1 to 100 .                 
//Answer no 10

// for (var i =1; i<= 100; i++){
//   if (i % 5 ==0){
//     document.write(i + ",")
//   }
// }

