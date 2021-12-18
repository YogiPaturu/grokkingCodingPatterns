/*
Problem Statement
Given an array of characters where each character represents a fruit tree, you are given two baskets,
and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e.,
you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.

Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:
Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

// sliding window, because it's dealing with finding a continuous set under certain constraints
// loop through array and make a dictionary of unique chars
    // if the window end char doesn't exist, add it with value 1
    // if it does, increment value
    // until the length of the dictionary > 2
        // remove the window start char from the dictionary if its value is 1
        // otherwise, decrement value
        // increment the window start
    // take the max of the window and current max


// Time - O(N + N) -> O(N)
// Space - O(1)
const fruitsIntoBaskets = (array) => {
    if(!Array.isArray(array)) return 0;

    let maxFruit = -Infinity,
    windowStart = 0;
    const dictionary = {};

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        if(!dictionary.hasOwnProperty(array[windowEnd])) dictionary[array[windowEnd]] = 1;
        else dictionary[array[windowEnd]]++;

        while(Object.keys(dictionary).length > 2){
            if(dictionary[array[windowStart]] === 1) delete dictionary[array[windowStart]];
            else dictionary[array[windowStart]]--;

            windowStart++;
        }

        maxFruit = Math.max(maxFruit, (windowEnd - windowStart + 1));
    }
    
    if(maxFruit >= 0) return maxFruit;
    return 0;
}
const arr1 = ['A', 'B', 'C'];
const arr2 = ['A', 'A', 'B', 'B', 'C'];
const arr3 = ['A', 'B', 'B', 'C', 'C'];

const arr4 = ['A', 'A', 'A'];
const arr5 = [];
const arr6 = {'A': 2};

console.log(fruitsIntoBaskets(arr1)) // 2
console.log(fruitsIntoBaskets(arr2)) // 4
console.log(fruitsIntoBaskets(arr3)) // 4
console.log(fruitsIntoBaskets(arr4)) // 3
console.log(fruitsIntoBaskets(arr5)) // 0
console.log(fruitsIntoBaskets(arr6)) // 0