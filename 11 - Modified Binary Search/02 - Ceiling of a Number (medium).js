/*
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’.
The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

Example 1:
Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.

Example 2:
Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.

Example 3:
Input: [4, 6, 10], key = 17
Output: -1
Explanation: There is no number greater than or equal to '17' in the given array.

Example 4:
Input: [4, 6, 10], key = -1
Output: 0
Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.

if key is greater than last element, return -1
if key is less than first element, return 0

mid = start + end / 2

return mid when start and end meet

*/

const ceiling = (arr, key) => {
    if(key > arr[arr.length - 1]) return -1;
    if(key < arr[0]) return 0;

    let mid = 0,
    start = 0,
    end = arr.length - 1;

    while(start <= end){
        mid = Math.floor((start + end) / 2);
        if(key === arr[mid]) return mid;
        if(key > arr[mid]) start = mid + 1;
        else end = mid - 1;
    }

    return end;
}

console.log(ceiling([1,2,3,4,5], 6)); // -1
console.log(ceiling([1,2,3,4,5], 0)); // 0 
console.log(ceiling([1,2,3,8,12], 10)); // 3 
