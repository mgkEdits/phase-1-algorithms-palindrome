function isPalindrome(word) {
  // Write your algorithm here

  // Reverse the word
  const reversedStr = word.split('').reverse().join('');
    
  // Check if the word and its reverse are the same
  return word === reversedStr;
  
  
}

/* 
  Add your pseudocode here

  Function isPalindrome(word)
  
  // Reverse string
  reversedStr = ReverseString(str)
  
  // Check if the string and its reverse are the same
  If str equals reversedStr
    Return true
  Else
    Return false
  End If
End Function

*/

/*
  Add written explanation of your solution here

  We start with a string as input (e.g., "racecar").
  We reverse the string, which remains "racecar."
  We compare the string ("racecar") with its reverse ("racecar").
  Since they are equal, the function returns true, indicating that "racecar" is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
