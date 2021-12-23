/*
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space.
You are not allowed to modify the input array.

Example 1:
Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:
Input: [2, 1, 3, 3, 5, 4]
Output: 3

Example 3:
Input: [2, 4, 1, 4, 4]
Output: 4

Non zero integers
Assume: only 1 duplicated number
Validate argument
    Ensure it's an array. Otherwise return -1
    If array length less than 1, return -1
Cyclic sort through array
Loop through array
    if the index and value don't equal each other, return value
If no duplicates, return -1

Time - O(N + N) = O(2N) ≈ O(N) such that N is the length of the array
Space = O(1)
 */

const findDuplicate = (arr) => {
    let slow = arr[0];
    fast = arr[arr[0]];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    // find cycle length
    let current = arr[arr[slow]];
    let cycleLength = 1;
    while (current !== arr[slow]) {
        current = arr[current];
        cycleLength += 1;
    }
    
    return find_start(arr, cycleLength);
}
      
function find_start(arr, cycleLength) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    // move pointer2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
        pointer2 = arr[pointer2];
        cycleLength -= 1;
    }
    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
        pointer1 = arr[pointer1];
        pointer2 = arr[pointer2];
    }
    return pointer1;
}

console.log(findDuplicate([1,1,3,4])); // 1
console.log(findDuplicate([1,2,2,4])); // 2
console.log(findDuplicate([1,2,3,3])); // 3
console.log(findDuplicate([1,1,1,2,3])); // 1
console.log(findDuplicate([1,2,2,2,3])); // 2
console.log(findDuplicate([1,2,3,3,3])); // 3

console.log(findDuplicate([3,1,1,4])); // 1
console.log(findDuplicate([2,4,1,2])); // 2
console.log(findDuplicate([3,2,3,1])); // 3
console.log(findDuplicate([1,2,1,1,3])); // 1
console.log(findDuplicate([1,2,2,3,2])); // 2
console.log(findDuplicate([3,2,3,1,3])); // 3

console.log(findDuplicate({})); // -1
console.log(findDuplicate([])); // -1
console.log(findDuplicate([1])); // -1
console.log(findDuplicate([1, 2, 3, 4])); // -1