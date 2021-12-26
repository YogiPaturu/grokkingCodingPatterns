/*
Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

Example 1:
Input: [1, 5, 12, 2, 11, 5], K = 3
Output: 5
Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].

Example 2:
Input: [1, 5, 12, 2, 11, 5], K = 4
Output: 5
Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].

Example 3:
Input: [5, 12, 11, -1, 12], K = 3
Output: 11
Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].
*/

// npm install --save collections
const Heap = require("collections/heap");

const kthSmallest = (arr, k) => {
    const maxHeap = new Heap([], null, ((a,b) => a - b));
    for(let i = 0; i < k;i++){
        maxHeap.push(arr[i])
    }
    for(let i = k; i < arr.length; i++){
        if(arr[i] < maxHeap.peek()){
            maxHeap.pop();
            maxHeap.push(arr[i]);
        }
    }
    return maxHeap.peek()
}

console.log(kthSmallest([1, 5, 12, 2, 11, 5], 3))