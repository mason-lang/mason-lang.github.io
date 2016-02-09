(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Class', 'esast/lib/Declaration', 'esast/lib/Function', 'op/Op', './context', './renderClass', './renderExpression', './renderFunction', './renderIdentifier', './renderPattern', './renderUtil', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Class_1 = require('esast/lib/Class');
    var Declaration_1 = require('esast/lib/Declaration');
    var Function_1 = require('esast/lib/Function');
    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderClass_1 = require('./renderClass');
    var renderExpression_1 = require('./renderExpression');
    var renderFunction_1 = require('./renderFunction');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderPattern_1 = require('./renderPattern');
    var renderUtil_1 = require('./renderUtil');
    var util_1 = require('./util');
    function renderDeclaration(_) {
        context_1.setAst(_);
        renderDeclarationNoLoc(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderDeclaration;
    function renderDeclarationNoLoc(_) {
        if (_ instanceof Class_1.ClassDeclaration) renderClass_1.renderClassNoLoc(_);else if (_ instanceof Function_1.FunctionDeclaration) renderFunction_1.renderFunctionNoLoc(_);else if (_ instanceof Declaration_1.VariableDeclaration) renderVariableDeclarationNoLoc(_);else throw util_1.badType(_);
    }
    exports.renderDeclarationNoLoc = renderDeclarationNoLoc;
    function renderVariableDeclaration(_) {
        context_1.setAst(_);
        renderVariableDeclarationNoLoc(_);
    }
    exports.renderVariableDeclaration = renderVariableDeclaration;
    function renderVariableDeclarationNoLoc(_) {
        const declarations = _.declarations;

        if (_ instanceof Declaration_1.VariableDeclarationConst) context_1.o('const ');else if (_ instanceof Declaration_1.VariableDeclarationLet) context_1.o('let ');else if (_ instanceof Declaration_1.VariableDeclarationVar) context_1.o('var ');else throw util_1.badType(_);
        renderUtil_1.interleave(declarations, renderVariableDeclarator, ',');
    }
    exports.renderVariableDeclarationNoLoc = renderVariableDeclarationNoLoc;
    function renderVariableDeclarationOrIdentifier(_) {
        if (_ instanceof Declaration_1.VariableDeclaration) renderVariableDeclaration(_);else renderIdentifier_1.default(_);
    }
    exports.renderVariableDeclarationOrIdentifier = renderVariableDeclarationOrIdentifier;
    function renderVariableDeclarationOrExpression(_) {
        if (_ instanceof Declaration_1.VariableDeclaration) renderVariableDeclaration(_);else renderExpression_1.default(_);
    }
    exports.renderVariableDeclarationOrExpression = renderVariableDeclarationOrExpression;
    function renderVariableDeclarator(_) {
        context_1.setAst(_);
        const id = _.id;
        const init = _.init;

        renderPattern_1.default(id);
        if (Op_1.nonNull(init)) {
            context_1.o('=');
            renderExpression_1.default(init);
        }
    }
    exports.renderVariableDeclarator = renderVariableDeclarator;
});
//# sourceMappingURL=renderDeclaration.js.map
