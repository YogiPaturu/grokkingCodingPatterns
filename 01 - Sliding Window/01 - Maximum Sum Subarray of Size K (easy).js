/*
Given an array of positive numbers and a positive number ‘k,’ 
find the maximum sum of any contiguous subarray of size ‘k’.
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

// Time - O(N)
// Space - O(1)
const maxSubArraySizeK = (k, array) => {
    let maxSum = windowSum = windowStart = 0;
    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        windowSum += array[windowEnd];
        if(windowEnd >= k - 1){
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= array[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}

const k1 = 3;
const arr1 = [2, 1, 5, 1, 3, 2]

const k2 = 2
const arr2 = [2, 3, 4, 1, 5];

console.log(maxSubArraySizeK(k2, arr2))