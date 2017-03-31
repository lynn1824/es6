{
    var myObject = {
        foo: 1
    }

    // 旧写法
    'foo' in myObject; // true
    // 新写法
    Reflect.has(myObject, 'foo'); // true
}

{
    var myObj = {
        foo: 'bar'
    }

    // 旧写法
    delete myObj.foo;
    // 新写法
    Reflect.deleteProperty(myObj, 'foo');
}

{
    function Person(name) {
        this.name = name;
    }

    // 旧写法
    var obj = new Person('lynn');
    // 新写法
    var obj = Reflect.construct(Person, ['lynn']);
}

{
    var a = {
        a: 1,
        b: 2
    }
    var b = {
        b: 4
    }
    var c = {
        c: 3
    }
    var obj = Object.assign(a, b, c);
    console.log(obj);
}