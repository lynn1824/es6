/**
 *  @desc: 解构(Destructuring)
 *  @概念: ES6允许按照一定模式(也叫匹配,比如左边[a, b] = [1, 2, 3], a = 1, b = 2)，从数组和对象中提取值，对变量进行赋值，这被称为解构;
 *  其中三点为动态匹配,返回数组。 如: [a, b , ...c] = [1, 2, 3, 4, 5]  a = 1, b = 2, c = [3, 4, 5]
 *
 */
/**
{
    let a = 1;
    let b = 2;
    let c = 3;
    console.log(a + b + c); // 6
}
{
    let [a, b, c] = [1, 2 , 3];
    console.log(a + b + c); // 6
}
{
    let {a, b, c} = {a: 1, b: 2, c: 3};
    console.log(a + b + c); // 6
}
// 这三种方式是等价的
 **/

/***
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

let [ , , third] = ["foo", "bar", "baz"];
console.log(third) // "baz"

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

let [x, y, ...z] = [1];
console.log(x); // 1
console.log(y); // undefined
console.log(z); // []

{
    let {a, b, ...c} = {a: 1, b: 2, c: 3, d: 4, f: 5};
    console.log(a + b); // 3
    console.log(c); // Unexpected token  报错;
}

let [foo] = [];
 foo; // undefined
let [bar, foo] = [1];
console.log(foo); // undefined
console.log(bar); // 1
*/

/***
 *  @desc: 不完全解构, 它会从左至右进行匹配, 没有匹配成功就是undefined
 *
{
    let [x, y] = [1, 2, 3];
    console.log(x); // 1
    console.log(y); // 2
}
{
    let [x, [y], z] = [1, [2,3], 3];
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}
*/

/**
 * @desc: 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
 *
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};

 // 正确
let {a, z} = {z: 1}
console.log(a); // undefined
console.log(z); // 1, 这里是按字母进行匹配的,z 与 z匹配
 */

/**
 *  @desc 解构允许赋默认值
 *
 let [a, b = 1] = [1];
 console.log(a); // 1
 console.log(b); // 1
 let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
 let [x = 1] = [null]; // x = null

 let [x = 1, y = x] = [];     // x=1; y=1
 let [x = 1, y = x] = [2];    // x=2; y=2
 let [x = 1, y = x] = [1, 2]; // x=1; y=2
 let [x = y, y = 1] = [];     // ReferenceError
 */

/***
 * @desc: 对象的解构, 对象的匹配规则是按标识匹配,不是按顺序匹配
 * */
// {
//     let {a, b, d} = {a: 10, c:13, b: 12};
//     console.log(a);  // 10
//     console.log(b);  // 12
//     console.log(d);  // undefined
// }
// 如果变量与属性名称不一样,必须写成这样
// {
//     var {foo: baz} = {foo: 'aaa', bar: 'bbb'};
//     console.log(baz); // aaa
//
//     let obj = {first: 'hello', last: 'world'};
//     let {first, last} = obj;
//     console.log(first); // hello
//     console.log(last); // world
//
//     let {first: f, last: l} = obj;
//     console.log(f); // hello
//     console.log(l); // world
// }
// 注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。
// {
//     let foo;
//     let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"
//
//     let baz;
//     let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"
// }
// {
//     let obj = {
//         p: [
//             'Hello',
//             { y: 'World' }
//         ]
//     };
//
//     let { p: [x, { y }] } = obj;
//     console.log(x); // "Hello"
//     console.log(y) // "World"
// }
//
// {
//     let obj = {
//         p: [
//             'Hello',
//             { y: function () {
//                return 10;
//             } }
//         ]
//     };
//
//     let { p: [x, { y }] } = obj;
//     console.log(x); // "Hello"
//     console.log(y()) // 10
//     console.log(p); //  p is not defined, p是模式,不会被赋值
// }
// 对象的解构也可以使用默认值
// {
//     let {a, b = 1} = {a: 3};
//     console.log(a); // 3
//     console.log(b); // 1
//
//     // let {x:y = 3} = {x: 1};
//     // console.log(x); // undefined
//     // console.log(y); // 3
//
//     let {message: z = 3}; // Missing initializer in destructuring declaration(报错)
//     console.log(z);
// }
// 只有undefined时不会被赋值,null指的是空对象
// {
//     let {x = 3} = {x: undefined}; // x = 3;
//     let {x = 3} = {x: null}; // null
// }
// 错误的写法
// let x;
// ({x} = {x: 1});
// console.log(x); // 1
// {x} = {x: 1}; // 报错 SyntaxError: syntax error, JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。
// let { log, sin, cos, random } = Math; // 上面代码将Math对象的对数、正弦、余弦、随机数四个方法，赋值到对应的变量上，使用起来就会方便很多。
// console.log(random()); // 0.06926197324998795

/**
 *  @desc: 字符串解构赋值
 *
{
    const [a, b, c ,d, e, ...z] = "helloss";
    console.log(a); // h
    console.log(b); // e
    console.log(c); // l
    console.log(d); // l
    console.log(e); // o
    console.log(z); // ['s', 's']

    // 对象赋值匹配
    const str = "hello";
    let {length} = str;
    console.log(length); // 5
}*/
/**
 * @desc 数值与布尔值的匹配
 *
{
    let {toString: s} = 123;
    console.log(s === Number.prototype.toString); // true

    let {toString: t} = true;
    console.log(t === Boolean.prototype.toString); // true
}*/
/**
 *  @desc 函数参数解构赋值
 *
{
    function add([x, y]) {
        return x + y;
    }
    console.log(add([1, 2])); // 3


    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }

    console.log(move({x: 3, y: 8})); // [3, 8]
    console.log(move({x: 3})); // [3, 0]
    console.log(move({})); // [0, 0]
    console.log(move()); // [0, 0]

    function move({x = 0, y = 0}) {
        return [x, y];
    }

    console.log(move({x: 3, y: 8})); // [3, 8]
    console.log(move({x: 3})); // [3, 0]
    console.log(move({})); // [0, 0]
    console.log(move()); // 报错  Cannot match against 'undefined' or 'null'

    undefined就会触发函数参数的默认值。
    let cc; // 当前cc的值为undefined
    let arr = [1, undefined, 3, null, cc].map((x = 'yes') => x);
    console.log(arr); // [ 1, 'yes', 3, null, 'yes' ]

    ({a: (b)} = {a: 15});
    console.log(b); // 15
    ({z} = {z: 15});
    console.log(z); // 15
} */

/**
 *  @desc 作用
 * */
// 数据交换
// {
//     const a = 1;
//     const b = 2;
//     let [x, y] = [b, a];
//     console.log(x); // 2
//     console.log(y); // 1
// }
// 返回函数
// {
//     function test([x, y, ...z]) {
//         return [y, x, z];
//     }
//     let [a, b, c] = test([1, 2, 3, 4]);
//     console.log(a); // 2
//     console.log(b); // 1
//     console.log(c); // [3, 4]
//         function example() {
//             return {
//                 a: 10,
//                 b: 11
//             }
//         }
//         let {a, b, c} = example();
//         console.log(a); // 10
//         console.log(b); // 11
//         console.log(c); // undefined
// }
// map遍历
// for-in 循环用以遍历对象的属性。es6: for-of 循环用以遍历数据 -- 就像数组中的值一样
{
    // let map = new Map();
    // map.set('name', 'lynn');
    // map.set('age', 28);
    // console.log(map);
    // for(let [key, value] of map) {
    //     console.log(`${key}:${value}`); // name:lynn age:28
    // }
}
{
    let jasonData = {
        name: "lynn",
        age: 28
    }
    let {name, age} = jasonData;
    console.log(`${name} : ${age}`); // lynn : 28
}



