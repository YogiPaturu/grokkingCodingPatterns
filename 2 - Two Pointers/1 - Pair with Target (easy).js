/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

// start with left and right pointer at each ends
    // if left + right is target, add both to indices and return
    // if left + right > target, decrement right
    // if left + right < target, increment left
// Time - O(N)/Linear such that N is the length of the array
// Space - O(1)/Constant
const pairWithTarget = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if((arr[left] + arr[right]) === target) return [left, right];
        else if((arr[left] + arr[right]) > target) right--;
        else left++;
    }
    return [-1, -1];
}

// function pairWithTarget(arr, targetSum) {
//     const nums = {}; // to store numbers and their indices
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       if (targetSum - num in nums) {
//           nums
//         return [nums[targetSum - num], i];
//       }
//       nums[arr[i]] = i;
//     }
//     return [-1, -1];
//   }

console.log(pairWithTarget([1, 2], 3)); // [0, 1]
console.log(pairWithTarget([1, -2], -1)); // [0, 1]
console.log(pairWithTarget([-1, -2], -3)); // [0, 1]

console.log(pairWithTarget([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(pairWithTarget([1, 2, 3, 4, 5], 3)); // [0, 1]
console.log(pairWithTarget([1, 2, 3, 5, 7], 5)); // [1, 2]
console.log(pairWithTarget([1, 2, 3, 4, 7], 7)); // [2, 3]
console.log(pairWithTarget([1, 2, 3, 4, 7], 6)); // [1, 3]
console.log(pairWithTarget([1, 2, 4, 5, 7], 8)); // [0, 4]

console.log(pairWithTarget([], 9)); // 0
console.log(pairWithTarget({}, 9)); // 0
console.log(pairWithTarget([1, 2, 3, 4, 5], 10)); // 0
console.log(pairWithTarget([1, 2, 3, 4, 5], 0)); // 0