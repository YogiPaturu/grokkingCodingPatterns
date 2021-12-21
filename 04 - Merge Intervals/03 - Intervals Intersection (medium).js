/*
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:
Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.

Example 2:
Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.

use a pointer for interval1 and interval2
shift the one that's less each iteration

if interval1 end < interval2 start, next iteration
if interval2 start < interval1 end,
    if interval1 end < interval2 end, push [interval1 end, interval2 start]
    else, push [interval1 start, interval2 end]
return intersectionInterval

Time - O(N) such that N is the number of elements in both arr1 and arr2, or O(M+N) such that M is the length of arr1 and N is the length of arr2
Space - O(N)
 */

const intervalIntersection = (intervalArr1, intervalArr2) => {
    if(!Array.isArray(intervalArr1) || !Array.isArray(intervalArr2)) return [[]];
    if(!intervalArr1.length || !intervalArr2.length) return [[]];

    let p1 = 0,
    p2 = 0,
    interval1 = [],
    interval2 = [];
    
    const intersection = [];

    while((p1 < intervalArr1.length) && (p2 < intervalArr2.length)){
        interval1 = intervalArr1[p1];
        interval2 = intervalArr2[p2];

        // interval 2 overlaps with interval 1 || interval 1 overlaps with interval 2
        if((interval1[0] <= interval2[0] && interval1[1] >= interval2[0]) || (interval2[0] <= interval1[0] && interval2[1] >= interval1[0])){
            intersection.push([Math.max(interval1[0], interval2[0]), Math.min(interval1[1], interval2[1])])
        }

        if(interval1[1] < interval2[1]) p1++;
        else p2++;
    }

    return intersection;
}
console.log(intervalIntersection([[1,2], [3,4]],[[5,6]])); // [[]]
console.log(intervalIntersection([[1,2]],[[3,4], [5,6]])); // [[]]
console.log(intervalIntersection([[1,2], [3,6]], [[4,5]])); // [[4,5]]
console.log(intervalIntersection([[1,2], [3,6]], [[3,4]])); // [[3,4]]

console.log(intervalIntersection([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])); // [[2, 3], [5, 6], [7, 7]]
console.log(intervalIntersection([[1, 3], [5, 7], [9, 12]], [[5, 10]])); // [[5, 7], [9, 10]]


console.log(intervalIntersection([[]], [[5, 10]])); // [[]]
console.log(intervalIntersection([[5, 10]], [[]])); // [[]]
console.log(intervalIntersection([[]], [[]])); // [[]]
console.log(intervalIntersection([{}], [[]])); // [[]]
console.log(intervalIntersection([[]], [{}])); // [[]]
console.log(intervalIntersection([{}], [{}])); // [[]]

