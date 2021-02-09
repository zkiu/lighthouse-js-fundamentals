// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  *
//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  *
//  */

// -- first inefficient model with attemp at memoizing
// var rightSideView = function (root, memo = {}) {
// 	if (!root) return []

// 	// if (root in memo) {
// 	// 	return memo[root]
// 	// }

// 	let leftSide = []

// 	if (
// 		rightSideView(root.right, memo).length >=
// 		rightSideView(root.left, memo).length
// 	) {
// 		// memo[root] = [root.val, ...rightSideView(root.right, memo)]
// 		return [root.val, ...rightSideView(root.right, memo)]
// 	} else {
// 		for (let i = 0; i < rightSideView(root.left, memo).length; i++) {
// 			if (rightSideView(root.right, memo)[i]) {
// 				leftSide.push(rightSideView(root.right, memo)[i])
// 			} else {
// 				leftSide.push(rightSideView(root.left, memo)[i])
// 			}
// 		}
// 		// memo[root] = [root.val, ...leftSide]
// 		return [root.val, ...leftSide]
// 	}
// }

// -- my improved version WITHOUT memoizing
// var rightSideView = function (root) {
// 	if (root === null) return []

// 	if (root.right !== null && root.left === null) {
// 		return [root.val, ...rightSideView(root.right)]
// 	}
// 	if (root.right === null && root.left !== null) {
// 		return [root.val, ...rightSideView(root.left)]
// 	}
// 	let newChain = []

// 	if (rightSideView(root.right).length >= rightSideView(root.left).length) {
// 		return [root.val, ...rightSideView(root.right)]
// 	} else {
// 		newChain = [...rightSideView(root.left)]

// 		for (let i = 0; i < rightSideView(root.right).length; i++) {
// 			newChain.shift()
// 		}

// 		return [root.val, ...rightSideView(root.right), ...newChain]
// 	}
// }

// -- my improved version WITH memoizing
// var rightSideView = function (root, memo = {}) {
// 	if (root === null) return []
// 	if (root in memo) return memo[root]

// 	if (root.right !== null && root.left === null) {
// 		memo[root] = [root.val, ...rightSideView(root.right, memo)]
// 		return memo[root]
// 	}
// 	if (root.right === null && root.left !== null) {
// 		memo[root] = [root.val, ...rightSideView(root.left, memo)]
// 		return memo[root]
// 	}

// 	let newChain = []
// 	if (
// 		rightSideView(root.right, memo).length >=
// 		rightSideView(root.left, memo).length
// 	) {
// 		memo[root] = [root.val, ...rightSideView(root.right, memo)]
// 		return memo[root]
// 	} else {
// 		newChain = [...rightSideView(root.left, memo)]

// 		for (let i = 0; i < rightSideView(root.right, memo).length; i++) {
// 			newChain.shift()
// 		}
// 		memo[root] = [root.val, ...rightSideView(root.right, memo), ...newChain]
// 		return memmo[root]
// 	}
// }

// -- ideal solution that i need to learn from
// const rightSideView = (root) => {
// 	const result = []

// 	const deep = (node, level) => {
// 		if (!node) return null //or can return nothing

// 		result[level] = node.val
// 		deep(node.left, level + 1)
// 		deep(node.right, level + 1)
// 	}

// 	deep(root, 0)

// 	return result
// }

// -- alternative example solution
// var rightSideView = function (root) {

// implement reverse level order traversal
// put right node first then left node
// this way when we are looping through elements
// we get right most node at each level at index i=0

// 	var queue = []
// 	var res = []

// 	if (root == null) return res

// 	queue.push(root)

// 	while (queue.length) {
// 		let len = queue.length
// 		for (let i = 0; i < len; i++) {
// 			// at each take first element and add to result list
// 			let curr = queue.shift()
// 			if (i == 0) res.push(curr.val) // since we are pushing right and then left, i==0 represents the right most element at each level
// 			if (curr.right != null) queue.push(curr.right)
// 			if (curr.left != null) queue.push(curr.left)
// 		}
// 	}
// 	return res
// }

// output [3,4]
console.log(
	rightSideView({val: 3, left: null, right: {val: 4, left: null, right: null}})
)
// output [1,3,4]
console.log(
	rightSideView({
		val: 1,
		left: {val: 2, left: {val: 4, left: null, right: null}, right: null},
		right: {val: 3, left: null, right: null},
	})
)
