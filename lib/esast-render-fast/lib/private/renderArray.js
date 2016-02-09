(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'op/Op', './context', './renderExpression', './renderPattern', './renderUtil'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderExpression_1 = require('./renderExpression');
    var renderPattern_1 = require('./renderPattern');
    var renderUtil_1 = require('./renderUtil');
    function renderArrayExpressionNoLoc(_ref) {
        let elements = _ref.elements;

        renderParts(elements, renderExpression_1.renderExpressionOrSpread);
    }
    exports.renderArrayExpressionNoLoc = renderArrayExpressionNoLoc;
    function renderArrayPatternNoLoc(_ref2) {
        let elements = _ref2.elements;

        renderParts(elements, renderPattern_1.default);
    }
    exports.renderArrayPatternNoLoc = renderArrayPatternNoLoc;
    function renderParts(elements, render) {
        function maybeRender(_) {
            if (Op_1.nonNull(_)) render(_);
        }
        context_1.o('[');
        renderUtil_1.interleave(elements, maybeRender, ',');
        context_1.o(']');
    }
});
//# sourceMappingURL=renderArray.js.map
