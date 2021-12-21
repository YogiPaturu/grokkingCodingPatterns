/*
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence.
This means that the object with sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n) and without using any extra space.
For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:
Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

Example 2:
Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]

Example 3:
Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]

Validate argument
Account for empty array

Loop through array starting at 0
    Swap with element at element - 1 index, until the current element is in the right one
    increment
Return array

Time - O(N)
Space - O(1)
 */


const cyclicSort = (arr) => {
    if(!Array.isArray(arr) || !arr.length) return [];

    let i = 0,
    j = 0;

    while (i < arr.length){
        j = arr[i] - 1;

        if(arr[i] !== arr[j]){ // element 1 must be in index 0, element 2 must be in index 1, so on..
            [arr[i], arr[j]] = [arr[j], arr[i]] // swap with appropriate index (e.g., element 3 swap with index 2)
        }
        else i++;
    }

    return arr;
}

console.log(cyclicSort([1,2,3,4,5])); // [1,2,3,4,5]
console.log(cyclicSort([4,5,1,3,2])); // [1,2,3,4,5]
console.log(cyclicSort([1,4,2,3,5])); // [1,2,3,4,5]

console.log(cyclicSort({})); // []
console.log(cyclicSort([])); // []
