/**
 * js 模块化编程
 */
{
    let module1 = (function () {
        let _count = 0;
        let m1 = function () {
            // ...
        };
        let m2 = function () {
            // ...
        };
        console.log('11111');
        return {
            m1: m1,
            m2: m2
        };
    })();
    console.log(module1);
}

{
    var module1 = (function (mod) {
        mod.m3 = function () {

        }
        return mod;
    })(module1);
    console.log(module1.m3);
}