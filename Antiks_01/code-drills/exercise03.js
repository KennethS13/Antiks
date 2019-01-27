// Write a function that takes an array of numbers and returns an array with each number doubled. 

// Ex:
// Input: [1,2,3]
// Output: [2,4,6]

// Input: [-1,-2,-3]
// Output: [-2, -4, -6]
//stack answer
var numbers = [1, 2, 3];
var doubleNumbers = [];
function doubled(arr){
    var doubledNumbers = [];
    for (var i = 0; i < arr.length; i ++){
     var dub = arr[i];
      var dubb = dub*2;
      doubledNumbers.push(dubb);
    }
    return doubledNumbers;
   
}
   
var collectionNumbers = {
    orginialNumbers: numbers,
    doubledNumbers: doubled(numbers)
};
   
console.log(collectionNumbers);
//stack answer
var collectionNumbers = {
    orginialNumbers: numbers,
    doubledNumbers: numbers.map(function(n) { return n*2; })
};
  
console.log(collectionNumbers);
//Matts answer
var double = function(arr){
    var newArr = [];
  
    for (var i = 0; i < arr.length; i++){
      const newNum = arr[i] * 2;
      newArr.push(newNum);
    }
  
    return newArr;
}
