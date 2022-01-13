/*
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:
Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Example 2:
Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]

Assume:
- at least 1 of each number
- always array

Overall:
loop through array with left pointer starting at 0 and right pointer starting at 1
if right element is less, swap left and right elements
each iteration, increment left and set right to left + 1
return array

Psuedo:
initialize left to 0 and right to 1
loop through array
    right = left + 1;
    while left value < right value or right is undefined
        increment right
    if left value > right value, swap
return array

Time - O(N^2)
Space - constant
*/

const dutch = (arr) => {
    // initialize left and right
    let right = 1;
    // loop and swap when right is greater than left
    for(let left = 0; left < arr.length; left++){
        // reset right each iteration
        right = left + 1;
        // increment right until left is greater
        while(arr[left] < arr[right] && arr[right] !== undefined){
            right++;
        }
        // swap if left is greater
        if(arr[left] > arr[right]) [arr[left], arr[right]] = [arr[right], arr[left]] 
    }
    return arr;
}

console.log(dutch([0,1,2])); // [0,1,2]
console.log(dutch([0,2,1])); // [0,1,2]
console.log(dutch([2,1,0])); // [0,1,2]
console.log(dutch([2,0,1])); // [0,1,2]
console.log(dutch([1,0,2])); // [0,1,2]
console.log(dutch([1,2,0])); // [0,1,2]

console.log(dutch([0,0,1,1,2,2])); // [0,0,1,1,2,2]
console.log(dutch([2,2,1,1,0,0])); // [0,0,1,1,2,2]
console.log(dutch([1,2,0,1,1,2])); // [0,0,1,1,2,2]

console.log(dutch([2,2,2,2,1,0])); // [0,1,2,2,2,2]




