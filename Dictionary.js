/**
 * 字典
 *  @method
 *  set(key, value) 向字典中添加新元素。如果key存在，那么已存在的value会被新的值覆盖
 *  remove(key) 通过使用简直作为参数来从字典中移除键值对应的数据值
 *  hasKey(key) 如果某个键值存在于字典中，返回true，否则返回false
 *  get(key) 通过以键值作为参数查找特定的数值并返回
 *  clear() 删除该字典中的所有值
 *  size() 返回字典所包含值的数量
 *  isEmpty() 在size等于0时返回true，否则返回false
 *  keys() 将字典所包含的所有键名以数组形式返回
 *  values() 将字典所包含的所有数值以数组形式返回
 *  keyValues() 将字典中的所有[键, 值]对返回
 *  forEach(callbackFn) 迭代字典中所有的键值对
 */

export const defaultToString = (item) => {
    if(item === null) {
        return 'NULL';
    } else if(item === undefined) {
        return 'UNDEFINED';
    } else if(typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

export class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

export class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.table = {};
        this.toStrFn = toStrFn;
    }

    set(key, value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key) {
        if(this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value;
    }
     
    clear() {
        this.table = {};
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }

    keyValues() {
        return Object.values(this.table);
    }

    forEach(callbackFn) {
        const valuePair = this.keyValues();
        for (let i = 0; i < valuePair.length; i++) {
            const result = callbackFn(valuePair[i].key, valuePair[i].value);
            if(result === false) {
                break;
            }
        }
    }

    toString() {
        if(this.isEmpty()) return '';
        const valuePair = this.keyValues();
        let objStr = `${valuePair[0].toString()}`;
        for (let i = 1; i < valuePair.length; i++) {
            objStr = `${objStr}, ${valuePair[i].toString()}`
        }
        return objStr;
    }
}

const dictionary = new Dictionary();
dictionary.set('apple', 'apple.com')
dictionary.set('google', 'google.com')
dictionary.set('baidu', 'baidu.com')
console.log(dictionary);
console.log(dictionary.toString());
// console.log(dictionary.hasKey('apple'));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('baidu'));
// console.log(dictionary.remove('baidu'));
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.keyValues());

// console.log(dictionary.toString());

// const value = new ValuePair('x', 'x');
// console.log(value.toString())