// Q1. Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
(function odd (arr){
    var arr= [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    var oddNumbers = [];
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
    oddNumbers.push(arr[i]);
   }
   }
    console.log("Odd Numbers:", oddNumbers);
   })();
   
   //C. Sum of all numbers in an array
   
   (function(array){
       var array= [0,1,2,3,4,5];
       var result=[];
       for (var i = 0; i < array.length; i++) {
         result.push(i);
       }
       console.log(result);
     })();