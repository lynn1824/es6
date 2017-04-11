/**
 * @desc promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
 * 它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。
 * Promise 的状态一旦改变，就永久保持该状态，不会再变了, 如已经调用了resolve,那么后面就算抛出异常，也会被忽略
 */
{
    // var promise = new Promise(function (resolve, reject) {
    //     if(true) {
    //         resolve(value);
    //     }else {
    //         reject(error);
    //     }
    // })
}

{
    // let promise = new Promise(function (resolve, reject) {

    // });
    // promise.then(function (value) {
    //     // 成功函数
    // }, function (error) {
    //     // 失败函数
    // })
}

// 例子
{
    // function timeout(ms) {
    //     return new Promise((resolve, reject) => {
    //        setTimeout(resolve, ms, 'done-->hi');
    //     });
    // }

    // timeout(100).then((value) => {
    //    console.log(value); // done-->hi
    // });
}

// promise新建后会立即执行
// {
//     let promise = new Promise((resolve, reject) => {
//         console.log('Promise');
//         resolve();
//     });

//     promise.then(() => {
//         console.log('Resolve');
//     });

//     console.log('hi');
//     // Promise
//     // hi
//     // Resolve
// }

// 异步图片加载
{
    // function loadImageAsync(url) {
    //     return new Promise((resolve, reject)=>{
    //         var img = new Image();
    //         image.onload = function() {
    //             resolve(img);
    //         }
    //         img.onerror = ()=>{
    //             reject(new Error('Could not load image at ' + url));
    //         }
    //         img.src = url;
    //     });
    // }
    // loadImageAsync('images/hi.png');
}

// promise处理异步请求
// {
//     let getJSON = function(url) {
//         let promise = new Promise((resolve, reject) => {
//             let client = new XMLHttpRequest();
//             client.open("GET", url);
//             client.onreadystatechange = handler;
//             client.responseType = "json";
//             client.setRequestHeader("Accept", "application/json");
//             client.send();

//             function handler(){
//                 if(this.readyState !== 4) {
//                     return;
//                 }
//                 if(this.status == 200) {
//                     resolve(this.response);
//                 }else {
//                     reject(new Error(this.statusText));
//                 }
//             }
//         });
//         return promise;
//     }

//     getJSON("data/posts.json").then((json) => {
//         console.log("Contents:  " + json);
//     }, (error) => {
//         console.error('出错了', error);
//     });
// }

/**
* 由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）, p2引用了p1，所以p2的状态是由p1决定
* then是Promise.prototype上的方法
*/
{
    // var p1 = new Promise(function(resolve, reject) {
    //     console.log(111);
    //     setTimeout(() => {
    //         console.log(444);
    //         reject(new Error('fail'))
    //     }, 1000);
    // });

    // var p2 = new Promise(function(resolve, reject) {
    //     console.log(222);
    //     //setTimeout(() => {
    //         console.log(333);
    //         resolve(p1);
    //     //}, 3000);
    // });

    // p1.then(result => {console.log(666);}, error => {console.log(777);});

    // p2.then(result => console.log(result), error =>{
    //     console.log(555);
    //     console.log('hi:' + error)
    // });
}

/***
* then的链式调用
*/
{
    // let p1 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 3000, 'hi, 我是p1');
    // });

    // p1.then((res) => {
    //     return 'hhhhh';
    // }, (info) => {
    //     return 'hi, 我这里是个错误信息';
    // }).then((result) => {
    //     console.log('我已经进入了新的then哦');
    //     console.log(result);
    //     throw new Error('222222');
    //     return '我返回123，我这里应该算是P2,新的，哈哈';
    // }, (error) => {
    //     console.log('这里是错误信息！！,但是不会进来');
    // }).catch((error) => {
    //     console.log('如果上面then抛出error,会进来这里哦！');
    //     return 'error, error, error';
    // }).then(result => {
    //     console.log(444);
    //     console.log(result);
    // });

    // 我已经进入了新的then哦
    // hhhhh
    // 如果上面then跑出error,会进来这里哦！
    // 444
    // error, error, error
}

/**
* 如果then方法中error存在，会调用error方法，忽略catch，如果不存在，调用catch方法。
*/
{
    // let p1 = new Promise((resolve, reject) => {
    //     throw new Error('error error!!');
    //     resolve('444');
    // });

    // p1.then((ret) => {
    //     console.log('success: ' + ret); // 如果先调用resolve, 将打印 success: 444
    // }, (error) => {
    //     console.log(`fail: ${error}`); // Error: error error!!
    // }).catch(error => {
    //     console.log(`${error}: 1111`);
    // });
}

/**
* promise当中的错误它会向后传递，如前端不断抛出错误，后面会在catch中被捕获
* 建议总是使用catch方法，而不使用then方法的第二个参数。
*/
{
    // let p1 = new Promise((resolve, reject) => {
    //     throw new Error('1111');
    // });

    // p1.then(ret => {
    //     console.log('222');
    //     throw new Error('33333');
    // }, error => {
    //     throw new Error('7777');
    // }).then(ret => {
    //     console.log(444);
    //     throw new Error('5555');
    // }, error => {
    //     console.log(666);
    //     throw new Error('8888');
    // }).catch(error => {
    //     console.log(`hi : ${error}`);
    // });
    // // 666
    // // hi: Error:8888
}

// 此处会进入catch中打印错误消息, 如果没有catch，就会在promise外层抛出信息
{
    // let someAsyncThing = function() {
    //     return new Promise((resolve, reject) => {
    //         resolve(x + 2);
    //     });
    // }
    // someAsyncThing().then(() => {
    //     console.log('哈哈哈...');
    // }).catch((error) => {
    //     console.log(error);
    // });
    // ReferenceError: x is not defined
}

// 此处会在promise外层抛出信息
{
    // var promise = new Promise(function(resolve, reject) {
    //     resolve('ok');
    //     setTimeout(function() { throw new Error('test') }, 0)
    // });
    // promise.then(function(value) { console.log(value) });
}

// catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。catch只会捕获它前面的方法
{
    // var someAsyncThing = function() {
    //     return new Promise(function(resolve, reject) {
    //         // 下面一行会报错，因为x没有声明
    //         resolve(x + 2);
    //     });
    // };

    // someAsyncThing().catch(function(error) {
    //     console.log('oh no', error);
    // }).then(function() {
    //     console.log('carry on');
    // });
    // oh no [ReferenceError: x is not defined]
    // carry on
}

/**
* promise.all() 将用于多个Promise实例
*/
{
    var p = Promise.all(p1, p2, p3);
    // p的状态由p1、p2、p3决定，分成两种情况。
    // 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
    // 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

    // 生成一个Promise对象的数组
    var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
        return getJSON("/post/" + id + ".json");
    });

    Promise.all(promises).then(function (posts) {
      // ...
    }).catch(function(reason){
      // ...
    });
}

/**
* promise.race()  如果5秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
* 后面的状态会覆盖前面的状态，将会执行相应的结果
*/
{
    // const p = Promise.race([
    // fetch('/resource-that-may-take-a-while'),
    // new Promise(function (resolve, reject) {
    //     setTimeout(() => reject(new Error('request timeout')), 5000)});
    // ]);
    // p.then(response => console.log(response));
    // p.catch(error => console.log(error));
}

/***
* Promise.done() done方法的使用，可以像then方法那样用，提供Fulfilled和Rejected状态的回调函数，也可以不提供任何参数。
* 但不管怎样，done都会捕捉到任何可能出现的错误，并向全局抛出。
*/
{
    Promise.prototype.done = function (onFulfilled, onRejected) {
        this.then(onFulfilled, onRejected).catch(function (reason) {
            // 抛出一个全局错误
            setTimeout(() => { throw reason }, 0);
        });
    };
}

/***
* Promise.finally() finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，
* 它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
*/
{
    // 服务器使用Promise处理请求，然后使用finally方法关掉服务器。
    server.listen(0)
    .then(function () {
        // run test
    })
    .finally(server.stop);

    Promise.prototype.finally = function (callback) {
        let P = this.constructor;
        return this.then(
            value  => P.resolve(callback()).then(() => value),
            reason => P.resolve(callback()).then(() => { throw reason })
        );
    };
}