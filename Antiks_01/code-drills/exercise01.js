// Write a function that takes in a string and if the string is a string representation of a number returns the negative version of that number otherwise throw and Error.

// Ex:
// Input: '1'
// Output: -1

// Input: '4'
// Output: -4

// Input: 'cow'
// Error



const getNegative = function (numString){
    const negNum = numString * -1;
   
    if (isNaN(negNum)){
      throw "input must be coercible to a number"
    }
   
    return negNum
}