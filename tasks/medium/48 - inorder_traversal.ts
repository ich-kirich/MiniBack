/*
  3376 - InorderTraversal ------- by jiangshan (@jiangshanmeta) #medium #object
  ### Question
  Implement the type version of binary tree inorder traversal.
  For example:

  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]

  > View on GitHub: https://tsch.js.org/3376
*/
// Solution
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];
