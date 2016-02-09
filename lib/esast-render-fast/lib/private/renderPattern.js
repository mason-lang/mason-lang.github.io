(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Identifier', 'esast/lib/Pattern', './context', './renderArray', './renderIdentifier', './renderUtil'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Identifier_1 = require('esast/lib/Identifier');
    var Pattern_1 = require('esast/lib/Pattern');
    var context_1 = require('./context');
    var renderArray_1 = require('./renderArray');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderUtil_1 = require('./renderUtil');
    function renderPattern(_) {
        context_1.setAst(_);
        if (_ instanceof Identifier_1.default) renderIdentifier_1.renderIdentifierNoLoc(_);else if (_ instanceof Pattern_1.ObjectPattern) {
            context_1.o('{');
            renderUtil_1.interleave(_.properties, renderAssignmentProperty, ',');
            context_1.o('}');
        } else if (_ instanceof Pattern_1.ArrayPattern) renderArray_1.renderArrayPatternNoLoc(_);else if (_ instanceof Pattern_1.RestElement) {
            context_1.o('...');
            renderPattern(_.argument);
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderPattern;
    function renderAssignmentProperty(_) {
        context_1.setAst(_);
        const key = _.key;
        const value = _.value;
        const shorthand = _.shorthand;

        renderIdentifier_1.default(key);
        if (!shorthand) {
            context_1.o(':');
            renderPattern(value);
        }
    }
    exports.renderAssignmentProperty = renderAssignmentProperty;
});
//# sourceMappingURL=renderPattern.js.map
