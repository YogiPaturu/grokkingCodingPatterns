/*
Given a list of non-overlapping intervals sorted by their start time,
insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

add all the ones that come before newInterval, such that currInterval's end < newInterval start
if there is an overlap, insert such that newInterval start is the min of the two and the end is the max of the two
push interval
push the remaining intervals

Time - O(N)
Space - O(N)
*/

const insertInterval = (intervals, newInterval) =>{
    if(!Array.isArray(intervals) && Array.isArray(newInterval)) return [newInterval];
    if(Array.isArray(intervals) && !Array.isArray(newInterval)) return intervals;
    if(!Array.isArray(intervals) && !Array.isArray(newInterval)) return -1;
    if(!intervals[0].length && newInterval.length) return [newInterval];
    if(intervals.length && !newInterval.length) return intervals;

    const merged = [];
    let i = 0;
    while(i < intervals.length && intervals[i][1] < newInterval[0]){
        merged.push(intervals[i])
        i++;
        i
    }
    while(i < intervals.length && intervals[i][0] < newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++;
        i
    }
    merged.push(newInterval)
    while(i < intervals.length){
        merged.push(intervals[i])
        i++;
    }
    return merged;
}

console.log(insertInterval([[1,4], [5,6]], [5,7])); // [[1,7]]
console.log(insertInterval([[1,4], [5,5]], [5,7])); // [[1,7]]
console.log(insertInterval([[1,4], [6,7]], [9,10])); // [[1,5]]

console.log(insertInterval([[1,3], [5,7], [8,12]], [4,6])); // [[1,3], [4,7], [8,12]]
console.log(insertInterval([[1,3], [5,7], [8,12]], [4,10])); // [[1,3], [4,12]]
console.log(insertInterval([[2,3],[5,7]], [1,4])); // [[1,4], [5,7]]

console.log(insertInterval([[2,3],[5,7]], [])); // [[2,3],[5,7]]
console.log(insertInterval([[]], [1,4])); // [[1,4]]
console.log(insertInterval({}, [1,4])); // [[1,4]]
console.log(insertInterval([[1,4]], {})); // [[1,4]]
console.log(insertInterval({}, {})); // -1

