/**
 * Created by jason on 2017/4/11.
 */
define(function () {
    let aa = function (x) {
        console.log(11111);
        return ++x;
    }
    return {
        aa: aa
    }
});