/***
 * 1、let只对该{}区域内有效
 * 2、let不存在变量提升, 如console.log(tmp); let tmp = 10; 直接报错,而不是undefined
 * 3、let在同一作用域块内不允许重复声明, var tmp = 10; let tmp = 12; // 直接报错,tmp在该作用域内已经存在
 * 4、在for循环内,如保存i的引用,不需要使用闭包,用let声明即可,跟闭包是同样的效果;
 **/

let obj = {name: 'lynn', age: 29, sex: '男'};
const a = 10;
const b = 20;
var arr = [];
for(let i = 0; i < 10; i++) {
    arr[i] = function () {
        console.log(i);
        return i;
    }
}
// var 的情况
console.log("one:" + foo); // 输出undefined
var foo = 2;

// let 的情况
let bar = 2;
console.log("two:" + bar); // 报错ReferenceError

if(true) {
    let tmp; // 'TDZ结束';
    console.log(tmp);

    tmp = 'TDZ';
    console.log(tmp);
    !function () {
        let ss = 10;
        console.log(tmp + '--' + ss);
        function ff() {
            console.log(1111);
        }
        ff();
    }();
    tmp = 123;
    console.log(tmp);
}