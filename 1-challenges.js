// ***********************
// Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a prompt telling the user, "Enter a word to see if it is a palindrome", then create a way to check if the word is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.

// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check(word)
{
  word= word.toLowerCase();
   var not = true;
   var j;
   j = (word.length) -1 ;
   var cnt = j / 2;
    for( i = 0; i < cnt+1 ; i++,j-- )
    {
        if( word[i] != word[j] )
        {
           not = false;
           break; 
        }
    }
  if( not ) {
  console.log('True');
  }
  else {
console.log('False');

let str = word

function reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(reverse(word));
}
}
check('goiog');
check('jump')
