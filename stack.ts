/**
 * 栈：后进先出（LIFO）。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端为栈底。新元素都靠近栈顶，旧元素接近栈底。
 * 基于对象实现的栈
 * @methods
 *  push(element) 添加一个元素（或几个）新元素到栈顶
 *  pop() 移除栈顶的元素，同时返回被移除的元素
 *  peek() 返回栈顶的元素，不对栈做任何修改
 *  isEmpty() 判断栈里是否有元素
 *  clear() 移除栈的所有元素
 *  size() 返回栈的元素个数
 */
class Stack {
    private count: number;
    private items: object;

    constructor() {
        this.count = 0;
        this.items = {}
    }
    // #count = 0;
    // #items = {};

    // 添加一个元素（或几个）新元素到栈顶
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // 移除栈顶的元素，同时返回被移除的元素
    pop(): any {
        if(this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // 返回栈顶的元素，不对栈做任何修改
    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    // 判断栈里是否有元素
    isEmpty() {
        return this.count === 0;
    }

    // 移除栈的所有元素
    clear() {
        // this.count = 0;
        // this.items = {};
        while(!this.isEmpty()) {
            this.pop();
        }
    }

    // 返回栈的元素个数
    size() {
        return this.count;
    }

    toString(): string {
        if(this.isEmpty()) return '';
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}${this.items[i]}`;
        }
        return objString;
    }
}

// 十进制转换为二进制
function decimalToBinary(decNumber: number): string {
    const remStack: Stack = new Stack();
    let number = decNumber;
    let rem: number;
    let binaryString: string = '';
    while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

// console.log(decimalToBinary(233));
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(1000));


// 进制转换
function baseConverter(decNumber: number, base: number): string {
    const remStack: Stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem: number;
    let baseString: string = '';

    if(!(base >=2 && base <= 36)) {
        return '';
    }

    while(number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while(!remStack.isEmpty()) {
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