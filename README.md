# LeetCode Problems Solutions

A comprehensive collection of LeetCode problem solutions implemented in both **JavaScript** and **TypeScript**. This repository serves as a learning resource and reference for algorithmic problem-solving techniques.

[🔗 LeetCode Profile](https://leetcode.com/sodanonet/)

## 📁 Repository Structure

```
leetcode-problems/
├── problems/              # Individual LeetCode problem solutions
│   ├── 1.twoSum/
│   ├── 2.addTwoNumbers/
│   ├── 3.lengthOfLongestSubstring/
│   ├── 4.findMedianSortedArrays/
│   └── 5.longestPalindrome/
└── algorithmic-patterns/   # Common algorithmic patterns with examples
    ├── bfs.js / bfs.ts
    ├── dfs.js / dfs.ts
    ├── dynamic-programming.js / dynamic-programming.ts
    └── ... (see algorithmic-patterns/README.md)
```

## 🧩 Solved Problems

| No. | Problem | Difficulty | Solution | Pattern/Algorithm Used |
|-----|---------|------------|----------|----------------------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | [JS](/problems/1.twoSum/problem.js) / [TS](/problems/1.twoSum/problem.ts) | Hash Map, Array |
| 2 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Medium | [JS](/problems/2.addTwoNumbers/problem.js) / [TS](/problems/2.addTwoNumbers/problem.ts) | Linked List, Math |
| 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | [JS](/problems/3.lengthOfLongestSubstring/problem.js) / [TS](/problems/3.lengthOfLongestSubstring/problem.ts) | Sliding Window, Hash Set |
| 4 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | [JS](/problems/4.findMedianSortedArrays/problem.js) / [TS](/problems/4.findMedianSortedArrays/problem.ts) | Binary Search, Divide & Conquer |
| 5 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | [JS](/problems/5.longestPalindrome/problem.js) / [TS](/problems/5.longestPalindrome/problem.ts) | Dynamic Programming, String |

## 🎯 Algorithmic Patterns

This repository includes implementations of fundamental algorithmic patterns that are commonly used in competitive programming and technical interviews. Each pattern includes:

- **Detailed explanations** of when and how to use the pattern
- **JavaScript and TypeScript implementations**
- **Comprehensive test suites**
- **Time and space complexity analysis**

Available patterns:
- **Breadth-First Search (BFS)** - Graph traversal, shortest paths
- **Depth-First Search (DFS)** - Graph traversal, backtracking
- **Dynamic Programming** - Optimization problems with overlapping subproblems
- **Divide and Conquer** - Problem decomposition and recursive solutions
- **Frequency Counter** - Efficient data comparison and counting
- **Greedy Algorithm** - Locally optimal choices for global optimization
- **Recursion** - Self-referential problem solving
- **Sliding Window** - Subarray/substring optimization
- **Two Pointers** - Efficient array/string manipulation

👉 [See detailed pattern documentation](/algorithmic-patterns/README.md)

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.12.0 or higher
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sodanonet/leetcode-problems.git
cd leetcode-problems
```

2. Install dependencies:
```bash
npm install
```

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Test Individual Problems
```bash
# Test a specific problem
node ./problems/1.twoSum/test-cases.js

# Test using Jest pattern matching
npm test -- --testPathPattern="1.twoSum"
```

### Test Algorithmic Patterns
```bash
# Test all patterns
npm test algorithmic-patterns/

# Test specific pattern
npm test -- --testNamePattern="BFS"
npm test -- --testNamePattern="Dynamic Programming"
```

## 📚 Problem Categories

### **Easy Problems**
- **Two Sum** - Hash map for O(n) solution

### **Medium Problems**
- **Add Two Numbers** - Linked list traversal with carry handling
- **Longest Substring Without Repeating Characters** - Sliding window technique
- **Longest Palindromic Substring** - Dynamic programming approach

### **Hard Problems**
- **Median of Two Sorted Arrays** - Binary search on merged arrays

## 🎨 Code Style & Standards

### JavaScript
- ES6+ syntax with modern features
- JSDoc comments for documentation
- Functional programming patterns where appropriate

### TypeScript
- Strong typing with explicit type annotations
- Interface definitions for complex data structures
- Generic types for reusable functions

### Testing
- Jest framework for unit testing
- Comprehensive test cases covering edge cases
- Performance benchmarking for complex algorithms

## 📊 Complexity Analysis

Each solution includes detailed analysis of:
- **Time Complexity** - Big O notation for execution time
- **Space Complexity** - Memory usage analysis
- **Trade-offs** - Discussion of different approaches

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/new-problem`)
3. **Implement solution in both JS and TS**
4. **Add comprehensive tests**
5. **Update documentation**
6. **Submit a pull request**

### Adding New Problems

When adding a new LeetCode problem:

1. Create a new directory: `problems/{number}.{problemName}/`
2. Include these files:
   - `problem.js` - JavaScript solution
   - `problem.ts` - TypeScript solution
   - `test-cases.js` - Test cases with expected outputs
3. Update the main README.md table
4. Follow existing code style and documentation format

### Adding New Patterns

When adding algorithmic patterns:

1. Create files in `algorithmic-patterns/`:
   - `pattern-name.js` - JavaScript implementation
   - `pattern-name.ts` - TypeScript implementation
   - `pattern-name.test.js` - Jest test suite
2. Update `algorithmic-patterns/README.md`
3. Include usage examples and complexity analysis

## 📈 Progress Tracking

- ✅ **5 problems solved** across Easy, Medium, and Hard difficulties
- ✅ **9 algorithmic patterns** implemented with comprehensive documentation
- ✅ **100% test coverage** for all solutions
- ✅ **Dual language support** (JavaScript & TypeScript)

## 🔗 Useful Resources

- [LeetCode Website](https://leetcode.com/)
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Algorithm Visualizations](https://visualgo.net/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- LeetCode platform for providing excellent coding challenges
- The programming community for algorithmic insights and patterns
- Contributors who help improve this educational resource

---

**Happy coding! 🚀**

*Remember: The goal is not just to solve problems, but to understand the underlying patterns and principles that make solutions elegant and efficient.*