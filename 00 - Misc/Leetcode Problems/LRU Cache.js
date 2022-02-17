/*
LRUCache needs put and get methods
If you can't find in cache, return -1
*/

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = {};
        this.DLL = new DoublyLinkedList();
    }

    get(key) {
        // in cache
            // set the head to value(node) at key
            // return value
        // not in cache
            // return -1
        if(key in this.cache){
            this.DLL.setHead(this.cache[key]);
            return this.cache[key].value;
        }
        else return -1;
    }

    put(key, value) {
        // in cache
            // update current value with new value
            // set head
        if(key in this.cache){
            this.cache[key].value = value;
            this.DLL.setHead(this.cache[key]);
        }
        // not in cache
            // below capacity
                // add to cache
                // set head
                // increment size
            // at capacity
                // remove the tail
                // add to cache
                // set head
        else{
            if(this.size < this.capacity){
                this.cache[key] = new Node(key, value);
                this.DLL.setHead(this.cache[key]);
                this.size++;
            }
            else{
                const delKey = this.DLL.tail.key;
                this.DLL.removeUpdateTail();
                delete this.cache[delKey];

                this.cache[key] = new Node(key, value);
                this.DLL.setHead(this.cache[key]);
            }
        }
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        // node is already the head
        if(this.head === node) return;
        // no nodes
        else if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        // 1 node
        else if(this.head === this.tail){
            node.next = this.head; // this.head
            this.head.prev = node;
            this.head = node;
        }
        // >1 node
        else{
            if(this.tail === node) this.removeUpdateTail();
            node.removeBinding();
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    removeUpdateTail() {
        // no nodes - not going to hit this because it means no nodes in the list (we check for the condition in the SetHead)
        if(this.tail === null) return;
        // 1 node - not going to hit this because we check for the condition in the SetHead
        else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        // >1 node
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    removeBinding() {
        // Node A <-> Node C
        if(this.prev !== null) this.prev.next = this.next;
        if(this.next !== null) this.next.prev = this.prev;
        this.prev = null;
        this.next = null;
    }
}

const lru = new LRUCache(2);
lru.put(1, 1); // cache is {1=1}
lru.put(2, 2); // cache is {1=1, 2=2}
lru.get(1);    // return 1
lru.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lru.get(2);    // returns -1 (not found)
lru.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lru.get(1);    // return -1 (not found)
lru.get(3);    // return 3
lru.get(4);    // return 4