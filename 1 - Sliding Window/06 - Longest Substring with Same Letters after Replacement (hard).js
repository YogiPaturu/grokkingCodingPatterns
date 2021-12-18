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
Sliding window, since we're finding continous set within certain parameters
Another way to frame this problem: what's the longest substring with k number of non-repeating characters in it
Window should shrink when 


Return 0 if string or k isn't valid
Loop through string, incrementing windowEnd


*/

const longestSubStr = (string, k) => {
    let maxSubStr = -Infinity;
    return maxSubStr;
}

// easy cases
console.log(longestSubStr('a', 1)) // 1
console.log(longestSubStr('aba', 1)) // 3
console.log(longestSubStr('aba', 2)) // 3
console.log(longestSubStr('aba', 3)) // 3

// hard cases
console.log(longestSubStr('aabcbccc', 1)) // 4
console.log(longestSubStr('aabcbccc', 2)) // 6
console.log(longestSubStr('aaababcc', 1)) // 4
console.log(longestSubStr('aaababcc', 2)) // 6

// edge cases
console.log(longestSubStr('aaabcbcc', -1)) // 0
console.log(longestSubStr('aaa', 4)) // 3