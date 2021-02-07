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

// console.log(
// 	rightSideView({val: 3, left: null, right: {val: 4, left: null, right: null}})
// )
// console.log(
// 	rightSideView({
// 		val: 1,
// 		left: {val: 2, left: {val: 4, left: null, right: null}, right: null},
// 		right: {val: 3, left: null, right: null},
// 	})
// )
