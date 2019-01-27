// Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.
// Ex:
// Input: Tammer Galal
// Output: tammergalal
// Input:    favorite tree    ever
// Output: favoritetreeever
// Input: one word
// Output: oneword

//Matt's answer:
var singleWord = function (str){

    var newStr = '';
  
    for (var i = 0; i < str.length; i++){
      if (str[i] !== ' ' ){
        newStr += str[i];
      }
    }
  
    return newStr.toLowerCase();
}
  
var singleWord = function (str){
  
    var newStr = str.toLowerCase().replace(/\s/g,'')

    return newStr;
}