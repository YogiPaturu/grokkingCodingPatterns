/*
Given a set with distinct elements, find all of its distinct subsets.

Example 1:
Input: [1, 3]
Output: [], [1], [3], [1,3]

Example 2:
Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
*/

const subsets = (arr) => {
    const subsets = [[]];
    let newSubset = [],
    subsetsLen = 0;
    for(const num of arr){
        subsetsLen = subsets.length;

        for(let i = 0; i < subsetsLen; i++){
            newSubset = [...subsets[i]];
            newSubset.push(num);
            subsets.push(newSubset)
        }
    }
    return subsets;
}

console.log(subsets([1,3]));
console.log(subsets([1,3,5]));