(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";

    function badType(_) {
        return new Error(`Did not expect a ${ _.constructor.name } here.`);
    }
    exports.badType = badType;
    function isEmpty(arr) {
        return arr.length === 0;
    }
    exports.isEmpty = isEmpty;
    function last(arr) {
        return arr[arr.length - 1];
    }
    exports.last = last;
});
//# sourceMappingURL=util.js.map
