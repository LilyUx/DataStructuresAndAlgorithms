// 判断是否相等
export const defaultEquals = (a, b) => {
    return a === b;
}

//  链表节点类
export class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

/**
 * 链表:每个元素有一个存储元素本身的节点和一个指向下一个元素的引用（指针或链接）组成。
 * @method
 *  push(element) 向链表尾部添加一个新元素
 *  insert(element, index) 向链表的特定位置插入一个新元素
 *  getElementAt(index) 返回链表中特定位置的元素，如果链表中不存在这样的元素，则返回undefined。
 *  remove(element) 从链表中移除一个元素
 *  indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素则返回-1
 *  removeAt(index) 从链表的特定位置移除一个元素
 *  isEmpty() 如果链表中不包含任何元素，返回true，如果链表长度大于0返回false
 *  size() 返回链表包含的元素个数
 *  getHead() 返回链表中的第一个元素
 *  toString()
 */
export class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    insert(element, index) {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element);
            if(index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {
        if(index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if(this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next
        }
        return -1;
    }

    removeAt(index) {
        if(index >= 0 && index < this.count) {
            let current = this.head;
            
            if(index === 0) {
                this.head = current.next;
            } else {
                // 方法1
                // let previous;
                // for (let i = 0; i < index; i++) {
                //     previous = current;
                //     current = current.next
                // }
                // previous.next = current.next;
                // 方法2
                let previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return this.current.next;
        }
        return undefined;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if(this.head == null) return '';
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 0; i < this.size() && current != null; i++) {
            objString = `${this.head.element}, ${this.head.element}`;
            current = current.next;
        }
        return objString;
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);
console.log(list);