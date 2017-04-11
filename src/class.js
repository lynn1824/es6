/**
 * @desc Class类的引入实现其实还是基于原型的实现,只是语法上看上去更符合类似于java c++那种面向对象的语言
 * class定义不存在变量提升
 */

{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return 'x:' + this.x + ' y:' + this.y;
        }
    }

    let point = new Point(1, 2);
    console.log(point.toString());
}

{
    class Person {
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }

        say(txt) {
            console.log(this.name + ' say content is ' + txt);
        }
    }

    class Student extends Person {
        // 如果没有显示定义constructor方法, super方法会被默认调用
        constructor(name, sex, age) {
            super(name, sex); // 继承必须先调用super方法
            this.age = age;
        }

        info(classTxt) {
            console.log('hi:' + classTxt + ' name is ' + this.name);
        }
    }

    var p = new Person('lynn', '男');
    p.say('hello');

    var s = new Student('lynn', 'name', 28);
    s.info('IIIT 3071');
    s.say('哈哈哈');
}

{
    // CLASS表达式
    const MyClass = class Me {
        constructor(name) {
            this.name = name;
        }
        getClassName() {
            return Me.name;
        }
    }

    let inst = new MyClass('lynn');
    inst.getClassName(); // Me
    console.log(inst.name); // lynn
}

{
    class Logger {
        printName(name = 'there') {
            this.print(`Hello ${name}`);
        }

        print(text) {
            console.log(text);
        }
    }
    const logger = new Logger();
    const {printName} = logger;
    // printName(); // TypeError: Cannot read property 'print' of undefined
}

// 箭头函数不会随作用域的改变this也跟着发生改变
{
    class Logger {
        constructor() {
            // printName方法绑定当前实例对象
            this.printName = this.printName.bind(this);
        }

        printName(name = 'there') {
            this.print(`Hello ${name}`);
        }

        print(text) {
            console.log(text);
        }
    }
    const logger = new Logger();
    const {printName} = logger;
    printName(); // TypeError: Cannot read property 'print' of undefined
}

{
    // 在没有调用super方法之前,不可以使用this,会报错;
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    class ColorPoint extends Point {
        constructor(x, y, color) {
            // this.color = color; // this is not defined
            super(x, y);
            this.color = color; // 正确
        }
    }

    let cp = new ColorPoint(1, 2, 'blue');
    cp instanceof ColorPoint; // true
    cp instanceof Point; // true
    cp instanceof Object; // true
}

{
    class A {
    }

    class B extends A {
    }

    console.log(B.__proto__ === A); // true
    console.log(B.prototype.__proto__ === A.prototype) // true

    var c = new B();
    console.log(c.__proto__ === B); // false
    console.log(c.__proto__ === B.prototype); // true
}

{
    var obj = {
        a: 1,
        b: 2
    }

    function S() {
        this.c = 4;
    }

    S.prototype.say = function () {
        console.log('哈哈');
    }

    // 兼容写法
    Object.setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf : function (obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }

    Object.setPrototypeOf(obj, S.prototype);
    obj.say(); // 哈哈
}

{
    function S() {
        this.t = 4;
    }

    S.prototype.t = 9;
    S.prototype.say = function () {
        console.log(`哈哈 ${this.t}`);
    }

    var obj = {
        a: 1,
        b: 2,
        t: 10
    }

    obj.__proto__ = Object.create(S.prototype);
    obj.say();
}

{
    // super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。
    // new.target指向当前正在执行的函数。可以看到，在super()执行时，它指向的是子类B的构造函数，而不是父类A的构造函数。也就是说，super()内部的this指向的是B。
    class A {
        constructor() {
            console.log(new.target.name);
        }
    }
    class B extends A {
        constructor() {
            super();
        }
    }
    new A() // A
    new B() // B
}

{
    // 子类B当中的super.p()，就是将super当作一个对象使用。这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。
    class A {
        p() {
            return 2;
        }
    }

    class B extends A {
        constructor() {
            super();
            console.log(super.p()); // 2
        }

        get m() {
            return super.p;
        }
    }

    let b = new B();
    console.log(b.m); // P()
}

{
    class A {
        constructor() {
            this.x = 1;
        }
        print() {
            console.log(this.x);
        }
    }

    class B extends A {
        constructor() {
            super();
            this.x = 2;
        }
        m() {
            super.print(); // super.print.call(this);
        }
    }

    let b = new B();
    b.m(); // 2
    console.log(b.x); // 2
}

{
    class A {
        constructor() {
            this.x = 1;
        }
        print() {
            console.log(this.x);
        }
    }

    class B extends A {
        constructor() {
            super();
        }
        m() {
            super.print(); // super.print.call(this);
        }
    }

    let b = new B();
    b.m(); // 1
    console.log(b.x); // 1
}

{
    class Parent {
        // 静态方法
        static myMethod(msg) {
            console.log('static', msg);
        }

        // 示例方法
        myMethod(msg) {
            console.log('instance', msg);
        }
    }

    class Child extends Parent {
        static myMethod(msg) {
            super.myMethod(msg);
        }

        myMethod(msg) {
            super.myMethod(msg);
        }
    }

    Child.myMethod(1); // static 1
    var c = new Child();
    c.myMethod(1); // instance 1
}

{
    function MyArray() {
        Array.prototype.constructor.call(this);
        Array.apply(this, arguments);
    }

    MyArray.prototype = Object.create(Array.prototype, {
       constructor: {
           value: MyArray,
           writable: true,
           configurable: true,
           enumerable: true
       }
    });

    var colors = new MyArray();
    colors[0] = 'red';
    console.log(colors.length);
}