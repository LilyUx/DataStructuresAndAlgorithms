/**
 *  Set 集合：由一组无序且唯一的项组成的。
 * @methods
 *  add(item) 向集合添加一个新元素
 *  delete(element) 向集合移除一个元素
 *  has(element) 如果元素在集合中，返回true，否则返回false
 *  clear() 移除集合中的所有元素
 *  size() 返回集合所包含元素的数量
 *  values() 返回一个包含集合中所有值（元素）的数组
 *  union(otherSet) 并集
 *  intersection(otherSet) 交集
 *  difference(otherSet) 差集
 *  isSubsetOf(otherSet) 子集
 */

class Set {
    constructor() {
        this.items = {};
    }

    add(element) {
        if(!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if(this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    has(element) {
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(item => unionSet.add(item));
        otherSet.values().forEach(item => unionSet.add(item));
        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        if(this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if(!otherSet.has(value )) {
                isSubset = false;
                return false;
            }
            return true;
        })
        return isSubset;
    }
}

const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));

// const set = new Set();
// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());


// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());

// set.delete(1);
// console.log(set.values());

// set.delete(2);
// console.log(set.values());
