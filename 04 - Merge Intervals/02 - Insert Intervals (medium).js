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

push interval
sort array
start = intervals[0][0]
end = intervals[0][1]
loop through array
    if(curr[0] <= end) reassign end to be curr[1]
    else
        push to merged
        start = curr[0]
        end = curr[1]

push last interval
return interval
*/

const insertInterval = (intervals, newInterval) =>{
    if(!Array.isArray(intervals) && Array.isArray(newInterval)) return newInterval;
    if(Array.isArray(intervals) && !Array.isArray(newInterval)) return intervals;
    if(!Array.isArray(intervals) && !Array.isArray(newInterval)) return -1;
    if(!intervals[0].length && newInterval.length) return newInterval;
    if(intervals.length && !newInterval.length) return intervals;

    intervals.push(newInterval);
    intervals.sort((a,b) => a[0] - b[0]);

    const merged = [];
    let start = intervals[0][0],
    end = intervals[0][1];

    for(const currInterval of intervals){
        if(currInterval[0] <= end) end = Math.max(end, currInterval[1]);
        else {
            merged.push([start, end]);
            start = currInterval[0];
            end = currInterval[1];
        }
    }

    merged.push([start, end]);

    return merged;
}

console.log(insertInterval([[1,4], [3,6]], [5,7])); // [[1,7]]
console.log(insertInterval([[1,4], [4,5]], [5,7])); // [[1,7]]
console.log(insertInterval([[1,4], [4,5]], [2,3])); // [[1,5]]

console.log(insertInterval([[1,3], [5,7], [8,12]], [4,6])); // [[1,3], [4,7], [8,12]]
console.log(insertInterval([[1,3], [5,7], [8,12]], [4,10])); // [[1,3], [4,12]]
console.log(insertInterval([[2,3],[5,7]], [1,4])); // [[1,4], [5,7]]

console.log(insertInterval([[2,3],[5,7]], [])); // [[2,3],[5,7]]
console.log(insertInterval([[]], [1,4])); // [[1,4]]
console.log(insertInterval({}, [1,4])); // [[1,4]]
console.log(insertInterval([[1,4]], {})); // [[1,4]]
console.log(insertInterval({}, {})); // -1

