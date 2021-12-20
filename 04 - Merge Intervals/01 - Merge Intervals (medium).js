/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Example 1:
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].

Example 2:
Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

Example 3:
Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.

verify length of array, it needs to be >= 2
sort array
initialize a mergedArr, start, end, and currInterval
loop through array
    set currInterval
    if(currInterval[0] <= )
return mergedArr

Time - O(NlogN) such that N is the number of elements in array
Space - O(N)

}

*/
/*
function mergeInterval(intervals) {
    if(intervals.length < 2) return intervals;

    intervals.sort((a, b) => a.start - b.start);
  
    const mergedIntervals = [];
    let start = intervals[0][0],
    end = intervals[0][1];

    for(const interval of intervals) {
        if (interval[0] <= end) end = Math.max(interval[1], end); // overlapping intervals, adjust the 'end'
        else {   // non-overlapping interval, add the previous interval and reset
            mergedIntervals.push([start, end]);
            start = interval[0];
            end = interval[1];
        }
    }
    
    mergedIntervals.push([start, end]); // add the last interval

    return mergedIntervals;
}
*/

const mergeInterval = (array) => {
    if(!Array.isArray(array)) return -1;
    if(array.length < 2) return array;

    array.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let start = array[0][0],
    end = array[0][1];

    for(const interval of array){
        if(interval[0] <= end) end = Math.max(end, interval[1])
        else{
            merged.push([start, end])
            start = interval[0];
            end = interval[1];
        }
    }
    merged.push([start, end])
    return merged;
}


console.log(mergeInterval([[1,4], [5,6]])) // [[1,4], [5,6]]
console.log(mergeInterval([[5,6], [1,4]])) // [[1,4], [5,6]]
console.log(mergeInterval([[1,5], [5,6]])) // [[1, 6]]
console.log(mergeInterval([[1,4], [3,6]])) // [[1, 6]]

console.log(mergeInterval([[1,4], [5,6], [8, 9]])) // [[1,4], [5,6], [8,9]]
console.log(mergeInterval([[1,5], [5,6], [6, 9]])) // [[1, 9]]
console.log(mergeInterval([[1,4], [3,6], [5,9]])) // [[1, 9]]

console.log(mergeInterval({0:1, 1:2})) // -1
console.log(mergeInterval([[]])) // [[]]
console.log(mergeInterval([[1, 2]])) // []


