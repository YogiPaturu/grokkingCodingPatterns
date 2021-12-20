/*

Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet.
If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

x1 + x2 + x3 = target
x2 + x3 = target - x1 = targetSum

minSum = target - x1 - x2 - x3
minSum = targetSum - x2 - x3
minSum = Infinity

sort array
loop
    at each element, find the pair later in the array that sums to the (target - current el) and take the sum of all 3 elements
return the min


sort the array
loop through it
    left = i + 1
    at each element pass in to helper function: curr, left
return minSum

pairClosestTarget(curr, left)
while left < right
    if left + right = target - curr
        minSum = Math.min((curr + left + right), minSum)
        break
    else if left + right > target - curr
        minSum = Math.min((curr + left + right), minSum)
        right--
    else
        minSum = Math.min((curr + left + right), minSum)
        left++
*/

const tripleSumToTarget = (arr, target) => {
    if(!(Array.isArray(arr) || typeof target === 'number')) return 'Incorrect inputs';
    if(!arr.length) return 0;

    let minSum = Infinity,
    left = 0,
    len = arr.length,
    right = len - 1,
    fromTarget = Infinity;
    
    const pairClosestTarget = (curr, left) => {
        right = len - 1;
        while(left < right){
            if((arr[left] + arr[right]) === (target - curr)){
                minSum = Math.min((curr + arr[left] + arr[right]), minSum);
                break
            }
            else if((arr[left] + arr[right]) > (target - curr)){
                if(curr + arr[left] + arr[right] - target < fromTarget){
                    fromTarget = curr + arr[left] + arr[right] - target;
                    minSum = Math.min((curr + arr[left] + arr[right]), minSum);
                }
                right--;
            }
            else {
                if(curr + arr[left] + arr[right] - target < fromTarget){
                    fromTarget = curr + arr[left] + arr[right] - target;
                    minSum = Math.min((curr + arr[left] + arr[right]), minSum);
                }
                left++
            }
        }
    }

    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        left = i + 1;
        pairClosestTarget(arr[i], left)
    }

    return minSum;
}

console.log(tripleSumToTarget([1,2,3], 6)); // 6
console.log(tripleSumToTarget([1,2,3], 7)); // 6
console.log(tripleSumToTarget([-1,-2,-3], -6)); // -6

console.log(tripleSumToTarget([-1,0,1,2,3,4], 6)); // 6
console.log(tripleSumToTarget([-2, 0, 1, 2], 2)); // 1
console.log(tripleSumToTarget([-3, -1, 1, 2], 1)); // 0
console.log(tripleSumToTarget([1, 0, 1, 1], 100)); // 3