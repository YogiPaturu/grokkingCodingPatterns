/*
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:
Input: [4, 0, 3, 1]
Output: 2

Example 2:
Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

Create a set with array
Loop from 0 to length - 1 of array
    if doesn't have current number, return current number
Return undefined

Time - O(N)
Space - O(N)
------------------
Validate argument
Account for empty array

Perform cyclic sort, you won't be able to do it for the ones that outside the length of the array (that index would be undefined)
Loop to find the missing one

Time - O(N + N) ≈ O(N)
Space - O(1)
 */

const missingNum = (arr) => {
    if(!Array.isArray(arr)) return -1;
    if(!arr.length) return 0;

    let i = 0,
    j = 0;

    while(i < arr.length){
        j = arr[i]
        if(arr[i] !== i && j !== undefined) [arr[i], arr[j]] = [arr[j], arr[i]]
        else i++;
    }

    for(k = 0; k < arr.length; k++){
        if(arr[k] !== k) return k;
    }

    return arr.length;
}

console.log(missingNum([0,1,2,4,5])); // 3
console.log(missingNum([2,1,0,5,4])); // 3
console.log(missingNum([1,2,3,4,5])); // 0
console.log(missingNum([3,2,1,5,4])); // 0
console.log(missingNum([0,1,2,3,4])); // 5
console.log(missingNum([3,0,4,1,2])); // 5

console.log(missingNum({})); // -1
console.log(missingNum([])); // 0
