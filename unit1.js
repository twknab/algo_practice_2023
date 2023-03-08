/*
Given an array that contains duplicates, and only one unique number, write a 
method that finds and returns the unique number. You can assume that the array 
will never be empty and will definitely contain exactly one unique number.
*/
function uniqueNumber(arr) {
  // Add your code here
  // Store values into an object by key, with value being count of times encountered
  const seen = {};
  arr.forEach((val) => {
    if (val in seen) {
      seen[val]++;
      return;
    }
    seen[val] = 1;
  });

  // Return the value which has been encountered only once
  let uniqueVal;
  for (let key in seen) {
    if (seen[key] === 1) {
      uniqueVal = key;
    }
  }
  return uniqueVal;
}

/*
Write a method that returns true if two input strings are anagrams. An anagram 
of a string is another string that uses all characters of the first string
exactly once, but can have the characters re-arranged in any order.
*/
function isPairAnagram(s1, s2) {
  // Add your code here
  const seen = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i].toLowerCase();
    if (char in seen) {
      seen[char]++;
      return;
    }
    seen[char] = 1;
  }

  for (let j = 0; j < s2.length; j++) {
    const char = s2[j].toLowerCase();
    if (char in seen) {
      seen[char]--;
      return;
    }
    seen[char] = -1;
  }

  let hasUnmatch;
  for (const key in seen) {
    if (seen[key] !== 0) {
      hasUnmatch = true;
    }
  }
  return hasUnmatch ? false : true;
}
// Another solution, although the chained methods may introduce an additional loop:
// function isPairAnagram(s1, s2) {
// let s1Arr = s1.toLowerCase().split('').sort();
// let s2Arr = s2.toLowerCase().split('').sort();
// if (s1Arr.length !== s2Arr.length) {
//   return false;
// }
// let i = 0;
// let j = 0;
// let isMatch = true;
// while(i < s1Arr.length && j < s2Arr.length) {
//   if (s1Arr[i] !== s2Arr[j]) {
//     isMatch = false;
//   }
//   i++;
//   j++;
// }
// return isMatch;
// }
