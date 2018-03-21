/**
 * Created by jason on 2017/4/11.
 */
require.config({
    baseUrl: "js/mod",
    path: {
        "moduleA": "ModuleA.js",
        "moduleB": "ModuleB.js",
        "moduleC": "ModuleC.js"
    }
});

require(['moduleA', 'moduleB', 'moduleC'], function (modA, modB, modc) {
    // some code here
    console.log(modA.add([2, 2]));
})