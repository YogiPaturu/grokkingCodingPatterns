/*
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

Return true if none overlap, such that overlap means the end is less than the beginning for all

Brute force:
Two pointers, compare the ends and beginnings of all elements
Time - O(N^2/2) ≈ O(N^2)
Space - constant

More optimal:
Overall:
Sort and compare

Pseudo:
Sort array based on beginning (i.e, first element of each array)
Loop through sorted array
    Compare end time of current array with beginning time of next (as long as next exists, in otherwords it's not undefined)
        If current's end > next's beginning, return false
Return true

Time - O(NlogN)
Space - O(N)

*/

const isNotConflicting = (arr) => {
    // account for edge case
    if(arr.length <= 1) return true;

    // sort based on beginning times
    arr.sort((a,b) => a[0] - b[0]);

    // loop and compare
    let next = [],
    curr = [];
    for(let i = 0; i < arr.length; i++){
        curr = arr[i];
        next = arr[i+1];
        if(next !== undefined){
            if(curr[1] > next[0]) return false;
        }
    }
    return true;
}

console.log(isNotConflicting([[0,1], [1,2], [2,3]])); // true
console.log(isNotConflicting([[1,2], [0,1], [2,3]])); // true
console.log(isNotConflicting([[2,3], [1,2], [0,1]])); // true

console.log(isNotConflicting([[0,3], [2,3]])); // false
console.log(isNotConflicting([[2,3], [0,3]])); // false

console.log(isNotConflicting([])); // true
console.log(isNotConflicting([[1,2]])); // true
