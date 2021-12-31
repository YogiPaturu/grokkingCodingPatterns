/*
Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

Example 1:
Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]

Example 2:
Input: L1=[5, 8, 9], L2=[1, 7]
Output: [1, 5, 7, 8, 9]

pop off a min heap and push to next until the heap is empty
NlogK

*/
// npm install --save collections
const Heap = require('collections/heap');

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const kWayMerge = (arr) => {
    const minHeap = new Heap([], null, ((a,b) => b.val - a.val));

    for(const list of arr){
        if(list !== null) minHeap.push(list);
    }

    let tail = curr = head = null;
    
    while(minHeap.length > 0){
        curr = minHeap.pop();
        if(head === null) head = tail = curr;
        else {
            tail.next = curr;
            tail = tail.next;
        }
        if(curr.next !== null) minHeap.push(curr.next);
    }
    return head;
}

const l1 = new Node(2);
l1.next = new Node(6);
l1.next.next = new Node(8);

const l2 = new Node(3);
l2.next = new Node(6);
l2.next.next = new Node(7);

const l3 = new Node(1);
l3.next = new Node(3);
l3.next.next = new Node(4);

const result = kWayMerge([l1, l2, l3])
console.log(result);
