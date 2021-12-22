/*
We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:
Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Example 2:
Input: [2, 4, 1, 2]
Output: 3

Example 3:
Input: [2, 3, 2, 1]
Output: 4

Brute force: frequencyObj
loop to make an object
    if property doesn't exist, add with value of 1
loop from 0 to len of input array
    if object doesn't have current num, push to missing array
return missing array

Time - O(N + N) = O(2N) ≈ O(N)
Space - At worst, it's all duplicates, so the return array would be O(N-1) ≈ O(N)

Cyclic sort:
Swap based on what index it should be in
Loop through sorted array
    Push to missingNum array if current number doens't correspond to correct index
Return missingNum array

Time - O(N + N) = O(2N) ≈ O(N) such that n is the length of the input array
Space - O(N - 1) ≈ O(N) such that n is the length of the input array
*/

const findMissingNums = (nums) => {
    if(!Array.isArray(nums) || nums.length <= 1) return [];

    const missingNums = [];
    let i = 0,
    j = 0;

    while(i < nums.length){
        j = nums[i] - 1;
        if(nums[i] !== i + 1) [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
    }
    
    // el 1 should be in index 0
    nums.forEach((el, i) => {
        if(el !== i+1) missingNums.push(i+1);
    })

    return missingNums;
}

console.log(findMissingNums([1,2,2,4])); // [3]
console.log(findMissingNums([1,2,2,2])); // [3, 4]
console.log(findMissingNums([2,2,2,2])); // [1, 3, 4]

console.log(findMissingNums([2,1,4,2])); // [3]
console.log(findMissingNums([2,2,1,2])); // [3, 4]
console.log(findMissingNums([2,2,2,2])); // [1, 3, 4]
console.log(findMissingNums([2, 3, 1, 8, 2, 3, 5, 1])); // [1, 3, 4]

console.log(findMissingNums({})); // []
console.log(findMissingNums([])); // []
console.log(findMissingNums([1])); // []

