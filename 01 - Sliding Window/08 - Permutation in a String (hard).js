/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n! permutations.

Example 1:
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Example 2:
Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Example 3:
Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Example 4:
Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

Naive approach:
create all permutations of the pattern and store in an array called permArray
loop through string
    for each permutation in the permArray
        check if it's substring of input string
Time - O(m!*n)
Space - O(m!)


Sliding window:
- string is all lowercase letters
- pattern is all lowercase letters
- if pattern is empty, return true
- if string is empty, return false
- pattern can be longer than string
- don't have to return the permutation, just boolean

Overall:
move a sliding window, length of the pattern, keep track of frequency of the chars inside window
if frequency of chars in pattern and window are equivalent, return true
after going through the whole string, return false

Time - O(N + M) - loop through pattern and then string
Space - O(N) - frequency map length of string

Pseudo:
account for empty args: empty string -> return false; empty pattern -> return true
build pattern frequency map
    loop through pattern
        if char is in pattern frequency map, increment
        otherwise, add it and set it to one
loop through string with sliding window, such that the end increments each iteration
    at each increment, adjust the frequency map by adding the new char
    at each increment, if window is too big, shrink the window by incrementing left and adjust the frequency map
    expand window until its size is length of pattern; as you expand, build window frequency map
        while windowsize < pattern length
            increment right
            add character at right to frequency map, such that if that character isn't there add it, or if it is there, increment its value
    compare the two frequency maps to see if they are equal. if so, return true
return false


*/

const permString = (string, pattern) => {
    // account for edge cases: args aren't strings, string's length is 0, and pattern's length is 0
    if(typeof string !== "string" || typeof pattern !== "string" || string.length === 0) return false;
    if(pattern.length === 0) return true;

    // build pattern frequency map
    const patternFreq = {};
    for(const char of pattern){
        if(!(char in patternFreq)) patternFreq[char] = 1;
        else patternFreq[char]++;
    }

    // variables used for sliding window
    const windowFreq = {},
    isCharFreqEqual = char => patternFreq[char] === windowFreq[char];
    let left = 0,
    leftChar = "",
    rightChar = "",
    patLen = pattern.length;

    // sliding window loop through string and compare pattern frequency map and window frequency map
    for(let right = 0; right < string.length; right++){
        rightChar = string[right];
        leftChar = string[left];
        // at each increment, add rightchar into the pattern frequency map
        if(!(rightChar in windowFreq)) windowFreq[rightChar] = 1;
        else windowFreq[rightChar]++;
        // at each increment, if window's too big shrink it and adjust the frequency map
        if((right - left + 1) > patLen) {
            if(windowFreq[leftChar] === 1) delete windowFreq[leftChar]
            else windowFreq[leftChar]--;
            left++;
        }
        // expand window until it's length of pattern
        while(patLen !== (right - left + 1)){
            right++;
            rightChar = string[right];
            if(!(rightChar in windowFreq)) windowFreq[rightChar] = 1;
            else windowFreq[rightChar]++;
        }
        // compare the two freqency map values, if they're equal return true
        if(Object.keys(patternFreq).every(char => isCharFreqEqual(char))) return true;
    }
    return false;    
}

console.log(permString("abc", "bca")) // true
console.log(permString("abc", "dca")) // false


console.log(permString("aaabbcc", "aaa")) // true
console.log(permString("aaabbcc", "abb")) // true
console.log(permString("aaabbcc", "bcc")) // true
console.log(permString("adabbcc", "aad")) // true
console.log(permString("aaabbcc", "bab")) // true
console.log(permString("aaabbcc", "cbc")) // true
console.log(permString("aaabbcc", "dbc")) // false

console.log(permString("", "cbc")) // false
console.log(permString("aaabbcc", "")) // true