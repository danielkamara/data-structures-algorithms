/* sumZero
Source: Colt Steele - JavaScript Algorithms and Data Structures Masterclass

Write a function called sumZero which accepts a sorted array of integers.
The Function should find the first pair where the sum is 0. Return an array
that includes both values that sum to zero or undefined if a pair does not exist.


sumZero9([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZer0([-2,0,1,3]) // undefined
sumZer0([1,2,3]) // undefined

*/

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

/* 
Time Complexity - o(N^2) 
Space Complexity - 0(1)
*/
