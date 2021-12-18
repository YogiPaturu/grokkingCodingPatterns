/*Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

// sliding window
// add dictionary for characters
// loop through string, incrementing wEnd
    // if dictionary doesn't have wEnd char, add it
        // while length of dictionary > k
            // take max of window length and maxSubstr
            // decrement wStart

// Time - O(N + N) -> O(N)
// Space - O(N)
const longestSubstring = (k, string) => {
    let windowStart = 0,
    maxSubstr = -Infinity;
    const dict = {};

    for(let windowEnd = 0; windowEnd < string.length; windowEnd++){
        if(!dict.hasOwnProperty(string[windowEnd])) dict[string[windowEnd]] = 1;
        else dict[string[windowEnd]]++;

        while(Object.keys(dict).length > k){
            if(dict[string[windowStart]] === 1) delete dict[string[windowStart]];
            else dict[string[windowStart]];

            windowStart++;
        }
        maxSubstr = Math.max(maxSubstr, (windowEnd - windowStart + 1));
    }
    if(maxSubstr >= 0) return maxSubstr;
    return 0;
}

console.log(longestSubstring(1, 'a')) // 1
console.log(longestSubstring(1, 'aa')) // 2
console.log(longestSubstring(1, 'aaa')) // 3
console.log(longestSubstring(1, 'abaa')) // 2
console.log(longestSubstring(2, 'abaa')) // 4
console.log(longestSubstring(2, 'araaci')) // 4