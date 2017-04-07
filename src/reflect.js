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
    // console.log(obj); // { a: 1, b: 4, c: 3 }
}

{
    let myObject = {
        foo: 1,
        bar: 2,
        get baz() {
            return this.foo + this.bar;
        }
    }
     // console.log(myObject.baz); // 3

    let myReceiverObject = {
        foo: 4,
        bar: 4
    }
    // console.log(Reflect.get(myObject, 'baz', myReceiverObject)); // 8
}

{
    let myObj = {
        foo: 1,
        set bar(value) {
            return this.foo = value;
        }
    }
    console.log(myObj.foo); // 1
    Reflect.set(myObj, 'foo', 2);
    console.log(myObj.foo); // 2

    console.log(Reflect.set(myObj, 'bar', 4)); // true
    console.log(myObj.foo); // 4
}

{
    let myObj = {
        foo: 4,
        set bar(value) {
            return this.foo = value;
        }
    }

    var myReceiverObj = {
        foo: 0
    }

    Reflect.set(myObj, 'bar', 1, myReceiverObj);
    console.log(myObj.foo); // 4
    console.log(myReceiverObj.foo); // 1
}