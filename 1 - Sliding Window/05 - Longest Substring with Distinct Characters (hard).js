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

/*
sliding window
increment end each iteration
if end char in map, change start such that it's max of last index of char and current start index 
update right char and last index ocurrence in a map
update max substring such that it's the max of current max and length of window

initialize charIndexMap, max substring, right char

for loop incrementing window end
    if right char in map, make windowStart equal to where right car is
    else, remove window start and increment until that char's value is 1
    take the max of substring and length of dictionary

return max substring

Time - O(N)/Linear such that N is the length of the string
Space - O(N)/Linear such that N is the lenght of the string
*/
const longestSubStringDistinctChar = (string) => {
    if(typeof string !== 'string') return -1;
    if(string.length === 0) return 0;
    if(string.length === 1) return 1;

    const charIndexMap = {};
    let maxSubStr = 0
    let windowStart = 0;
    let rightChar = '';

    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        rightChar = string[windowEnd];
        if(rightChar in charIndexMap) windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
        charIndexMap[rightChar] = windowEnd;
        maxSubStr = Math.max(maxSubStr, windowEnd - windowStart + 1);
    }

    return maxSubStr;
}


console.log(longestSubStringDistinctChar('')); // 0
console.log(longestSubStringDistinctChar('a')); // 1
console.log(longestSubStringDistinctChar('ab')); // 2
console.log(longestSubStringDistinctChar('abc')); // 3

console.log(longestSubStringDistinctChar('aaabc')); // 3
console.log(longestSubStringDistinctChar('abccc')); // 3
console.log(longestSubStringDistinctChar('aaabccc')); // 3
console.log(longestSubStringDistinctChar('aabccbb')); // 3
console.log(longestSubStringDistinctChar('aaabccc')); // 3
console.log(longestSubStringDistinctChar('abccde')); // 3

console.log(longestSubStringDistinctChar(5)); // -1
console.log(longestSubStringDistinctChar(['a', 'b'])); // -1
console.log(longestSubStringDistinctChar({'a': 1})); // -1