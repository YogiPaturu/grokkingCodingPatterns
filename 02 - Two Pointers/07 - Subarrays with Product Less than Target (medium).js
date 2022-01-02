/*
Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

Example 1:

Input: [2, 5, 3, 10], target=30 
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.
Example 2:

Input: [8, 2, 6, 5], target=50 
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
Explanation: There are seven contiguous subarrays whose product is less than the target.

Brute force:
Nested for loops
    if product of current array is less than target, push the next element and update product
    if greater than target, go the next element
Return arrays

Time - O(N^2)
Space - O(N)

Sliding window:
If product is above target, increment windowStart
If product is less than or equal,
    push current window into subarray and push into return array
    increment windowEnd
Return array

Time - O(N)
Space - O(N)
*/

const subarrs = (arr, target) => {
    const subarrays = []
    if(!Array.isArray(arr) || target <= 0 || arr.length === 0) return subarrays;

    let windowStart = 0,
    product = 1,
    subarr = [];

    for(let windowEnd = 0; windowEnd< arr.length; windowEnd++){
        product *= arr[windowEnd];
        while((product >= target) && windowStart < arr.length){
            product /= arr[windowStart]
            windowStart++;
        }

        subarr = [];
        for(let i = windowEnd; i > windowStart-1; i--){
            subarr.unshift(arr[i]);
            subarrays.push(subarr);
        }
    }

    return subarrays;
}


console.log((subarrs([1,2,3], 10))); // [[1], [2], [3], [1,2,3], [2,3]]
console.log((subarrs([1,2,3], 6))); // [[1], [2], [3], [1,2,3], [2,3]]
console.log((subarrs([1,2,3], 3))); // [[1], [2], [3]]
console.log((subarrs([1,2,3], 2))); // [[1], [2]]

console.log((subarrs([1,2,3], 0))); // []
console.log((subarrs([1,2,3], -1))); // []
console.log((subarrs([], 10))); // []
console.log((subarrs({}, 10))); // []