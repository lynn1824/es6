/**
 * @desc generator函数你可以把它理解成为一个分段函数,内部存在状态管理机制,由next方法进入下一执行状态
 * next()执行完毕后,会返回一个对象{value:xxx, done:false}  当done=false时,可以继续, 当done=true时,已经结束;
 * 调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。
 * （1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
   （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
   （3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
   （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
    yield语句只能用在 Generator 函数里面，用在其他地方都会报错。
 */
{
    function* helloworldgenerator() {
        console.log(4444);
        yield 'hello';
        console.log(1111);
        yield 'world';
        console.log(2222);
        return 'finish';
    }

    var obj = helloworldgenerator();
}

// generator函数只有调用了next()方法才会执行,不管有没有yield
{
    function* f(a) {
        // console.log('执行了....' + a); // 执行了....sss
    }

    var generator = f('sss');
    setTimeout(function () {
        generator.next('hi');
    }, 3000)
}

{
    // let arr = [1, 2, [3, 4, [5, 6]], 7, 8];
    // var flat = function* (arr) {
    //     arr.forEach((item) => {
    //         if(typeof item !== 'number') {
    //             yield* flat(item);
    //         }else {
    //             yield item;
    //         }
    //     })
    // }
    //
    // for (let f of flat(arr)) {
    //     console.log(f);
    // }
}

{
    // 注意点: 下面代码使用for...of循环，依次显示5个yield语句的值。
    // 这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，
    // 不包括在for...of循环之中。
    function *foo() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    for (let v of foo()) {
        console.log(v); // 1, 2, 3, 4, 5
    }
}

{
    // function* eachObj(obj) {
    //     let objKeys = Reflect.ownKeys(obj);
    //
    //     for(let key of objKeys) {
    //         yield [key, obj[key]];
    //     }
    // }
    //
    // let objTest = {
    //     a: 10,
    //     b: 20,
    //     c: 30
    // }
    //
    // for(let [key, value] of eachObj(objTest)) {
    //     console.log(key + ':' + value);
    // }
    // a:10
    // b:20
    // c:30
}

{
    function* eachObj() {
        let objKeys = Object.keys(this);

        for(let key of objKeys) {
            yield [key, this[key]];
        }
    }

    let objTest = {
        a: 10,
        b: 20,
        c: 30
    }
    objTest[Symbol.iterator] = eachObj;

    for(let [key, value] of objTest) {
         console.log(key + ':' + value);
    }
    // a: 10
    // b: 20
    // c: 30
}

{
    function* numbers() {
        yield 1;
        yield 2;
        yield 3;
        return 4; // return后next将会返回undefined, done=true
        yield 5;
    }

    var obj = numbers();
    for(let i = 0; i < 9; i++) {
        // console.log(obj.next()); // 1, 2, 3, 4
    }

    let [...nmbs] = numbers();
    console.log(nmbs); // 1, 2, 3

    let [x, y] = numbers();
    console.log(x + ':' + y); // 1:2

    let [a, b, c, d] = numbers();
    console.log(a + '-' + b + '-' + c + '-' + d); // 1-2-3-undefined

    for(let z of numbers()) {
        console.log(z); // 1, 2, 3
    }
}

{
    // generator函数捕捉到异常后,会终止执行,再次抛出异常时将会在generator函数外部捕获
    var g = function* () {
        try {
            yield;
        } catch (e) {
            console.log('内部捕获', e);
        }
    };

    var i = g();
    i.next();

    try {
        i.throw('a');
        i.throw('b');
    } catch (e) {
        console.log('外部捕获', e);
    }
    // 内部捕获 a
    // 外部捕获 b
}

{

    var gen = function* gen(){
        try {
            yield console.log('a');
        } catch (e) {
            // ...
        }
        yield console.log('b');
        yield console.log('c');
    }

    var g = gen();
    g.next() // a
    g.throw() // b
    g.next() // c
}

{
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    var g = gen();

    g.next()        // { value: 1, done: false }
    g.return('foo') // { value: "foo", done: true }
    g.next()        // { value: undefined, done: true }
}

{
    function* numbers() {
        yield 1;
        try {
            yield 2;
            yield 3;
        }catch (e) {

        }finally {
            yield 4;
            yield 5;
        }
    }
    var g = numbers();
    g.next(); // 1
    g.next(); // 2
    g.return(10); // 4
    g.next(); // 5
    g.next(); // 10
    g.next(); // undefined
    // 调用return方法后，就开始执行finally代码块，然后等到finally代码块执行完，再执行return方法。
}

{
    // 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
    function* foo() {
        yield 'a';
        yield 'b';
    }

    function* bar() {
        yield 'x';
        foo();
        yield 'y';
    }

    for (let v of bar()){
        console.log(v);
    }
    // "x"
    // "y"
}

{
    // yield*语句，用来在一个 Generator 函数里面执行另一个 Generator 函数。

    function* foo() {
        yield 'a';
        yield 'b';
    }

    function* bar() {
        yield 'x';
        yield* foo();
        yield 'y';
    }

    // 等同于
    function* bar() {
        yield 'x';
        yield 'a';
        yield 'b';
        yield 'y';
    }

    // 等同于
    function* bar() {
        yield 'x';
        for (let v of foo()) {
            yield v;
        }
        yield 'y';
    }

    for (let v of bar()){
        console.log(v);
    }
    // "x"
    // "a"
    // "b"
    // "y"
}


{
    function* gen(x){
        var y = yield x + 2;
        y = 10;
        return y;
    }

    var g = gen(1);
    console.log(g.next()); // { value: 3, done: false }
    console.log(g.next(4)); // { value: 2, done: true }
}
