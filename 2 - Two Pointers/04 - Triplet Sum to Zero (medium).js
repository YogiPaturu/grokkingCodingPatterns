/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

sort array
loop through array and skip duplicates
    at each element, pass in that element and find the pair that adds up to 0 from that index forward
return triplet array

find pair(arr, target, left, triplets)
    while(left < right)
        if left + right === target, push to triplets
        else if left + right > target, decrement right
        else, increment left

Time: N*logN + N*N = N^2 + NlogN ≈ N^2
Space: N for the sort + 3*combos number of triplets
*/

const tripletSumToZero = (arr) => {
    if(!Array.isArray(arr) || arr.length < 3) return [];

    const tripArr = [];
    let targetSum = 0, left = 0, right = arr.length - 1;

    const pairWithTarget = (target, left) => {
        while(left < right){
            if((arr[left] + arr[right]) === target) {
                tripArr.push([-target, arr[left], arr[right]]);
                left++;
                right--;
                while(left < right && arr[left] === arr[left - 1]){
                    left++;
                }
                while(left < right && arr[right] === arr[right + 1]){
                    right--;
                }
            }
            else if((arr[left] + arr[right]) > target){
                right--;
            }
            else{
                left++;
            }
        }
    }

    arr.sort((a,b) => a-b);

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]) continue;
        targetSum = 0 - arr[i];
        left = i + 1;
        pairWithTarget(targetSum, left)
    }

    return tripArr;
}

console.log(tripletSumToZero([-1, 0, 1])); // [[-1,0,1]]
console.log(tripletSumToZero([-2, -1, 0, 1, 2])); // [[-1,0,1], [-2,0,2]]
console.log(tripletSumToZero([-2, -1, 0, 1, 2, 3])); // [[-1,0,1], [-2,0,2], [-2, -1, 3]]


console.log(tripletSumToZero([-1, 1, 0])); // [[-1,0,1]]
console.log(tripletSumToZero([0, -2, 2, -1, 1])); // [[-1,0,1], [-2,0,2]]
console.log(tripletSumToZero([1, 2, 3, -2, -1, 0])); // [[-1,0,1], [-2,0,2], [-2, 2, 3]]

console.log(tripletSumToZero({})); // []
console.log(tripletSumToZero([])); // []
console.log(tripletSumToZero([1])); // []
console.log(tripletSumToZero([1, 2])); // []
console.log(tripletSumToZero([1, 2, 3])); // []



function search_triplets(arr) {
    arr.sort((a, b) => a - b);
    const triplets = [];
    for (i = 0; i < arr.length; i++) {
      // skip same element to avoid duplicate triplets
      if (i > 0 && arr[i] === arr[i - 1]) { 
        continue;
      }
      search_pair(arr, -arr[i], i + 1, triplets);
    }
    return triplets;
}
  
function search_pair(arr, target_sum, left, triplets) {
    let right = arr.length - 1;
    while (left < right) {
      const current_sum = arr[left] + arr[right];
      if (current_sum === target_sum) { // found the triplet
        triplets.push([-target_sum, arr[left], arr[right]]);
        left += 1;
        right -= 1;
        while (left < right && arr[left] === arr[left - 1]) {
          left += 1; // skip same element to avoid duplicate triplets
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right -= 1; // skip same element to avoid duplicate triplets
        }
      } else if (target_sum > current_sum) {
        left += 1; // we need a pair with a bigger sum
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
}
console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// const tripletSumToZero = (arr) => {

// }

// console.log(tripletSumToZero(arr));