/* 
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
find the length of the longest contiguous subarray having all 1s.

Example 1:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:
Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

/*sliding window, because finding continuous subarray within certain constraints
loop through array
    build dictionary with counts
        increment value if it exists
    determine the max length of dictionary between now and max
    while, checking if (length of window - max length of dictionary) > k
        decrement or remove dictionary value at window start
        decrement window size
    
*/

const longestSubArray = (array, k) => {


}

console.log(longestSubArray([0], 1)); // 1
console.log(longestSubArray([0, 1], 1)); // 2
console.log(longestSubArray([0, 0, 1, 1], 1)); // 3
console.log(longestSubArray([0, 0, 1, 1, 1], 2)); // 5
console.log(longestSubArray([1, 1, 1, 0, 0], 2)); // 5


console.log(longestSubArray([1, 1, 1, 0, 0, 1, 1, 1], 2)); // 8
console.log(longestSubArray([1, 1, 1, 0, 0, 1, 0, 1], 2)); // 6
console.log(longestSubArray([1, 0, 1, 0, 0, 1, 1, 1], 2)); // 6

console.log(longestSubArray([1, 1, 1, 0], -1)); // 0
console.log(longestSubArray([], 2)); // 0
console.log(longestSubArray({}, 2)); // 0