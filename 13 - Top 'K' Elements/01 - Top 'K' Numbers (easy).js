/*
Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

Example 1:
Input: [3, 1, 5, 12, 2, 11], K = 3
Output: [5, 12, 11]

Example 2:
Input: [5, 12, 11, -1, 12], K = 3
Output: [12, 11, 12]
*/

// npm install --save collections

const Heap = require("collections/heap");

const topKNums = (arr, k) => {
    const minHeap = new Heap([], null, ((a,b) => b - a));
    for(let i = 0; i < k ; i++){
        minHeap.push(arr[i]);
    }

    for(i = k; i < arr.length; i++){
        if(arr[i] > minHeap.peek()){
            minHeap.pop();
            minHeap.push(arr[i]);
        }
    }

    return minHeap.toArray();
}

console.log(topKNums([3, 1, 5, 12, 2, 11], 3));