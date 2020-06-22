/**
 * 队列
 */
var Quene = /** @class */ (function () {
    function Quene() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    Quene.prototype.enquene = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Quene.prototype.dequene = function () {
        if (this.isEmpty())
            return undefined;
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Quene.prototype.clear = function () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    Quene.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.lowestCount];
    };
    Quene.prototype.isEmpty = function () {
        return this.count - this.lowestCount === 0;
    };
    Quene.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Quene.prototype.toString = function () {
        if (this.isEmpty())
            return '';
        var strObj = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            strObj = strObj + "," + this.items[i];
        }
        return strObj;
    };
    return Quene;
}());
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
function hotPotato(list, num) {
    var quene = new Quene();
    var elimitatedList = [];
    for (var i = 0; i < list.length; i++) {
        quene.enquene(list[i]);
    }
    console.log(quene);
    console.log('------------');
    while (quene.size() > 1) {
        for (var i = 0; i < num; i++) {
            quene.enquene(quene.dequene());
        }
        console.log(quene);
        elimitatedList.push(quene.dequene());
    }
    return {
        elimitated: elimitatedList,
        winner: quene.dequene()
    };
}
var names = ['john', 'Jack', 'Calima', 'apple', 'pear'];
var result = hotPotato(names, 7);
result.elimitated.forEach(function (name) {
    console.log(name + "\u88AB\u6DD8\u6C70\u4E86");
});
console.log("\u80DC\u5229\u8005\uFF1A" + result.winner);
