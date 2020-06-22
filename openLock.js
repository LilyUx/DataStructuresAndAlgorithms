var openLock = function(deadends, target) {
    const limits = target.length;
    // 过滤集合
    let close = new Set(deadends);
    let start = new Array(limits).fill('0').join('');
    if(close.has(start)) return -1;
}

const deadends = ["0201","0101","0102","1212","2002"]
const target = "0202"
console.log(openLock(deadends, target));