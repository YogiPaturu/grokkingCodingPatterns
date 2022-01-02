/*
Topological Sort of a directed graph (a graph with unidirectional edges) is a linear ordering of its vertices such that for every directed edge (U, V) from vertex U to vertex V,
U comes before V in the ordering.

Given a directed graph, find the topological ordering of its vertices.

Example 1:

Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
Output: Following are the two valid topological sorts for the given graph:
1) 3, 2, 0, 1
2) 3, 2, 1, 0

Example 2:

Input: Vertices=5, Edges=[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]
Output: Following are all valid topological sorts for the given graph:
1) 4, 2, 3, 0, 1
2) 4, 3, 2, 0, 1
3) 4, 3, 2, 1, 0
4) 4, 2, 3, 1, 0
5) 4, 2, 0, 3, 1

Example 3:

Input: Vertices=7, Edges=[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]
Output: Following are all valid topological sorts for the given graph:
1) 5, 6, 3, 4, 0, 1, 2
2) 6, 5, 3, 4, 0, 1, 2
3) 5, 6, 4, 3, 0, 2, 1
4) 6, 5, 4, 3, 0, 1, 2
5) 5, 6, 3, 4, 0, 2, 1
6) 5, 6, 3, 4, 1, 2, 0

There are other valid topological ordering of the graph too.

4 major steps:
1) Initialization - create an adjacency list with an object
2) Build graph and find in-degrees of all vertices with an object
3) Find all sourcces with a queue
4) Sort 
*/

//npm install --save collections

const Deque = require('collections/deque');

const topSort = (vertices, edges) => {
    const sortedOrder = [];
    if(vertices <= 0) return sortedOrder;

    // initialize graph
    const inDegree = Array(vertices).fill(0);
    const graph = Array(vertices).fill([])

    // build graph
    let parent = 0,
    child = 0;
    for(const edge of edges){
        parent = edge[0];
        child = edge[1];
        graph[parent].push(child);
        inDegree[child]++;
    }
    
    // find sources
    const sources = new Deque();
    for(let i = 0; i < inDegree.length; i++){
        if(inDegree[i] === 0) sources.push(i)
    }

    // sort
    let vertex = 0;
    while(sources.length > 0){
        vertex = sources.shift();
        sortedOrder.push(vertex);
        graph[vertex].forEach((child) => {
            inDegree[child]--;
            if(inDegree[child] === 0) sources.push(child)
        });
    }

    // check if graph has cycles, since top sort not possible if there are cycles
    if(sortedOrder.length !== vertices) return []
    return sortedOrder;
}

topSort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])




