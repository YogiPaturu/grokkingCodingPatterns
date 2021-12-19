/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
*/
/*
two pointers, starting at each end
new array with length of arr elements
add index initalized to length of arr - 1

while loop left < right
    if the square of left is bigger, add that to the arr and increment
    if the square of the right is bigger, add that to the arr and decrement
    decrement add index

return squaredArr

Time - O(N)/Linear such that N is the length of the array
Space - O(N)/Linear such that N is the length of the array
*/
const squaringSortedArray = (arr) => {
    if(!(Array.isArray(arr) || arr.length)) return [];
    const len = arr.length;
    const squaredArr = new Array(len);
    let left = 0, right = len - 1, addIndex = len - 1, leftSq = 0, rightSq = 0;

    while(addIndex >= 0){
        leftSq = arr[left] * arr[left];
        rightSq = arr[right] * arr[right];
        if(leftSq > rightSq) {
            squaredArr[addIndex] = leftSq;
            left++;
        }
        else {
            squaredArr[addIndex] = rightSq;
            right--;
        }
        addIndex--;
    }
    return squaredArr;
}

console.log(squaringSortedArray([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(squaringSortedArray([-4, -3, 2, 3])); // [4, 9, 9, 16]
console.log(squaringSortedArray([-4, -3, 0, 2, 3])); // [0, 4, 9, 9, 16]
console.log(squaringSortedArray([-4, -3, -2, -1])); // [1, 4, 9, 16]
console.log(squaringSortedArray([-2, -1, 0, 2, 3])); // [0, 1, 4, 4, 9]
console.log(squaringSortedArray([-3, -1, 0, 1, 2])); // [0, 1, 1, 4, 9]

console.log(squaringSortedArray([])); // []
console.log(squaringSortedArray({})); // []

