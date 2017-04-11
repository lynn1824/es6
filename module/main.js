/**
 * Created by jason on 2017/4/11.
 */
require.config({
    path: {
        "moduleA": "mod/ModuleA.js",
        "moduleB": "mod/ModuleB.js",
        "moduleC": "mod/ModuleC.js"
    }
});

require(['moduleA', 'moduleB', 'moduleC'], function (modA, modB, modc) {
    // some code here
})