/**
 * 队列：遵循先进先出（FIFO）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。（排队）
 * @method
 *  enquene(element) 向队列尾部添加一个新的项
 *  dequene() 移除队列的第一项并返回被移除的元素
 *  peek() 返回队列中的第一个元素--最先被添加，也将是最先被移除的元素。
 *  isEmpty() 队列中不包含任何元素返回true，否则返回false。
 *  size() 返回队列包含的元素个数。
 */
class Quene {
    private count: number;
    private lowestCount: number;
    private items: Object;
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    enquene(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequene() {
        if(this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString(): string {
        if(this.isEmpty()) return '';
        let strObj = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++){
            strObj = `${strObj},${this.items[i]}`;
        }
        return strObj;
    }
}

// const quene = new Quene();
// console.log(quene.isEmpty());
// quene.enquene('John');
// quene.enquene('Jack');
// console.log(quene.toString());
// quene.enquene('Camila');
// console.log(quene.toString());
// console.log(quene.size());
// console.log(quene.isEmpty());
// quene.dequene();
// quene.dequene();
// console.log(quene.toString());

// 击鼓传花游戏
function hotPotato(list, num) {
    const quene = new Quene();
    const elimitatedList = [];

    for (let i = 0; i < list.length; i++) {
        quene.enquene(list[i]); 
    }

    while(quene.size() > 1) {
        for (let i = 0; i < num; i++) {
            quene.enquene(quene.dequene());
        }
        elimitatedList.push(quene.dequene());
    }

    return {
        elimitated: elimitatedList,
        winner: quene.dequene()
    }
}

const names = ['john', 'Jack', 'Calima', 'apple', 'pear'];
const result = hotPotato(names, 7);
result.elimitated.forEach(name => {
    console.log(`${name}被淘汰了`);
})

console.log(`胜利者：${result.winner}`)