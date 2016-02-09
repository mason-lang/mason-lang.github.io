(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './context', './renderExpression'], factory);
    }
})(function (require, exports) {
    "use strict";

    var context_1 = require('./context');
    var renderExpression_1 = require('./renderExpression');
    function renderTemplateLiteral(_) {
        context_1.setAst(_);
        renderTemplateLiteralNoLoc(_);
    }
    function renderTemplateLiteralNoLoc(_ref) {
        let quasis = _ref.quasis;
        let expressions = _ref.expressions;

        context_1.o('`');
        renderTemplateElement(quasis[0]);
        for (let i = 0; i < expressions.length; i = i + 1) {
            context_1.o('${');
            renderExpression_1.default(expressions[i]);
            context_1.o('}');
            renderTemplateElement(quasis[i + 1]);
        }
        context_1.o('`');
    }
    exports.renderTemplateLiteralNoLoc = renderTemplateLiteralNoLoc;
    function renderTemplateElement(_) {
        context_1.setAst(_);
        context_1.oWithNewlines(_.value.raw);
    }
    function renderTaggedTemplateExpressionNoLoc(_ref2) {
        let tag = _ref2.tag;
        let quasi = _ref2.quasi;

        renderExpression_1.default(tag);
        renderTemplateLiteral(quasi);
    }
    exports.renderTaggedTemplateExpressionNoLoc = renderTaggedTemplateExpressionNoLoc;
});
//# sourceMappingURL=renderTemplateLiteral.js.map
