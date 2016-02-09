(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './context', './renderStatement', './renderUtil'], factory);
    }
})(function (require, exports) {
    "use strict";

    var context_1 = require('./context');
    var renderStatement_1 = require('./renderStatement');
    var renderUtil_1 = require('./renderUtil');
    function renderBlockStatement(_) {
        context_1.setAst(_);
        renderBlockStatementNoLoc(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderBlockStatement;
    function renderBlockStatementNoLoc(_) {
        renderUtil_1.block(_.body, ';', renderStatement_1.default);
    }
    exports.renderBlockStatementNoLoc = renderBlockStatementNoLoc;
});
//# sourceMappingURL=renderBlockStatement.js.map
