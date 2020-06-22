var Deque = /** @class */ (function () {
    function Deque() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    Deque.prototype.addFront = function (element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }
        else {
            for (var i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[this.lowestCount] = element;
        }
    };
    Deque.prototype.addBack = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Deque.prototype.removeFront = function () {
        if (this.isEmpty())
            return undefined;
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Deque.prototype.removeBack = function () {
        if (this.isEmpty())
            return undefined;
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Deque.prototype.peekFront = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.lowestCount];
    };
    Deque.prototype.peekBack = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count];
    };
    Deque.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Deque.prototype.clear = function () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    Deque.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Deque.prototype.toString = function () {
        if (this.isEmpty())
            return '';
        var strObj = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            strObj = strObj + "," + this.items[i];
        }
        return strObj;
    };
    return Deque;
}());
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
function palindromeChecker(aString) {
    if (!aString.length)
        return false;
    var lowerString = aString.toLocaleLowerCase().split('').reverse().join('');
    console.log(lowerString);
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
