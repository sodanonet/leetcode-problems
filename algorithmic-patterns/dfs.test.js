import { dfs } from './dfs.js';

describe('Depth-First Search Algorithm', () => {
  const { fn: _dfs } = dfs;

  // Helper function to create tree nodes
  const createNode = (value, left = null, right = null) => ({
    value,
    left,
    right
  });

  // Helper function to capture console.log output
  const captureOutput = (fn, ...args) => {
    const originalLog = console.log;
    const output = [];
    console.log = (...msgs) => output.push(...msgs);
    
    try {
      fn(...args);
      return output;
    } finally {
      console.log = originalLog;
    }
  };

  describe('Basic functionality', () => {
    test('should handle null node', () => {
      const output = captureOutput(_dfs, null);
      expect(output).toEqual([]);
    });

    test('should traverse single node', () => {
      const root = createNode(1);
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1]);
    });

    test('should traverse simple binary tree in pre-order', () => {
      //     1
      //   /   \\
      //  2     3
      const root = createNode(1, createNode(2), createNode(3));
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 2, 3]);
    });
  });

  describe('Tree traversal patterns', () => {
    test('should traverse left subtree before right subtree', () => {
      //       1
      //     /   \\
      //    2     3
      //   / \\   
      //  4   5   
      const root = createNode(1, 
        createNode(2, createNode(4), createNode(5)), 
        createNode(3)
      );
      const output = captureOutput(_dfs, root);
      // Pre-order: root, left subtree, right subtree
      expect(output).toEqual([1, 2, 4, 5, 3]);
    });

    test('should handle deep left-only tree', () => {
      //   1
      //  /
      // 2
      // /
      //3
      // /
      //4
      const root = createNode(1, 
        createNode(2, 
          createNode(3, 
            createNode(4)
          )
        )
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 2, 3, 4]);
    });

    test('should handle deep right-only tree', () => {
      // 1
      //  \\
      //   2
      //    \\
      //     3
      //      \\
      //       4
      const root = createNode(1, 
        null, 
        createNode(2, 
          null, 
          createNode(3, 
            null, 
            createNode(4)
          )
        )
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Complex tree structures', () => {
    test('should handle complete binary tree', () => {
      //       1
      //     /   \\
      //    2     3
      //   / \\   / \\
      //  4   5 6   7
      const root = createNode(1, 
        createNode(2, createNode(4), createNode(5)), 
        createNode(3, createNode(6), createNode(7))
      );
      const output = captureOutput(_dfs, root);
      // Pre-order: 1, left-subtree(2,4,5), right-subtree(3,6,7)
      expect(output).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });

    test('should handle unbalanced tree', () => {
      //     1
      //   /   \\
      //  2     3
      //         \\
      //          4
      //         / \\
      //        5   6
      const root = createNode(1, 
        createNode(2), 
        createNode(3, 
          null, 
          createNode(4, createNode(5), createNode(6))
        )
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('Edge cases and data types', () => {
    test('should handle tree with string values', () => {
      const root = createNode('A', 
        createNode('B', createNode('D')), 
        createNode('C')
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual(['A', 'B', 'D', 'C']);
    });

    test('should handle tree with mixed data types', () => {
      const root = createNode(1, 
        createNode('two'), 
        createNode(3.5)
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 'two', 3.5]);
    });

    test('should handle nodes with only left children', () => {
      const root = createNode(1, 
        createNode(2, createNode(3)), 
        null
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 2, 3]);
    });

    test('should handle nodes with only right children', () => {
      const root = createNode(1, 
        null,
        createNode(2, null, createNode(3))
      );
      const output = captureOutput(_dfs, root);
      expect(output).toEqual([1, 2, 3]);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(dfs.name).toBe("Depth-First Search (DFS)");
      expect(dfs.whenToUse).toContain("Explore as far as possible");
    });
  });
});