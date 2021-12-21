/*
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false

Find the midpoint of the linked list using fast and slow pointers
Reverse from the middle to the end
Start with a slow pointer on each head
If any nodes aren't equivalent, return false
If both nods equal null, return true

Time - O(N + N + N) = O(3N) ≈ O(N)
Space - O(1);
*/