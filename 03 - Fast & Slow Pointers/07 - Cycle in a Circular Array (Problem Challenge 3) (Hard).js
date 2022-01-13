/*
We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index.
Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:
If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement. 
If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which
means the cycle should not contain both forward and backward movements.

Example 1:

Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
Example 2:

Input: [2, 2, -1, 2]
Output: true
Explanation: The array has a cycle among indices: 1 -> 3 -> 1
Example 3:

Input: [2, 1, -1, -2]
Output: false
Explanation: The array does not have any cycle.

Brute force:
loop through starting at 1st index
    cycle length number of times
    if you return to the same index, return true
otherwise, return false

Time - O(N^2)
Space - Constant

Two pointer:
1 fast pointer, 1 slow pointer
if the length is less than 2, return false
if there's a cycle, they'll intersect
if there's backwards and forward movement, it's not a cycle

Time - O(N)
Space - O(1)

Pseudo:
helper function: move
set pointer to the value of the current value incremented
check that the direction didn't change

set fast and slow to 0
set fast to move(move(fast))
set slow to move(slow)
if fast === slow, return true
*/

const cycle = (arr) => {

}

console.log(cycle([])); // false
console.log(cycle([1])); // false
console.log(cycle([2, 1, -1, -2])); // false
console.log(cycle([2, 2, -1, 2])); // true
console.log(cycle([1, 2, -1, 2, 2])); // true

