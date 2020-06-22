/**
 * 双端队列：允许同时从前端和后端添加和删除元素的特殊队列。
 * @method
 *  addFront(element) 在双端队列前端添加新的元素
 *  addBack(element) 在双端队列后端添加新的元素
 *  removeFront() 从双端队列前端移除第一个元素
 *  removeBack() 从双端队列后端移除第一个元素
 *  peekFront() 返回双端队列前端的第一个元素
 *  peekBack() 返回双端队列后端的第一个元素
 *  isEmpty() 双端队列中不包含任何元素返回true，否则返回false。
 *  clear() 移除双端队列中的所有元素
 *  size() 返回双端队列中的元素个数
 *  toString() 
 */
class Deque {
    private count: number;
    private lowestCount: number;
    private items: object;
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    addFront(element) {
        if(this.isEmpty()){
            this.addBack(element);
        } else if(this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[this.lowestCount] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if(this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack() {
        if(this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peekFront() {
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    peekBack() {
        if(this.isEmpty()) return undefined;
        return this.items[this.count];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString() {
        if(this.isEmpty()) return '';
        let strObj = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            strObj = `${strObj},${this.items[i]}`;
        }
        return strObj;
    }
}

// const deque = new Deque();
// console.log(deque.isEmpty());
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString());
// deque.addBack('Camila');
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
// deque.removeFront();
// console.log(deque.toString());
// deque.removeBack();
// console.log(deque.toString());
// deque.addFront('John');
// console.log(deque.toString()); 

// 判断是否是回文字符串
// function palindromeChecker(aString: string) {
//     if(!aString.length) return false;
//     const deque = new Deque();
//     let isEqual: boolean = true;
//     let firstChar: string;
//     let lastChar: string;
//     let lowerString = aString.toLocaleLowerCase().split('').join('');

//     for (let i = 0; i < lowerString.length; i++) {
//         deque.addBack(lowerString.charAt(i));
//     }
//     while(deque.size() > 1 && isEqual) {
//         firstChar = deque.removeFront();
//         lastChar = deque.removeBack();
//         if(firstChar !== lastChar) {
//             isEqual = false;
//         }
//     }

//     return isEqual;
// }

// 判断是否是回文字符串
function palindromeChecker(aString: string): boolean {
    if(!aString.length) return false;
    let lowerString = aString.toLocaleLowerCase().split('').reverse().join('');
    // if(aString === lowerString)
    // for (let i = 0; i < lowerString.length; i++) {
    //     deque.addBack(lowerString.charAt(i));
    // }
    // while(deque.size() > 1 && isEqual) {
    //     firstChar = deque.removeFront();
    //     lastChar = deque.removeBack();
    //     if(firstChar !== lastChar) {
    //         isEqual = false;
    //     }
    // }

    return aString === lowerString;
}

console.log('aaa', palindromeChecker('aaa'));
console.log('madam', palindromeChecker('madam'));
console.log('level', palindromeChecker('level'));
console.log('xuling hello', palindromeChecker('xuling hello'));