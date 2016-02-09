(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Identifier', 'esast/lib/ObjectExpression', './context', './renderBlockStatement', './renderExpression', './renderIdentifier', './renderLiteral', './renderPattern', './renderUtil', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Identifier_1 = require('esast/lib/Identifier');
    var ObjectExpression_1 = require('esast/lib/ObjectExpression');
    var context_1 = require('./context');
    var renderBlockStatement_1 = require('./renderBlockStatement');
    var renderExpression_1 = require('./renderExpression');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderLiteral_1 = require('./renderLiteral');
    var renderPattern_1 = require('./renderPattern');
    var renderUtil_1 = require('./renderUtil');
    var util_1 = require('./util');
    function renderObjectExpressionNoLoc(_) {
        const properties = _.properties;

        if (util_1.isEmpty(properties)) context_1.o('{}');else renderUtil_1.block(properties, ',', renderProperty);
    }
    exports.renderObjectExpressionNoLoc = renderObjectExpressionNoLoc;
    function renderProperty(_) {
        context_1.setAst(_);
        if (_ instanceof ObjectExpression_1.PropertyPlain) {
            outputPropertyName(_.name);
            context_1.o(':');
            renderExpression_1.default(_.value);
        } else if (_ instanceof ObjectExpression_1.PropertyMethod) {
            const value = _.value;

            if (value.async) context_1.o('async ');
            if (value.generator) context_1.o('*');
            outputPropertyFunction(_, value);
        } else if (_ instanceof ObjectExpression_1.PropertyGet) {
            context_1.o('get ');
            outputPropertyFunction(_, _.value);
        } else if (_ instanceof ObjectExpression_1.PropertySet) {
            context_1.o('set ');
            outputPropertyFunction(_, _.value);
        } else throw util_1.badType(_);
    }
    function outputPropertyName(_) {
        if (_ instanceof ObjectExpression_1.ComputedName) {
            context_1.o('[');
            renderExpression_1.default(_.value);
            context_1.o(']');
        } else if (_ instanceof Identifier_1.default) renderIdentifier_1.default(_);else renderLiteral_1.default(_);
    }
    exports.outputPropertyName = outputPropertyName;
    function outputPropertyFunction(_ref, value) {
        let name = _ref.name;

        outputPropertyName(name);
        renderUtil_1.paren(value.params, renderPattern_1.default);
        renderBlockStatement_1.default(value.body);
    }
});
//# sourceMappingURL=renderObjectExpression.js.map
