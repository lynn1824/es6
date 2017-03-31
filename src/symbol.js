/**
 * Created by jason on 2017/3/28.
 */
/**
 * @desc symbol函数是防止对象名重复的一个唯一的一种数据类型,凡是属于名属于Symbol类型的,都不会产生重名冲突;
 */
// let s = Symbol();
// console.log(s.toString()); // Symbol()
//
// // 没有参数的情况
// var s1 = Symbol();
// var s2 = Symbol();
//
// s1 === s2 // false
//
// // 有参数的情况
// var s1 = Symbol('foo');
// var s2 = Symbol('foo');
//
// s1 === s2 // false
//
// var sym = Symbol('My symbol');
// "your symbol is " + sym;
// // TypeError: can't convert symbol to string
// `your symbol is ${sym}`;
// // TypeError: can't convert symbol to string

var mySymbol1 = Symbol('a');
var mySymbol2 = Symbol('b');
console.log(mySymbol1); // Symbol(a)
console.log(mySymbol2); // Symbol(b)

var test = Symbol.for('c');
var test1 = Symbol.for('a');
var test2 = Symbol.for('a');
console.log(test); // Symbol(c)
console.log(test1 == mySymbol1); // false
console.log(test1 == test2); // true

Symbol.for("bar") === Symbol.for("bar")  // 相同
// true

Symbol("bar") === Symbol("bar") // 不同
// false

let [...s] = [1, 2, 3];
// console.log(s);