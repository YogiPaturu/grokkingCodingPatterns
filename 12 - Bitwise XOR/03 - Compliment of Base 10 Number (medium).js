/*
Every non-negative integer N has a binary representation, for example, 8 can be represented as “1000” in binary and 7 as “0111” in binary.

The complement of a binary representation is the number in binary that we get when we change every 1 to a 0 and every 0 to a 1. For example, the binary complement of “1010” is “0101”.

For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.

Example 1:
Input: 8
Output: 7
Explanation: 8 is 1000 in binary, its complement is 0111 in binary, which is 7 in base-10.

Example 2:
Input: 10
Output: 5
Explanation: 10 is 1010 in binary, its complement is 0101 in binary, which is 5 in base-10.

Loop through number and flip binary
Convert to base ten
    0010
    ∑2*(i)^val
*/

const convertBinToDec = (num) => {
    let dec = 0;
    num = num.toString();
    for (let i = 0 ; i < num.length; i++) {
        dec += parseInt(num[num.length - 1 - i])*2**i;   
    }
    console.log(typeof dec)
    return dec;
}

const flipBin = (num) => {
    num = num.toString();
    let flippedBin = '';
    for(const bin of num){
        if(bin === '0') flippedBin += '1'
        else flippedBin += '0'
    }
    return parseInt(flippedBin);
}

const complimentBinToDec = (bin) => {
    return convertBinToDec(flipBin(bin));
}

console.log((complimentBinToDec(1010)))
