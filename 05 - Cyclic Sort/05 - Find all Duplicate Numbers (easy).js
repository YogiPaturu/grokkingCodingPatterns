/*
Problem Statement

We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

Example 1:
Input: [3, 4, 4, 5, 5]
Output: [4, 5]
Example 2:

Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5]

Brute force:
loop from 1 to n with 2 pointers
    if negative, skip
    if right pointer - left === 0, turn both negative 
loop again
    return the negative numbers after turning them positive
Time - O(N^2/2 + N) ≈ O(N^2)
Space - Constant

Optimal:
loop and sort the array in place by swapping based on index
loop and return the duplicates
Time - O(N)
Space - Constant

*/

const allDups = (arr) =>{
    // loop and sort
    let curr = 0;
    for(let i = 0; i < arr.length; i++){
        curr = arr[i];
        if(curr !== i - 1) [curr, arr[i-1]] = [arr[i-1], curr]
    }
    
}

console.log(allDups([1,1,2,2,3,3])) // [1,2,3]
console.log(allDups([1,2,3,3])) // [3]
console.log(allDups([1,2,2,3])) // [2]
console.log(allDups([1,1,2,3])) // [1]