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

## 🔍 How to Detect Which Pattern to Use

Learning to identify the right algorithmic pattern is a crucial skill. Here are detailed guidelines to help you recognize which pattern applies to different problem scenarios:

### 🎯 Pattern Detection Framework

#### **Step 1: Analyze the Problem Structure**

**Data Structure Clues:**
- **Array/String + Fixed/Variable Window** → Sliding Window
- **Array/String + Two Elements/Positions** → Two Pointers
- **Tree/Graph Structure** → BFS/DFS
- **Overlapping Subproblems** → Dynamic Programming
- **Large Problem + Smaller Similar Problems** → Divide and Conquer

**Problem Keywords:**
- **"Shortest path", "minimum steps", "level by level"** → BFS
- **"All paths", "combinations", "permutations"** → DFS
- **"Maximum/minimum", "optimal"** → Dynamic Programming or Greedy
- **"Contiguous subarray", "substring", "window"** → Sliding Window
- **"Sorted array", "two sum", "palindrome"** → Two Pointers

#### **Step 2: Identify Problem Patterns**

### 🔍 Detailed Pattern Detection Guide

#### **🌊 BFS Detection Signals**
```
✅ Use BFS when you see:
- "Find shortest path" (unweighted)
- "Minimum number of steps/operations"
- "Level order traversal"
- "Nearest/closest" problems
- "Spreading" or "infection" scenarios

❌ Don't use BFS for:
- Finding ALL possible paths
- Weighted graphs (use Dijkstra instead)
- Deep recursion problems
```

**LeetCode Examples:** Binary Tree Level Order, Word Ladder, Rotting Oranges

**🔍 Detection Example:**
```javascript
// Problem: "Find the minimum number of steps to reach target"
// Keywords: "minimum steps" → BFS!

function minSteps(start, target) {
    if (start === target) return 0;

    const queue = [[start, 0]]; // [current, steps]
    const visited = new Set([start]);

    while (queue.length > 0) {
        const [current, steps] = queue.shift();

        // Try all possible moves
        for (let next of getNextStates(current)) {
            if (next === target) return steps + 1;
            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }
    return -1;
}
```

**🎯 When you see:** "minimum steps", "shortest path", "level by level"
**👉 Think:** Queue + visited set + step counter

#### **🌀 DFS Detection Signals**
```
✅ Use DFS when you see:
- "Find all paths/combinations/permutations"
- "Backtracking" problems
- "Generate all possible solutions"
- "Check if path exists" (any path)
- "Cycle detection"

❌ Don't use DFS for:
- Shortest path problems
- Level-by-level processing
```

**LeetCode Examples:** Generate Parentheses, N-Queens, Word Search

**🔍 Detection Example:**
```javascript
// Problem: "Generate all valid combinations of parentheses"
// Keywords: "all", "generate" → DFS + Backtracking!

function generateParenthesis(n) {
    const result = [];

    function dfs(current, open, close) {
        // Base case: valid combination found
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Try adding opening bracket
        if (open < n) {
            dfs(current + '(', open + 1, close);
        }

        // Try adding closing bracket
        if (close < open) {
            dfs(current + ')', open, close + 1);
        }
    }

    dfs('', 0, 0);
    return result;
}
```

**🎯 When you see:** "all combinations", "generate all", "find all paths"
**👉 Think:** Recursion + backtracking + collect results

#### **⚡ Dynamic Programming Detection Signals**
```
✅ Use DP when you see:
- "Maximum/minimum" with choices
- "Count number of ways"
- "Optimal substructure" + "overlapping subproblems"
- "Can be broken into similar smaller problems"
- Fibonacci-like recurrence relations

Key Questions:
1. Can I break this into smaller subproblems?
2. Do subproblems overlap?
3. Does optimal solution contain optimal solutions to subproblems?

❌ Don't use DP for:
- Greedy problems (local optimal = global optimal)
- Independent subproblems
```

**LeetCode Examples:** Climbing Stairs, House Robber, Longest Common Subsequence

**🔍 Detection Example:**
```javascript
// Problem: "Find maximum sum of non-adjacent elements"
// Keywords: "maximum", "choices" → DP!

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // dp[i] = max money we can rob up to house i
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        // Choice: rob current house + best from i-2, OR skip current house
        dp[i] = Math.max(
            nums[i] + dp[i - 2],  // Rob current
            dp[i - 1]             // Skip current
        );
    }

    return dp[nums.length - 1];
}

// Space-optimized version
function robOptimized(nums) {
    let prev2 = 0, prev1 = 0;
    for (let num of nums) {
        let current = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}
```

**🎯 When you see:** "maximum/minimum with choices", "count ways", "optimal substructure"
**👉 Think:** State transition + memoization/tabulation

#### **⚔️ Divide and Conquer Detection Signals**
```
✅ Use D&C when you see:
- "Sorted array" + "search/find"
- Problems that can be split into INDEPENDENT subproblems
- "Merge" operations
- "Find kth element"

❌ Don't use D&C for:
- Overlapping subproblems (use DP instead)
- Sequential processing needs
```

**LeetCode Examples:** Binary Search, Merge Sort, Quick Select

#### **📊 Frequency Counter Detection Signals**
```
✅ Use Frequency Counter when you see:
- "Anagram" problems
- "Character/element frequency"
- "Compare two arrays/strings"
- "Count occurrences"
- Avoiding nested loops for comparison

Pattern: Build frequency map, then compare
```

**LeetCode Examples:** Valid Anagram, Group Anagrams, Find All Anagrams

**🔍 Detection Example:**
```javascript
// Problem: "Check if two strings are anagrams"
// Keywords: "anagram", "compare strings" → Frequency Counter!

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    // Build frequency map for first string
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check against second string
    for (let char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

// Alternative: Sort and compare
function isAnagramSort(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

// More complex: Group anagrams
function groupAnagrams(strs) {
    const groups = {};

    for (let str of strs) {
        // Create frequency signature
        const count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = count.join('#');

        if (!groups[key]) groups[key] = [];
        groups[key].push(str);
    }

    return Object.values(groups);
}
```

**🎯 When you see:** "anagram", "character frequency", "compare strings/arrays"
**👉 Think:** Map/object to count occurrences + compare counts

#### **🎯 Greedy Algorithm Detection Signals**
```
✅ Use Greedy when you see:
- "Locally optimal choice leads to global optimum"
- "Activity selection" type problems
- "Interval scheduling"
- "Minimum coins" (certain denominations)

Key Question: Does making the best choice at each step guarantee the best overall solution?

❌ Don't use Greedy for:
- Problems requiring exploring all possibilities
- When local optimum ≠ global optimum
```

**LeetCode Examples:** Jump Game, Gas Station, Meeting Rooms

**🔍 Detection Examples:**

**Activity Selection (Intervals):**
```javascript
// Problem: "Maximum number of non-overlapping intervals"
// Keywords: "maximum", "non-overlapping" → Greedy!

function eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) return 0;

    // Greedy: Sort by end time, always pick earliest ending
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < lastEnd) {
            // Overlapping - remove this interval
            count++;
        } else {
            // Non-overlapping - update end time
            lastEnd = intervals[i][1];
        }
    }

    return count;
}
```

**Jump Game (Farthest Reach):**
```javascript
// Problem: "Can you reach the last index?"
// Keywords: "reach", optimal at each step → Greedy!

function canJump(nums) {
    let farthest = 0;

    for (let i = 0; i < nums.length; i++) {
        // Can't reach current position
        if (i > farthest) return false;

        // Update farthest reachable position
        farthest = Math.max(farthest, i + nums[i]);

        // Can reach the end
        if (farthest >= nums.length - 1) return true;
    }

    return true;
}
```

**Gas Station (Circular Array):**
```javascript
// Problem: "Find starting gas station to complete circuit"
// Keywords: "starting point", "complete circuit" → Greedy!

function canCompleteCircuit(gas, cost) {
    let totalGas = 0, totalCost = 0;
    let tank = 0, start = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        // If tank goes negative, start from next station
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    // Check if solution exists
    return totalGas >= totalCost ? start : -1;
}
```

**🎯 When you see:** "maximum/minimum with obvious best choice", "interval scheduling", "always pick best at each step"
**👉 Think:** Sort by optimal criteria + make greedy choice

#### **🔄 Recursion Detection Signals**
```
✅ Use Recursion when you see:
- "Tree/graph traversal"
- "Mathematical sequences" (factorial, fibonacci)
- "Self-similar" subproblems
- "Divide into smaller similar problems"

Key: Problem can be expressed as f(n) = operation(f(n-1), f(n-2), ...)
```

**LeetCode Examples:** Tree Traversals, Fibonacci, Tower of Hanoi

#### **🪟 Sliding Window Detection Signals**
```
✅ Use Sliding Window when you see:
- "Contiguous subarray/substring"
- "Maximum/minimum sum of subarray of size k"
- "Longest/shortest substring with condition"
- "Find all subarrays/substrings"

Fixed Window: Size is given
Variable Window: Size changes based on condition

❌ Don't use for:
- Non-contiguous elements
- Entire array processing
```

**LeetCode Examples:** Max Sum Subarray of Size K, Longest Substring Without Repeating Characters

**🔍 Detection Examples:**

**Fixed Window (size given):**
```javascript
// Problem: "Maximum sum of subarray of size k"
// Keywords: "subarray", "size k" → Fixed Sliding Window!

function maxSubarraySum(arr, k) {
    if (arr.length < k) return 0;

    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Slide the window: remove first, add next
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
```

**Variable Window (condition-based):**
```javascript
// Problem: "Longest substring without repeating characters"
// Keywords: "longest substring", "condition" → Variable Sliding Window!

function lengthOfLongestSubstring(s) {
    const seen = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Shrink window while condition violated
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
```

**🎯 When you see:** "contiguous", "subarray of size k", "substring with condition"
**👉 Think:** Two pointers (left/right) + expand/shrink window

#### **👆 Two Pointers Detection Signals**
```
✅ Use Two Pointers when you see:
- "Sorted array" + "find pair/triplet"
- "Palindrome" checking
- "Remove duplicates in-place"
- "Reverse" operations
- "Merge" two sorted arrays

Patterns:
- Opposite Direction: left=0, right=n-1, move toward center
- Same Direction: slow and fast pointers

❌ Don't use for:
- Unsorted arrays (sort first, or use different approach)
- Single element processing
```

**LeetCode Examples:** Two Sum II, Valid Palindrome, Remove Duplicates

**🔍 Detection Examples:**

**Opposite Direction (find pairs):**
```javascript
// Problem: "Two sum in sorted array"
// Keywords: "sorted array", "find pair" → Two Pointers (opposite)!

function twoSum(numbers, target) {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++;  // Need larger sum
        } else {
            right--; // Need smaller sum
        }
    }

    return [];
}
```

**Opposite Direction (palindrome):**
```javascript
// Problem: "Check if string is palindrome"
// Keywords: "palindrome" → Two Pointers (opposite)!

function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
```

**Same Direction (slow/fast):**
```javascript
// Problem: "Remove duplicates from sorted array in-place"
// Keywords: "remove", "in-place", "sorted" → Two Pointers (same direction)!

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let slow = 0; // Position for next unique element

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1; // Length of unique array
}
```

**🎯 When you see:** "sorted array + pair", "palindrome", "in-place modification"
**👉 Think:** Two pointers moving opposite or same direction

### 🚦 Decision Tree for Pattern Selection

```
Problem Analysis Flow:

1. Is it a graph/tree? → BFS/DFS
   ├─ Need shortest path? → BFS
   └─ Need all paths/combinations? → DFS

2. Is it an optimization problem?
   ├─ Overlapping subproblems? → Dynamic Programming
   ├─ Local optimal = global optimal? → Greedy
   └─ Independent subproblems? → Divide and Conquer

3. Is it about arrays/strings?
   ├─ Contiguous elements? → Sliding Window
   ├─ Two elements/positions? → Two Pointers
   ├─ Counting/comparing? → Frequency Counter
   └─ Self-similar structure? → Recursion
```

### 🎮 Practice Strategy

1. **Read the problem carefully** - Look for keywords and constraints
2. **Identify the core operation** - What are you trying to optimize/find?
3. **Consider the data structure** - Array, tree, graph, string?
4. **Check for patterns** - Does it fit any of the detection signals above?
5. **Verify with examples** - Does your chosen pattern work for given examples?

### 📚 Pattern Combinations

Some problems may require **multiple patterns**:
- **DFS + Memoization** = Dynamic Programming
- **BFS + Two Pointers** = Some shortest path problems
- **Sliding Window + Frequency Counter** = Substring problems with character constraints

### 💡 Quick Reference: Problem → Pattern Detection

```javascript
// ⚡ Quick Detection Cheat Sheet
function detectPattern(problemDescription) {
    const keywords = problemDescription.toLowerCase();

    // Graph/Tree patterns
    if (keywords.includes('shortest path') || keywords.includes('minimum steps')) {
        return 'BFS'; // Queue + visited + level tracking
    }

    if (keywords.includes('all paths') || keywords.includes('generate all') || keywords.includes('combinations')) {
        return 'DFS'; // Recursion + backtracking + collect results
    }

    // Optimization patterns
    if ((keywords.includes('maximum') || keywords.includes('minimum')) &&
        (keywords.includes('subproblem') || keywords.includes('choice'))) {
        return 'Dynamic Programming'; // State transition + memoization
    }

    if (keywords.includes('locally optimal') || keywords.includes('greedy')) {
        return 'Greedy Algorithm'; // Sort + make best choice at each step
    }

    // Array/String patterns
    if (keywords.includes('contiguous') &&
        (keywords.includes('subarray') || keywords.includes('substring'))) {
        return 'Sliding Window'; // Two pointers + expand/shrink window
    }

    if (keywords.includes('sorted array') && keywords.includes('pair')) {
        return 'Two Pointers'; // left/right pointers moving toward each other
    }

    if (keywords.includes('anagram') || keywords.includes('frequency') || keywords.includes('count')) {
        return 'Frequency Counter'; // Map/object to count occurrences
    }

    if (keywords.includes('recursive') || keywords.includes('similar subproblems')) {
        return 'Recursion'; // Base case + recursive case
    }

    return 'Analyze further - might need combination of patterns';
}

// Example usage:
console.log(detectPattern("Find shortest path in unweighted graph")); // "BFS"
console.log(detectPattern("Generate all valid parentheses combinations")); // "DFS"
console.log(detectPattern("Maximum sum contiguous subarray")); // "Sliding Window"
console.log(detectPattern("Two sum in sorted array")); // "Two Pointers"
console.log(detectPattern("Check if strings are anagrams")); // "Frequency Counter"
```

### 🎯 Real Problem Examples with Solutions

**Example 1: "Rotting Oranges" - Multi-source BFS**
```javascript
// Problem: Minimum time for all oranges to rot (spreading pattern)
// Detection: "minimum time" + "spreading" → BFS!

function orangesRotting(grid) {
    const rows = grid.length, cols = grid[0].length;
    const queue = [];
    let fresh = 0;

    // Find all initially rotten oranges and count fresh ones
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c, 0]); // [row, col, time]
            else if (grid[r][c] === 1) fresh++;
        }
    }

    const directions = [[0,1], [1,0], [0,-1], [-1,0]];
    let maxTime = 0;

    while (queue.length > 0) {
        const [row, col, time] = queue.shift();
        maxTime = Math.max(maxTime, time);

        for (let [dr, dc] of directions) {
            const newRow = row + dr, newCol = col + dc;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 2; // Rot the orange
                fresh--;
                queue.push([newRow, newCol, time + 1]);
            }
        }
    }

    return fresh === 0 ? maxTime : -1;
}
```

**Example 2: "House Robber" - Dynamic Programming**
```javascript
// Problem: Maximum money without robbing adjacent houses
// Detection: "maximum" + "choices" + "constraint" → DP!

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // dp[i] represents max money that can be robbed up to house i
    let prev2 = nums[0];           // dp[i-2]
    let prev1 = Math.max(nums[0], nums[1]); // dp[i-1]

    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(
            nums[i] + prev2,  // Rob current house + best from i-2
            prev1             // Skip current house, take best from i-1
        );
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
```

## 📊 Comprehensive Pattern Comparison Table

| Pattern | When to Use | Example Problems | Time Complexity | Space Complexity | Key Formula/Signature |
|---------|-------------|------------------|-----------------|------------------|----------------------|
| **🌊 BFS** | • Shortest path (unweighted)<br>• Level-by-level exploration<br>• Minimum steps/operations<br>• "Spreading" scenarios | • Binary Tree Level Order<br>• Word Ladder<br>• Rotting Oranges<br>• Shortest Path in Grid | O(V + E) | O(V) | `queue.push(start)` + `visited.add()` |
| **🌀 DFS** | • Find all paths/combinations<br>• Backtracking problems<br>• Generate all solutions<br>• Cycle detection | • Generate Parentheses<br>• N-Queens<br>• Word Search<br>• Path Sum | O(V + E) | O(h) | `dfs(current, path)` + backtrack |
| **⚡ Dynamic Programming** | • Overlapping subproblems<br>• Optimal substructure<br>• "Count ways" problems<br>• Max/min with choices | • Climbing Stairs<br>• House Robber<br>• Longest Common Subsequence<br>• Coin Change | O(n×m) | O(n×m) | `dp[i] = f(dp[i-1], dp[i-2])` |
| **⚔️ Divide & Conquer** | • Independent subproblems<br>• Sorted arrays<br>• "Find kth element"<br>• Merge operations | • Binary Search<br>• Merge Sort<br>• Quick Select<br>• Maximum Subarray | O(n log n) | O(log n) | `solve(left, mid) + solve(mid+1, right)` |
| **📊 Frequency Counter** | • Anagram problems<br>• Character/element frequency<br>• Compare arrays/strings<br>• Avoid nested loops | • Valid Anagram<br>• Group Anagrams<br>• Find All Anagrams<br>• Two Arrays Equal | O(n) | O(k) | `map[char] = (map[char] || 0) + 1` |
| **🎯 Greedy Algorithm** | • Local optimal = global optimal<br>• Activity selection<br>• Interval scheduling<br>• "Always pick best" | • Jump Game<br>• Gas Station<br>• Meeting Rooms<br>• Activity Selection | O(n log n) | O(1) | `sort() + pick_best_at_each_step()` |
| **🔄 Recursion** | • Self-similar subproblems<br>• Tree/graph traversal<br>• Mathematical sequences<br>• Base + recursive case | • Tree Traversals<br>• Factorial<br>• Fibonacci<br>• Tower of Hanoi | O(b^d) | O(d) | `f(n) = base_case || f(n-1) + operation` |
| **🪟 Sliding Window** | • Contiguous subarray/substring<br>• Fixed/variable window size<br>• Max/min in subarrays<br>• Substring conditions | • Max Sum Subarray Size K<br>• Longest Substring No Repeat<br>• Min Window Substring<br>• Fruits Into Baskets | O(n) | O(k) | `left, right = 0; expand/shrink window` |
| **👆 Two Pointers** | • Sorted arrays<br>• Find pairs/triplets<br>• Palindrome checking<br>• In-place operations | • Two Sum II<br>• Valid Palindrome<br>• Remove Duplicates<br>• Container Most Water | O(n) | O(1) | `left=0, right=n-1; move toward center` |

### 🔍 Quick Decision Matrix

| Problem Characteristics | Primary Pattern | Secondary Considerations |
|-------------------------|-----------------|-------------------------|
| **"Find shortest path"** | BFS | Use Dijkstra if weighted |
| **"Generate all combinations"** | DFS | Add memoization if overlapping |
| **"Maximum/minimum with choices"** | Dynamic Programming | Use Greedy if local = global optimal |
| **"Sorted array + find pair"** | Two Pointers | Use Binary Search for single element |
| **"Contiguous subarray"** | Sliding Window | Use Prefix Sum for range queries |
| **"Compare strings/arrays"** | Frequency Counter | Use Set for unique elements only |
| **"Interval scheduling"** | Greedy Algorithm | Sort by end time usually optimal |
| **"Tree/graph problems"** | DFS/BFS | DFS for paths, BFS for levels |
| **"Mathematical sequence"** | Recursion | Add memoization for optimization |

### 💡 Pattern Complexity Cheat Sheet

```
🚀 Most Efficient (O(1) - O(log n)):
├─ Two Pointers: O(n) time, O(1) space
├─ Sliding Window: O(n) time, O(k) space
└─ Divide & Conquer: O(log n) space

⚡ Efficient (O(n) - O(n²)):
├─ BFS/DFS: O(V + E) time, O(V) space
├─ Frequency Counter: O(n) time, O(k) space
├─ Greedy: O(n log n) time, O(1) space
└─ Dynamic Programming: O(n²) time, O(n²) space

🐌 Watch Out (Exponential):
└─ Recursion (without memoization): O(2^n) time, O(n) space
```

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