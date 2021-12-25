/*
Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:
Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]

Example 2:
Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]
Time - O(N*2^N)
Space - O(N*2^N)
*/

const subsetsNoDuplicates = (arr) => {
    const subsets = [[]];
    if(arr.length <= 0) return subsets;

    let startI = 0,
    endI = 0,
    newSubset = [];

    arr.sort((a,b) => a-b);

    for(let i = 0; i < arr.length; i++){
        startI = 0;
        if(i > 0 && arr[i] === arr[i-1]) startI = endI + 1
        endI = subsets.length - 1;
        while(startI <= endI){
            newSubset = [...subsets[startI]];
            newSubset.push(arr[i]);
            subsets.push(newSubset);
            startI++
        }
    }

    return subsets;
}

console.log(subsetsNoDuplicates([1,2,1]));