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

sliding window problem
what's the max window size, such that the window only has k number of 0's?
decrement/increment k to keep track of number of 0's in the window
increment windowEnd each iteration until k number of 0s in the window
take the max of windowlength each time we have k number of 0s
return max windowlength

Time - O(N)
Space - O(1)
*/


const longestSubArray = (array, k) => {
    if(!Array.isArray(array) || array.length <= 0 || k < 0) return -1;
    
    let left = 0,
    maxSize = 0,
    ones = 0;

    // expand the window size each iteration
    for(let right = 0; right < array.length; right++){
        // shrink when there are k number of 0's inside the window
        if(array[right] === 1) ones++;
        // this while loop ensures that the window size shrinks when there are too many (i.e., greater than k) zeros
        
        if((right - left + 1 - ones) > k){
            if(array[left] === 1) ones--;
            left++;
        }

        // capture maxSize AFTER ensuring window size is correct (i.e., not more than k number of zeros)
        maxSize = Math.max(maxSize, right - left + 1);
    }

    return maxSize;
}

console.log(longestSubArray([0,0,0,0], 2)); // 2
console.log(longestSubArray([1,1,1,1], 2)); // 4
console.log(longestSubArray([0,1,0,1], 2)); // 4
console.log(longestSubArray([1,0,0,1], 2)); // 4
console.log(longestSubArray([0,1,1,0], 2)); // 4
console.log(longestSubArray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6