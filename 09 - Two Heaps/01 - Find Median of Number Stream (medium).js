/*
Design a class to calculate the median of a number stream. The class should have the following two methods:

insertNum(int num): stores the number in the class
findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

Example 1:

1. insertNum(3)
2. insertNum(1)
3. findMedian() -> output: 2
4. insertNum(5)
5. findMedian() -> output: 3
6. insertNum(4)
7. findMedian() -> output: 3.5
 */
// npm install --save collections

const Heap = require("collections/heap");

class MedianOfAStream{
    constructor(){
        this.maxHeap = new Heap([], null, ((a,b) => a - b));
        this.minHeap = new Heap([], null, ((a,b) => b - a));
    }

    insert(num){
        if(this.maxHeap.length === 0 || this.maxHeap.peek() >= num) this.maxHeap.push(num);
        else this.minHeap.push(num);

        if(this.maxHeap.length > this.minHeap.length + 1) this.minHeap.push(this.maxHeap.pop());
        else if(this.maxHeap.length < this.minHeap.length) this.maxHeap.push(this.minHeap.pop());
    }

    findMedian(){
        if(this.maxHeap.length === this.minHeap.length) return (this.minHeap.peek() + this.maxHeap.peek())/2;
        return this.maxHeap.peek();
    }
}

const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert(3)
medianOfAStream.insert(1)
medianOfAStream
console.log(medianOfAStream.findMedian());
medianOfAStream.insert(5)
console.log(medianOfAStream.findMedian());
medianOfAStream.insert(4)
console.log(medianOfAStream.findMedian());