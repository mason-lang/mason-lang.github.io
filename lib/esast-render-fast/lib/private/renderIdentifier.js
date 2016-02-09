(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './context'], factory);
    }
})(function (require, exports) {
    "use strict";

    var context_1 = require('./context');
    function renderIdentifier(_) {
        context_1.setAst(_);
        renderIdentifierNoLoc(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderIdentifier;
    function renderIdentifierNoLoc(_) {
        context_1.o(_.name);
    }
    exports.renderIdentifierNoLoc = renderIdentifierNoLoc;
});
//# sourceMappingURL=renderIdentifier.js.map
