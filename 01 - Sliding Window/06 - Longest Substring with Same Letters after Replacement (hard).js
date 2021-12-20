/* Problem Statement
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, 
find the length of the longest substring having the same letters after replacement.

Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc". 
*/

/*
validate arguments
initialize maxSubStr, freq, windowStart

loop through string, incrementing windowEnd each iteration
    if rightChar not in freq, add it with value 1
    else increment that value

    while length of freq > k + 1
        if freq[windowStart] is 1, delete it
        else decrement it
        increment windowStart
    
    take the max of maxSubStr and the length of window

return maxSubStr

*/

const longestSubStr = (string, k) => {
    if(typeof string !== 'string' || k < 0) return -1;
    if(!string.length) return 0;

    const freq = {};
    let maxSubStr = 0, windowStart = 0, maxFreq = 0, leftChar = '', rightChar = '';
    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        rightChar = string[windowEnd];

        if(!(rightChar in freq)) freq[rightChar] = 1;
        else freq[rightChar]++;
        maxFreq = Math.max(maxFreq, freq[rightChar])

        if((windowEnd - windowStart + 1 - maxFreq) > k){
            leftChar = string[windowStart]
            freq[leftChar]--;
            windowStart++;
        }
        freq
        maxSubStr = Math.max(maxSubStr, windowEnd - windowStart + 1);
    }

    return maxSubStr;
}

console.log(longestSubStr('aab', 1)); // 3
console.log(longestSubStr('aba', 1)); // 3
console.log(longestSubStr('abb', 1)); // 3

console.log(longestSubStr('aabaa', 1)); // 5
console.log(longestSubStr('baaaa', 1)); // 5
console.log(longestSubStr('aaaab', 1)); // 5
console.log(longestSubStr('abbaa', 2)); // 5
console.log(longestSubStr('bbaaa', 2)); // 5
console.log(longestSubStr('aaabb', 2)); // 5

console.log(longestSubStr('aabaac', 2)); // 6
console.log(longestSubStr('baaaac', 2)); // 6
console.log(longestSubStr('aaaabc', 2)); // 6
console.log(longestSubStr('abbaac', 2)); // 5
console.log(longestSubStr('bbaaac', 2)); // 5
console.log(longestSubStr('aaabbc', 2)); // 5

console.log(longestSubStr('aabaacc', 2)); // 6
console.log(longestSubStr('baaaacc', 2)); // 6
console.log(longestSubStr('aaaabcc', 2)); // 6
console.log(longestSubStr('abbaacc', 2)); // 5
console.log(longestSubStr('bbaaacc', 2)); // 5
console.log(longestSubStr('aaabbcc', 2)); // 5

console.log(longestSubStr('aabccbb', 2)); // 5
console.log(longestSubStr('abbcb', 1)); // 4
console.log(longestSubStr('abccde', 1)); // 3

console.log(longestSubStr('', 1)); // 0
console.log(longestSubStr('abccde', -1)); // -1



