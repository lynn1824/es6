/**
 * @desc Proxy(代理),可以理解成,在目标对象上再做一层"拦截", 外界访问该对象时,都必须先通过这一层拦截,因此提供了一种设置与获取的过滤机制;
 *
{
    var aa = {a: 111, b: 222, c: 333};
    var obj = new Proxy(aa, {
        get: function (target, key, receiver) {
            console.log(target);
            console.log(`getting ${key}`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${value}`);
            return Reflect.set(target, key, value, receiver);
        }
    });
    // obj.count = 1; // setting 1
    // ++obj.count;   // getting count setting 2
    // obj.count++;
    // obj.count; // getting count

    // console.log(obj.a);
    // obj.b = 444;
    // console.log(obj.b);
    obj.a;
}*/
//
// {
//     var proxy = new Proxy({}, {
//         get: function (target, property) {
//             console.log(property);
//             return 35;
//         }
//     });
//     let obj = Object.create(proxy);
//     console.log(obj.age);
// }
/**
 *
 **/
// {
//     var handler = {
//         get: function (target, name) {
//             console.log('getting');
//             if(name === 'prototype') {
//                 return Object.prototype;
//             }
//             return 'Hello ' + name;
//         },
//         apply: function (target, thisBinding, args) {
//             console.log('apply');
//             return args[0];
//         },
//         construct: function (target, args) {
//             console.log('construct');
//             return {value: args[1]};
//         }
//     };
//
//     var fproxy = new Proxy(function (x, y) {
//        return x + y;
//     }, handler);
//
//     console.log(fproxy(1, 2)); // apply, 1
//     console.log(new fproxy(1, 2)); // constructor, {value: 2}
//     console.log(fproxy.foo); // getting hello foo
// }
// {
//     var person = {
//         name: '张三'
//     }
//
//     var proxy = new Proxy(person, {
//        get: function (target, property) {
//            if(property in target) {
//                 return target[property];
//            }else {
//                return new ReferenceError(`Property ${property} does not exist.`);
//            }
//        }
//     });
//
//     console.log(proxy.name); // 张三
//     console.log(proxy.age); // 报错
// }

// {
//     let proto = new Proxy({aa: 111}, {
//        get: function (target, property, receiver) {
//           console.log(target);
//           console.log('GET '+ property);
//            if(property in target) {
//                return target[property];
//            }
//        }
//     });
//
//     var obj = Object.create(proto);
//     // obj.name = 'lynn';
//     obj.aa = 10;
//     console.log(Reflect.has(obj, 'aa'));
// }

{
    function Person() {
        this.a = 'world!!';
    }

    Person.prototype.say = function () {
        console.log('hi' + ' ' + this.a);
    }

    var obj = {
        a: 'wworld!!ßå'
    };
    Object.setPrototypeOf(obj, Person.prototype);
    obj.say();

    // console.log(Object.getPrototypeOf(obj));
    // var obj = new Person();
    // obj.say();
}