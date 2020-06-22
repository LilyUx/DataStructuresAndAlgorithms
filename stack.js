/**
 * 基于对象实现的栈
 * @methods
 *  push(element) 添加一个元素（或几个）新元素到栈顶
 *  pop() 移除栈顶的元素，同时返回被移除的元素
 *  peek() 返回栈顶的元素，不对栈做任何修改
 *  isEmpty() 判断栈里是否有元素
 *  clear() 移除栈的所有元素
 *  size() 返回栈的元素个数
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.items = {};
    }
    // #count = 0;
    // #items = {};
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.clear = function () {
        // this.count = 0;
        // this.items = {};
        while (!this.isEmpty()) {
            this.pop();
        }
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.toString = function () {
        if (this.isEmpty())
            return '';
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = "" + objString + this.items[i];
        }
        return objString;
    };
    return Stack;
}());
function decimalToBinary(decNumber) {
    var remStack = new Stack();
    var number = decNumber;
    var rem;
    var binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
// console.log(decimalToBinary(233));
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(1000));
function baseConverter(decNumber, base) {
    var remStack = new Stack();
    var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = decNumber;
    var rem;
    var baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        console.log(remStack.pop());
        console.log('----');
        console.log(digits[remStack.pop()]);
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));
// console.log(baseConverter(100345, 35));
// const stack: Stack = new Stack();
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
// stack.clear();
// console.log(stack)
