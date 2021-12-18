/**
 Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
 after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

/*
if not array, return 0
if length 0, return 0

initialize nonDup and next to 0
if next is not a duplicate, increment both
otherwise, increment next until it's nonDup and set that element to nonDup index 

return nonDup + 1

Time - O(N)/Linear such that N is the length of the array
Space - O(1)/Constant
*/

const removeDup = (arr) => {
    if(!Array.isArray(arr)) return 0;
    if(!arr.length) return 0;

    let nonDup = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[nonDup] !== arr[i]) {
            nonDup++;
            arr[nonDup] = arr[i];
        }
    }

    return nonDup + 1;
}

console.log(removeDup([1,2,3])); // 3
console.log(removeDup([1,1,2,3])); // 3
console.log(removeDup([1,2,2,3])); // 3
console.log(removeDup([1,2,3,3])); // 3

console.log(removeDup([1,1,1,2,2,2,3,3,3])); // 3
console.log(removeDup([1,1,1,1,1,1,1])); // 1
console.log(removeDup([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(removeDup([2, 2, 2, 11])) // 2

console.log(removeDup([])); // 0
console.log(removeDup('string')); // 0
console.log(removeDup({0:1, 1:1})); // 0