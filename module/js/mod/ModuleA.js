/**
 * Created by jason on 2017/4/11.
 */
define(['moduleB'], function (moduleB) {
    var add =  ([x, y]) => {
        x = moduleB.aa(x);
        return x + y;
    }

    return {
        add: add
    }
});