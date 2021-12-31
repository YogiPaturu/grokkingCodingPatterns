/*
Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

Example 1:
Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
Output: 4
Explanation: The 5th smallest number among all the arrays is 4, this can be verified from 
the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]

Example 2:
Input: L1=[5, 8, 9], L2=[1, 7], K=3
Output: 7
Explanation: The 3rd smallest number among all the arrays is 7.
*/

// npm install --save collections

const Heap = require('collections/heap');

const kThSmallestNum = (arr, k) => {
    const minHeap = new Heap([], null, ((a,b) => b[0] - a[0]));
    for(const list of arr){
        minHeap.push([list[0], 0, list])
    }
   
    let val = 0,
    i = 0,
    list = [];

    while(minHeap.length > 0){
        [val, i, list] = minHeap.pop();
        --k;
        if(k === 0) break;
        if(list.length > i + 1) minHeap.push([list[i+1], i+1, list])
    }

    return val;
}

console.log(kThSmallestNum([[5,8,9], [1,7]], 3));