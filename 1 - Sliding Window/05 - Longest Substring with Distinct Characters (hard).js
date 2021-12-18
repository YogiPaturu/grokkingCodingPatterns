/*
Given a string, find the length of the longest substring, which has all distinct characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/

const longestSubStringDistinctChar = (string) => {
    let maxSubStr = -Infinity;
    let windowStart = 0;
    const dictionary = {};

    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        if(!dictionary.hasOwnProperty(string[windowEnd])) dictionary[string[windowEnd]] = 1;
        else {
            
            delete dictionary[string[windowEnd]]
        }
        maxSubStr = Math.max(maxSubStr, (windowEnd - windowStart + 1));
    }

    if(maxSubStr >= 0) return maxSubStr;
    else return 0;
}