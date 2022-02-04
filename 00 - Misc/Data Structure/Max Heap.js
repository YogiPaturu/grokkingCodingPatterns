class MaxHeap{
    constructor(){
        this.data = [];
    }

    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    getLeftChild(i){
        return i*2+1;
    }

    getRightChild(i){
        return i*2+2;
    }

    swap(i1, i2){
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    }

    heapifyUp(){
        let currI = this.data.length - 1;
        let parentI = this.getParentIndex(currI);

        while(this.data[currI] > this.data[parentI]){
            this.swap(currI, parentI);
            currI = parentI;
            parentI = this.getParentIndex(currI);
        }
    }

    heapifyDown(){
        let currI = 0,
        leftChildI = this.getLeftChild(currI),
        rightChildI = this.getRightChild(currI),
        biggestI = leftChildI;

        while(this.data[leftChildI] !== undefined){
            if(this.data[rightChildI] !== undefined && this.data[rightChildI] > this.data[leftChildI]) {
                biggestI = rightChildI;
            }

            if(this.data[currI] < this.data[biggestI]) {
                this.swap(currI, biggestI);
                currI = biggestI;
                leftChildI = this.getLeftChild(currI),
                rightChildI = this.getRightChild(currI),
                biggestI = leftChildI
            }
            else return;
        }
    }

    push(val){
        this.data.push(val);
        this.heapifyUp();
    }

    poll(){
        const max = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.heapifyDown();

        return max;
    }
}

