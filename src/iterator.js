/***
* iterator 是js当中的一种循环遍历
*/
{
	// let it = makeIterator([1, 2, 3, 4]);
	// function makeIterator(array) {
	// 	let nextIndex = 0;
	// 	return {
	// 		next: function(index) {
	// 			return nextIndex < array.length ? array[nextIndex++] : undefined;
	// 		}
	// 	}
	// }
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
	// console.log(it.next());
}

{
// 	let someStr = "hi";
// 	typeOf someStr[Symbol.Iterator]; // function

// 	var itr = someStr[Symbol.Iterator]();
// 	console.log(itr.next()); // h
// 	console.log(itr.next()); // i
}

{
	// const arr = [1, 2, 3, 4];
	// for(var value of arr) {
	// 	console.log(value);
	// }

	// const obj = {
	// 	a: 1,
	// 	b: 2
	// };
	// // obj[Symbol.iterrator] = arr[Symbol.iterrator].bind(arr);

	// for(let o of obj) {
	// 	console.log(o);
	// }
}

{
	// var arr = ['a', 'b', 'c', 'd'];
	// for(let a in arr) {
	// 	console.log(a);
	// }
	// 0, 1, 2, 3

	// for(let a of arr) {
	// 	console.log(a);
	// }
	// a, b, c, d
}

// 数组遍历
{
	var engines = new Set(['Gecko', 'Trident', 'Webkit', 'Webkit']);
	for(var e of engines) {
		console.log(e);
	}
}

{
	let es6 = new Map();
	es6.set("edition", 6);
	es6.set("committee", "TC39");
	es6.set("standard", "ECMA-262");

	// 默认会调用实体
	for(let [key, value] of es6.entries()) {
		console.log(`${key}:${value}`);
	}

	// 调用键
	for(let key of es6.keys()) {
		console.log(`hi: ${key}`);
	}

	// 调用值
	for(let value of es6.values()) {
		console.log(`hello: ${value}`);
	}
}

{
	// let str = "hello";
	// for(let s of str) {
	// 	console.log(s);
	// }
    //
	// // DOM NodeList对象
	// let paras = document.querySelectorAll("p");
	// for (let p of paras) {
	// 	p.classList.add("test");
	// }
    //
	// // arguments对象
	// function printArgs() {
	// 	for (let x of arguments) {
	// 		console.log(x);
	// 	}
	// }
	// printArgs('a', 'b');
}

{
	let obj = {
		a: 1,
		b: 2,
		c: 3
	}
	function *entries() {
		for(let key of Object.keys(obj)) {
			yield [key, obj[key]];
		}
	}

	// 循环调用
	for(let [key, value] of entries()) {
		console.log(`${key} -> ${value}`);
	}
}

/**
 *  1、有着同for...in一样的简洁语法，但是没有for...in那些缺点。
 *	2、不同用于forEach方法，它可以与break、continue和return配合使用。
 *	3、提供了遍历所有数据结构的统一操作接口。
 **/