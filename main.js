// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(firstNum, secondNum){
  if (firstNum > secondNum){
    return firstNum
  }
  else {
    return secondNum
  }

}
// Your answer here
 let numberanswer = max(1,4)
 console.log(numberanswer)


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(firstNum, secondNum, thirdNum){
    if (firstNum > secondNum && firstNum > thirdNum){
      return firstNum
      }
      else if (secondNum > thirdNum){
      return secondNum
      }
      else
      {
        return thirdNum
      }
}

let result = maxOfThree(1,2,3)
console.log(result)

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    return true;
  } else {
    return false;
  }

}

let test = isVowel('a')

console.log(test)


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function addTwoNumbers (num1, num2){
  return num1 + num2;
}

let sum = addTwoNumbers(2,9)
console.log(sum)


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg (num1, num2, num3){
  return ((num1 + num2 + num3) / 3)
}

let average = avg(3,3,3)
console.log(average)


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(char){
  let word = char

  return word.length
}

let length = getLength("seventyfive")
console.log(length)

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2){
  if (num2 > num1){
    return true;
  } else {
    return false;
  }
}

let check = greaterThan(17,3)
console.log(check)

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return ("Hello, " + name)
}

let greeting = greet('Sam')
console.log(greeting)


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (param1, param2, param3, param4){
  return (param1 + param2 + "jumps in the freaking " + param3 + " tomorrow " + param4)
}

let sentence = madlib("fox ","cow ","Tuesday ","turkey ")
console.log(sentence)
