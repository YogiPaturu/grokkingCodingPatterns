/*
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:
Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.

Example 2:
Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.

Example 3:
Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.

Example 4:
Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.

Return the value after the match or next highest
Binary search
if key === first, return next one
if key === last, return first
if key < first, return last
if key > last, return first

initialize start, end, and mid
loop while start <= end
    if key === mid, return mid + 1
    if key > mid, mid = avg(mid, end)
    else, mid = avg(0, mid);

if(mid + 1 is undefined) return first
else return mid + 1
*/

const nextLetter = (arr, key) => {
    if(!Array.isArray(arr) || typeof key !== 'string') return -1;
    if(arr.length < 1) return -1;

    if(key < arr[0]) return arr[0]
    if(key >= arr[arr.length-1]) return arr[0];

    const avg = (num1, num2) => Math.floor((num1 + num2)/2);
    let start = 0,
    end = arr.length - 1,
    mid = 0;

    while(start <= end){
        mid = avg(start, end);
        if(key === arr[mid]) return arr[mid+1];
        else if(key > arr[mid]) start = mid + 1;
        else end = mid - 1;
    }

    if(arr[mid+1] === undefined) return arr[0];
    else return arr[mid+1];
}

console.log(nextLetter(['a', 'b', 'c', 'd'], 'a')); // b
console.log(nextLetter(['a', 'b', 'c', 'd'], 'b')); // c
console.log(nextLetter(['a', 'b', 'c', 'd'], 'c')); // d
console.log(nextLetter(['a', 'b', 'c', 'd'], 'd')); // a

console.log(nextLetter(['a', 'b', 'c', 'd'], 'z')); // a
console.log(nextLetter(['b', 'c', 'd'], 'a')); // a

console.log(nextLetter([], 'a')); // -1
console.log(nextLetter({}, 'a')); // -1
console.log(nextLetter(['a', 'b'], 4)); // -1