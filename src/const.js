/**
 * 1、const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动,
 *    所以如果是对象,值还是可以修改的!但是栈内存中的地址不可修改,如a={},这又是新开辟了一个地址;
 * 2、const同样存在块级作用域,只在{}中有效, 跟let一样;
 * 3、const在同一作用域中,不允许重复声明,如var a = 10; const a就会报错;
 * 4、如果非要将对象不可修改,使用const obj = Object.freeze({a: 10});  // 这样修改就不会启到作用了
 * 5、es6中声明变量的六种方法:[var, function, let, const, import, class]
 * 6、顶层对象的属性与全局变量挂钩，被认为是JavaScript语言最大的设计败笔之一。
 *    ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
 *    另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
 *    也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
 *
/**
const PI = 3.1415926;
console.log(PI); // 3.1415926
// PI = 3.15;  直接报错 Assignment to constant variable.
 */

/*********************************************************************
const obj = {a: 10};
console.log(obj.a); // 10
obj.a = 11;
console.log(obj.a); // 11
 obj = {}; // 如果新开辟一个内存地址,就会报错。 const保存在栈内存当中的东西不可变;堆内存中的它不会管;
****/

/*******************************************************************
if(true) {
    const obj = {a: 10};
}
console.log(obj.a); // error: obj is not defined
 ****/

/***
var message = 10;
let age = 25;

const message = 22;  // Identifier 'message' has already been declared(不允许重复声明, 跟let一样)
const age = 30;
 */

/******
const obj = Object.freeze({a: 10});
console.log(obj.a);  // 10
obj.a = 11;
console.log(obj.a);  // 10
 ***/