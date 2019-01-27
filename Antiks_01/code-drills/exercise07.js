// What is the difference between == and === ? What is an example of a problem that == might introduce? 


//The differnce between the == and === is that the === has to be exactly truthy, or a strict equality. This means both the type and the value we are comparing have to be the same.
//When using == in JavaScript we are testing for loose equality. Double equals also performs type coercion. Type coercion means that two values are compared only after attempting to convert them into a common type.
//An example of when this might be a problem would be when we need a strict equality and we return the wrong output from a loose equality.
77 === '77'
// false (Number v. String)
77 == '77'
// true
false === 0
// false (Different type and different value)
false == 0
// true
//Furthermore issues may arise due to the output of falsy value comparisons.
// false — boolean false
// 0 — number zero
// “” — empty string
// null
// undefined
// NaN — Not A Number
// When comparing any of our first three falsy values with loose equality, they will always be equal! That’s because these values will all coerce into a false boolean.
false == 0
// true
0 == ""
// true
"" == false
// true
//When comparing null and undefined, they are only equal to themselves and each other:
null == null
// true
undefined == undefined
// true
null == undefined
// true
//If you try to compare null to any other value, it will return false.
//Lastly, NaN is not equivalent to anything. Even cooler, it’s not even itself!
NaN == null
// false
NaN == undefined
// false
NaN == NaN
// false

// Triple Equals is superior to double equals. Whenever possible, you should use triple equals to test equality. By testing the type and value you can be sure that you are always executing a true equality test.