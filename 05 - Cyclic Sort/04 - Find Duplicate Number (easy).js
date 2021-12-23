/*
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space.
You are, however, allowed to modify the input array.

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
    if(!Array.isArray(arr)) return -1;
    if(arr.length < 1) return -1;

    let j = 0,
    i = 0;

    // sort and return duplicate
    while(i < arr.length){
        if(arr[i] !== i+ 1){
            j = arr[i] - 1;
            if(arr[i] !== arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
            else return arr[i];
        }
        else {
            i++;
        }
    }

    return -1;
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