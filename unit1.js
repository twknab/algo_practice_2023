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
