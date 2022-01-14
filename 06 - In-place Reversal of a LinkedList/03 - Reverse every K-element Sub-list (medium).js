/*
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

While the current pointer isn't at the end yet
    Move the kPointer k times or until it reaches the end
        reverse the chunk from current to kPointer
            increment current pointer
        connect the chunk with the next
Return the new head

Time - O(N)
Space - O(1)
*/

class Node{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

const reverse = (head, k) => {
    if(k <= 1 || head === null) return head;

    let curr = head,
    prev = null,
    next = null;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);


console.log(reverse(head));
