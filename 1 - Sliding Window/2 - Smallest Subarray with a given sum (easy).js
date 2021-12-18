/*Given an array of positive numbers and a positive number ‘S,’
find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].


Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].


Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].
*/

// sliding window
// windowStart and windowEnd start at 0
// increment windowEnd
// add sum with windowEnd
// check if sum >= s
    // if it is, take min of current length of window and minWindow
    // subtract sum with windowStart
    // increment windowStart

// Time - O(N)
// Space - O(1)
const smallestSubArrayWithGivenSum = (s, array) => {
    let windowStart = sum = 0;
    let minWindow = Infinity
    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        sum += array[windowEnd];
        sum
        while(sum >= s){
            minWindow = Math.min(minWindow, (windowEnd - windowStart + 1));
            sum -= array[windowStart];
            windowStart++;
        }
    }
    if(minWindow !== Infinity) return minWindow;
    return 0;
}
console.log(smallestSubArrayWithGivenSum(1, [2, 1, 5, 2, 3, 2])) // 2
console.log(smallestSubArrayWithGivenSum(2, [])) // 2
console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2])) // 2