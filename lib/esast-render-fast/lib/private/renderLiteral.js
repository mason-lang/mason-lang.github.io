(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Literal', './context', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Literal_1 = require('esast/lib/Literal');
    var context_1 = require('./context');
    var util_1 = require('./util');
    function renderLiteral(_) {
        context_1.setAst(_);
        renderLiteralNoLoc(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderLiteral;
    function renderLiteralNoLoc(_) {
        if (_ instanceof Literal_1.LiteralBoolean || _ instanceof Literal_1.LiteralNumber || _ instanceof Literal_1.LiteralRegExp) context_1.o(_.value.toString());else if (_ instanceof Literal_1.LiteralNull) context_1.o('null');else if (_ instanceof Literal_1.LiteralString) renderLiteralStringNoLoc(_);else throw util_1.badType(_);
    }
    exports.renderLiteralNoLoc = renderLiteralNoLoc;
    function renderLiteralString(_) {
        context_1.setAst(_);
        renderLiteralStringNoLoc(_);
    }
    exports.renderLiteralString = renderLiteralString;
    function renderLiteralStringNoLoc(_ref) {
        let value = _ref.value;

        const escaped = value.replace(/[\\"\n\t\b\f\v\r\u2028\u2029]/g, ch => literalEscapes.get(ch));
        context_1.o(`"${ escaped }"`);
    }
    const literalEscapes = new Map([['\\', '\\\\'], ['"', '\\"'], ['\n', '\\n'], ['\t', '\\t'], ['\b', '\\b'], ['\f', '\\f'], ['\v', '\\v'], ['\r', '\\r'], ['\u2028', '\\u2028'], ['\u2029', '\\u2029']]);
});
//# sourceMappingURL=renderLiteral.js.map
