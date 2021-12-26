console.log(1^3^4^5);
console.log(3^2);
console.log(1^2^4^5);
console.log(2^3);

/*
In a non-empty array of integers, every number appears twice except for one, find that single number.

Example 1:

Input: 1, 4, 2, 1, 3, 2, 3
Output: 4
Example 2:

Input: 7, 9, 7
Output: 9

*/

const singleNumber = (arr) => {
    let xOR = 0;
    for(const num of arr){
        xOR ^= num;
    }
    return xOR;
}

console.log((singleNumber([7,9,7])));