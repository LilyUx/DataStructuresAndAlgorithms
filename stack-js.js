/**
 * 栈
 * @methods
 *  push(element) 添加一个元素（或几个）新元素到栈顶
 *  pop() 移除栈顶的元素，同时返回被移除的元素
 *  peek() 返回栈顶的元素，不对栈做任何修改
 *  isEmpty() 判断栈里是否有元素
 *  clear() 移除栈的所有元素
 *  size() 返回栈的元素个数
 */

 /**
  * 基于数组实现
  */
// class Stack {
//     constructor() {
//         this.items = []
//     }

//     push(element) {
//         this.items.push(element)
//     }

//     pop() {
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1]
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     size() {
//         return this.items.length;
//     }

//     clear() {
//         this.items = []
//     }
// }

// const stack = new Stack();
// console.log(stack.isEmpty())
// stack.push(5)
// stack.push(8)
// console.log(stack.peek())
// stack.push(11)
// console.log(stack.size())
// console.log(stack.isEmpty())
// stack.push(15)
// stack.pop()
// stack.pop()
// console.log(stack.size())