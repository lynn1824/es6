'use strict';

var obj = { name: 'lynn', age: 29, sex: '男' };
var a = 10;
var b = 20;
var arr = [];

var _loop = function _loop(i) {
    arr[i] = function () {
        console.log(i);
        return i;
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
// var 的情况
console.log("one:" + foo); // 输出undefined
var foo = 2;

// let 的情况
console.log("two:" + bar); // 报错ReferenceError
var bar = 2;

if (true) {
    tmp = 'TDZ';
    console.log(tmp);

    var tmp = void 0; // 'TDZ结束';
    console.log(tmp);

    tmp = 123;
    console.log(tmp);
}