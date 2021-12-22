/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
Write a function to return the count of such triplets.

Example 1:
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:
Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

Triplets with Smaller Sum:
sort array
initalize tripletsWithSmallerSum to 0
loop thorugh array
    tripletsWithSmallerSum += invoke pair less than target function on the next index, associated target, and count
return tripletsWithSmallerSum
-----
Pairs Less than Target(startIndex, target):

initialize left to startIndex,
right to length of array,
count to 0

while they don't cross
    if sum of the two pointers are less than the target
        increment count
        increment left
    else
        decrement right
return count

Time: O(NlogN + N*N) = O(NlogN + N^2) ≈ O(N^2)
Space: O(N) for the sort

Only using the test cases provided by the problem for the sake of time
*/

const countPairsSmallerSum = (arr, startIndex, targetSum) => {
    let pairs = 0,
    left = startIndex,
    right = arr.length - 1;

    while(left < right){
        if(arr[left] + arr[right] < targetSum){
            pairs+=right-left;
            left++;
        }
        else{
            right--;
        }
    }

    return pairs;
}

const countTripletsSmallerSum = (arr, target) => {
    if(arr.length < 3) return 0;

    let tripletsWithSmallerSum = 0,
    pairStartIndex = 0,
    pairTargetSum = 0;

    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length; i++){
        pairTargetSum = target - arr[i];
        pairStartIndex = i + 1;
        tripletsWithSmallerSum += countPairsSmallerSum(arr, pairStartIndex, pairTargetSum)
    }

    return tripletsWithSmallerSum;
}



console.log(countTripletsSmallerSum([-1, 0, 2, 3], 3)); // 2
console.log(countTripletsSmallerSum([-1, 4, 2, 1, 3], 5)); // 4
