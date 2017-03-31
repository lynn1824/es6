var obj = {foo: 'bar', baz: 42};
console.log(Object.keys(obj)); // ['foo', 'baz']
console.log(Object.values(obj)); // ['bar', 42] // es7属性
console.log(Object.getOwnPropertyDescriptor(obj, 'foo')); // {value: 'bar', writable: true, enumerable: true, configurable: true}
for(let item in obj) {
    console.log(`${obj[item]}`); // bar 42
}