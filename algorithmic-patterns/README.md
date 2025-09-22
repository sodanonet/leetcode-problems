# Algorithmic Patterns

This directory contains implementations of common algorithmic patterns used in competitive programming and technical interviews. Each pattern includes both JavaScript and TypeScript implementations with comprehensive tests.

## Overview

Understanding algorithmic patterns is crucial for solving coding problems efficiently. These patterns provide a structured approach to tackle various types of problems by recognizing underlying similarities and applying proven techniques.

## Available Patterns

### 1. **Breadth-First Search (BFS)**
**Files:** `bfs.js`, `bfs.ts`, `bfs.test.js`

**When to use:** Exploring graphs level by level, finding shortest paths in unweighted graphs, tree level order traversal.

**Key concepts:**
- Uses a queue data structure
- Explores all nodes at the current depth before moving to nodes at the next depth
- Guarantees shortest path in unweighted graphs

**Example use cases:**
- Finding shortest path in maze
- Level order tree traversal
- Social network connections (friends of friends)

### 2. **Depth-First Search (DFS)**
**Files:** `dfs.js`, `dfs.ts`, `dfs.test.js`

**When to use:** Exploring all possible paths, backtracking problems, detecting cycles, topological sorting.

**Key concepts:**
- Uses recursion or stack data structure
- Explores as far as possible along each branch before backtracking
- More memory efficient than BFS for deep trees

**Example use cases:**
- Maze solving with all paths
- Tree/graph traversal
- Cycle detection
- Topological sorting

### 3. **Divide and Conquer**
**Files:** `divide-and-conquer.js`, `divide-and-conquer.ts`, `divide-and-conquer.test.js`

**When to use:** Problems that can be broken into smaller subproblems, sorting algorithms, searching in sorted arrays.

**Key concepts:**
- Break problem into smaller subproblems
- Solve subproblems recursively
- Combine solutions to solve original problem

**Example use cases:**
- Merge sort, quick sort
- Binary search
- Maximum subarray problem
- Closest pair of points

### 4. **Dynamic Programming**
**Files:** `dynamic-programming.js`, `dynamic-programming.ts`, `dynamic-programming.test.js`

**When to use:** Optimization problems with overlapping subproblems and optimal substructure.

**Key concepts:**
- Memoization (top-down approach)
- Tabulation (bottom-up approach)
- Optimal substructure property
- Overlapping subproblems

**Example use cases:**
- Fibonacci sequence
- Knapsack problem
- Longest common subsequence
- Coin change problem

### 5. **Frequency Counter**
**Files:** `frequency-counter.js`, `frequency-counter.ts`, `frequency-counter.test.js`

**When to use:** Comparing data structures, checking for anagrams, counting character/element occurrences.

**Key concepts:**
- Use objects/maps to count occurrences
- Avoid nested loops for O(n) time complexity
- Compare frequency distributions

**Example use cases:**
- Anagram detection
- Character frequency analysis
- Array comparison problems
- Duplicate detection

### 6. **Greedy Algorithm**
**Files:** `greedy-algorithm.js`, `greedy-algorithm.ts`, `greedy-algorithm.test.js`

**When to use:** Optimization problems where locally optimal choices lead to globally optimal solutions.

**Key concepts:**
- Make locally optimal choice at each step
- Never reconsider previous choices
- Works when greedy choice property holds

**Example use cases:**
- Coin change (certain denominations)
- Activity selection
- Huffman coding
- Minimum spanning tree

### 7. **Recursion**
**Files:** `recursion.js`, `recursion.ts`, `recursion.test.js`

**When to use:** Problems that can be broken into smaller, similar subproblems.

**Key concepts:**
- Base case to stop recursion
- Recursive case that calls itself
- Stack space consideration

**Example use cases:**
- Mathematical calculations (factorial, fibonacci)
- Tree traversals
- Backtracking problems
- Divide and conquer algorithms

### 8. **Sliding Window**
**Files:** `sliding-window.js`, `sliding-window.ts`, `sliding-window.test.js`

**When to use:** Problems involving subarrays or substrings, especially finding maximum/minimum values or sums.

**Key concepts:**
- Fixed or variable window size
- Maintain window state efficiently
- Slide window by adding/removing elements

**Example use cases:**
- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring
- Average of subarrays

### 9. **Two Pointers**
**Files:** `two-pointers.js`, `two-pointers.ts`, `two-pointers.test.js`

**When to use:** Sorted arrays, finding pairs, palindrome checking, array manipulation.

**Key concepts:**
- Use two pointers moving towards each other or in same direction
- Reduce time complexity from O(n²) to O(n)
- Works well with sorted data

**Example use cases:**
- Two sum in sorted array
- Palindrome checking
- Remove duplicates
- Container with most water

## Running Tests

### Test All Patterns
```bash
npm test
```

### Test Individual Pattern
```bash
npm test -- --testNamePattern="BFS"
npm test -- --testNamePattern="DFS"
npm test -- --testNamePattern="Dynamic Programming"
# ... and so on for other patterns
```

### Test by File
```bash
npx jest algorithmic-patterns/bfs.test.js
npx jest algorithmic-patterns/dfs.test.js
# ... and so on for other pattern files
```

## Language Support

Each pattern is implemented in both:
- **JavaScript** (`.js` files) - ES6+ syntax with JSDoc comments
- **TypeScript** (`.ts` files) - Strong typing with interfaces and type annotations

## Pattern Selection Guide

| Problem Type | Recommended Pattern |
|--------------|-------------------|
| Graph traversal | BFS, DFS |
| Shortest path (unweighted) | BFS |
| All paths exploration | DFS |
| Optimization with subproblems | Dynamic Programming |
| Large problem breakdown | Divide and Conquer |
| Character/element counting | Frequency Counter |
| Local optimal = global optimal | Greedy Algorithm |
| Self-similar subproblems | Recursion |
| Subarray/substring problems | Sliding Window |
| Sorted array problems | Two Pointers |

## Contributing

When adding new patterns:
1. Implement in both JS and TS
2. Add comprehensive tests
3. Update this README with pattern description
4. Follow existing code style and documentation format

## Time and Space Complexity

Each implementation includes comments about time and space complexity. Understanding these complexities is crucial for choosing the right pattern for your specific problem constraints.