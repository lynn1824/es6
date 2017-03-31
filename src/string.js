/***
 * @desc: 字符串函数扩展方法
 */
var s = 'Hello World!!';
// console.log(s.startsWith('Hello')); // true
// console.log(s.endsWith('World!!')); // true
// console.log(s.includes('He')); // true
//
// // es7
// console.log(s.padStart(16, 'AB')); // ABAHello World!!
// console.log(s.padEnd(16, 'AB')); // Hello World!!ABA
// console.log(s.padStart(10, 'AB')); // Hello World!!  当数字小于字符串大小,将返回原来字符串
// console.log(s.padEnd(10, 'AB')); // Hello World!!

var a = 25;
function test([a, b]) {
    return a + b;
}
console.log(`${s}--${a}--${test([1, 2, 3])}`); // Hello World!!--25--3

var x = 1;
var y = 2;
console.log(`${x} + ${y} = ${x + y}`); // 1 + 2 = 3
console.log(`${x} + ${y * 2} = ${x + y * 2}`); // 1 + 4 = 5
var obj = {x: x, y: y};
console.log(`${obj.x} --- ${obj.y}`); // 1 --- 2

{
    let str = 'return' + '`Hello ${name}`';
    let func = new Function('name', str);
    console.log(func('lynn')); // Hello lynn
}

{
    let str = '(name) => console.log(`Hello ${name}`);';
    let fun = eval.call(null, str);
    fun('lynn'); // Hello lynn
}