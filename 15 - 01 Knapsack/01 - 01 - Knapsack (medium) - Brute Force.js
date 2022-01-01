/*
Given two integer arrays to represent weights and profits of ‘N’ items,
we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’
Each item can only be selected once, which means either we put an item in the knapsack or we skip it.

Time - O(2^N + 2^N - 1) = O(2*2^N - 1) ≈ O(2^N)
Space - O(N) because of the DFS recursion
*/

const knapsack = (weights, profits, capacity) => {

    const recurse = (weights, profits, capacity, i) => {
        if(capacity <= 0 || i >= profits.length) return 0;
        let profitTake = 0;
        
        if(weights[i] <= capacity) profitTake = profits[i] + recurse(weights, profits, capacity - weights[i], ++i)
        const profitLeave = recurse(weights, profits, capacity, ++i)

        return Math.max(profitTake, profitLeave)
    }

    return recurse(weights, profits, capacity, 0);
}

const weight = [1,2,3,5];
const profit = [1,6,10,16];
console.log(knapsack(weight, profit, 3) );