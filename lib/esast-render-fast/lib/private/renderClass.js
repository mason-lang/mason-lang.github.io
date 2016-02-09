(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Class', 'op/Op', './context', './renderBlockStatement', './renderExpression', './renderIdentifier', './renderObjectExpression', './renderPattern', './renderUtil', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Class_1 = require('esast/lib/Class');
    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderBlockStatement_1 = require('./renderBlockStatement');
    var renderExpression_1 = require('./renderExpression');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderObjectExpression_1 = require('./renderObjectExpression');
    var renderPattern_1 = require('./renderPattern');
    var renderUtil_1 = require('./renderUtil');
    var util_1 = require('./util');
    function renderClassNoLoc(_) {
        const id = _.id;
        const superClass = _.superClass;
        const body = _.body;

        context_1.o('class ');
        if (Op_1.nonNull(id)) renderIdentifier_1.default(id);
        if (Op_1.nonNull(superClass)) {
            context_1.o(' extends ');
            renderExpression_1.default(superClass);
        }
        renderClassBody(body);
    }
    exports.renderClassNoLoc = renderClassNoLoc;
    function renderClassBody(_) {
        context_1.setAst(_);
        renderUtil_1.block(_.body, null, renderMethodDefinition);
    }
    exports.renderClassBody = renderClassBody;
    function renderMethodDefinition(_) {
        context_1.setAst(_);
        if (_ instanceof Class_1.MethodDefinitionConstructor) {
            const value = _.value;

            context_1.o('constructor');
            renderUtil_1.paren(value.params, renderPattern_1.default);
            renderBlockStatement_1.default(value.body);
        } else if (_ instanceof Class_1.MethodDefinitionNonConstructor) {
            const name = _.name;
            const value = _.value;
            const isStatic = _.static;

            if (isStatic) context_1.o('static ');
            if (value.async) context_1.o('async ');
            if (value.generator) context_1.o('*');
            if (_ instanceof Class_1.MethodDefinitionGet) context_1.o('get ');else if (_ instanceof Class_1.MethodDefinitionSet) context_1.o('set ');
            renderObjectExpression_1.outputPropertyName(name);
            renderUtil_1.paren(value.params, renderPattern_1.default);
            renderBlockStatement_1.default(value.body);
        } else throw util_1.badType(_);
    }
    exports.renderMethodDefinition = renderMethodDefinition;
    function renderSuper(_) {
        context_1.setAst(_);
        context_1.o('super');
    }
    exports.renderSuper = renderSuper;
});
//# sourceMappingURL=renderClass.js.map
