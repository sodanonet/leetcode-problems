import { bfs } from './bfs.js';

describe('Breadth-First Search Algorithm', () => {
  const { fn: _bfs } = bfs;

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
    test('should traverse single node', () => {
      const root = createNode(1);
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1]);
    });

    test('should traverse simple binary tree level by level', () => {
      //     1
      //   /   \\
      //  2     3
      const root = createNode(1, createNode(2), createNode(3));
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1, 2, 3]);
    });

    test('should traverse more complex tree level by level', () => {
      //       1
      //     /   \\
      //    2     3
      //   / \\   /
      //  4   5 6
      const root = createNode(1, 
        createNode(2, createNode(4), createNode(5)), 
        createNode(3, createNode(6))
      );
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('Edge cases', () => {
    test('should handle left-only tree', () => {
      //   1
      //  /
      // 2
      // /
      //3
      const root = createNode(1, createNode(2, createNode(3)));
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1, 2, 3]);
    });

    test('should handle right-only tree', () => {
      // 1
      //  \\
      //   2
      //    \\
      //     3
      const root = createNode(1, null, createNode(2, null, createNode(3)));
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1, 2, 3]);
    });

    test('should handle unbalanced tree', () => {
      //     1
      //   /   \\
      //  2     3
      //         \\
      //          4
      //           \\
      //            5
      const root = createNode(1, 
        createNode(2), 
        createNode(3, null, createNode(4, null, createNode(5)))
      );
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('Complex trees', () => {
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
      const output = captureOutput(_bfs, root);
      expect(output).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('should handle tree with different data types', () => {
      const root = createNode('A', createNode('B'), createNode('C'));
      const output = captureOutput(_bfs, root);
      expect(output).toEqual(['A', 'B', 'C']);
    });
  });

  describe('Algorithm properties', () => {
    test('should have correct metadata', () => {
      expect(bfs.name).toBe("Breadth-First Search (BFS)");
      expect(bfs.whenToUse).toContain("Level-by-level");
    });

    test('should visit nodes in correct level order', () => {
      //       1      <- Level 0
      //     /   \\
      //    2     3   <- Level 1  
      //   /       \\
      //  4         5 <- Level 2
      const root = createNode(1, 
        createNode(2, createNode(4)), 
        createNode(3, null, createNode(5))
      );
      const output = captureOutput(_bfs, root);
      
      // Should visit level 0 first (1), then level 1 (2,3), then level 2 (4,5)
      expect(output).toEqual([1, 2, 3, 4, 5]);
    });
  });
});