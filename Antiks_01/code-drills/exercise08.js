// Write a function that takes in a number and reverses the order of the digits.
// Ex:
// Input: 1234
// Output:4321
// Input: 1201
// Output:1021
// Input: 4
// Output: 4


var arr = [1, 2, 3, 4, 5];
var reverse = function(arr) {
    var newArr = [];
    for ( var i = arr.length - 1; i >= 0; i-- ) {
        newArr.push(arr[i]);
        console.log(arr[i]);
    }
    console.log(newArr);
    return newArr;
};console.log("Is working");
reverse(arr);

//Matt's Answers:
function reverseDigit(num) {
    var numToStr = num.toString();
    var stringToArray = numToStr.split("");
    var reverseArray = stringToArray.reverse();
   
    return parseInt(reverseArray.join(""));
   }
   
   var reverseDigit = function(num) {
    var newNum = 0;
    var lastDigit;
    while (num > 0) {
      lastDigit = num % 10;
      newNum = newNum * 10 + lastDigit;
      num = parseInt(num / 10);
    }
   
    return newNum;
   };