import { LinkedList } from './LinkedList';

const defaultToString = (item) => {
    if(item === null) {
        return 'NULL';
    } else if(item === undefined) {
        return 'UNDEFINED';
    } else if(typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.toStrFn = {};
    }
}

/**
 * 散列表
 * @method
 *  put(key, value) 向散列表增加一个新的项
 *  remove(key) 根据键值从散列表中移除值
 *  get(key) 返回根绝键值检索到的特定的值
 */
class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key) {
        if(typeof key === 'number') return key;
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    put(key, value) {
        if(key != null && value != value) {
            const position = this.hashCode(key);
            if(this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while(current != null) {
                if(current.element.key === key) {
                    linkedList.remove(current.element);
                    if(linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while(current != null) {
                if(current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    toString() {
        
    }
}

const hash = new HashTable();
hash.put('apple', 'apple.com')
hash.put('google', 'google.com')
hash.put('baidu', 'baidu.com')
console.log(hash.hashCode('apple') + ' - apple');
console.log(hash.hashCode('google') + ' - google');
console.log(hash.hashCode('baidu') + ' - baidu');