// ***********************
// Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a prompt telling the user, "Enter a word to see if it is a palindrome", then create a way to check if the word is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.

// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  var newString = "hello";

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
     last character of the string, "o"
     As long as i is greater than or equals 0, the loop will go on
     We decrement i after each iteration */
  for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
}

reverseString('hello');