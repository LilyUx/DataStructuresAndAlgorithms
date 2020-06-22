import { Node, LinkedList, defaultEquals } from './LinkedList';

const Compare = {
    LESS_YHAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare(a, b) {
    if(a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_YHAN : Compare.BIGGER_THAN;
}

/**
 * 有序列表
 */
class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index = 0) {
        if(this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if(comp === Compare.LESS_YHAN) {
                return i;
            }
            current= current.next;
        }
        return i;
    }
}