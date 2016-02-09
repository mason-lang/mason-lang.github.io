(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Class', 'esast/lib/Expression', 'esast/lib/Function', 'esast/lib/Identifier', 'esast/lib/Literal', 'esast/lib/TemplateLiteral', 'esast/lib/ObjectExpression', 'esast/lib/Statement', 'op/Op', './context', './renderArray', './renderBlockStatement', './renderClass', './renderFunction', './renderIdentifier', './renderLiteral', './renderObjectExpression', './renderPattern', './renderTemplateLiteral', './renderUtil', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Class_1 = require('esast/lib/Class');
    var Expression_1 = require('esast/lib/Expression');
    var Function_1 = require('esast/lib/Function');
    var Identifier_1 = require('esast/lib/Identifier');
    var Literal_1 = require('esast/lib/Literal');
    var TemplateLiteral_1 = require('esast/lib/TemplateLiteral');
    var ObjectExpression_1 = require('esast/lib/ObjectExpression');
    var Statement_1 = require('esast/lib/Statement');
    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderArray_1 = require('./renderArray');
    var renderBlockStatement_1 = require('./renderBlockStatement');
    var renderClass_1 = require('./renderClass');
    var renderFunction_1 = require('./renderFunction');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderLiteral_1 = require('./renderLiteral');
    var renderObjectExpression_1 = require('./renderObjectExpression');
    var renderPattern_1 = require('./renderPattern');
    var renderTemplateLiteral_1 = require('./renderTemplateLiteral');
    var renderUtil_1 = require('./renderUtil');
    var util_1 = require('./util');
    function renderExpression(_) {
        context_1.setAst(_);
        if (_ instanceof Expression_1.ArrayExpression) renderArray_1.renderArrayExpressionNoLoc(_);else if (_ instanceof Function_1.ArrowFunctionExpression) {
            const params = _.params;
            const body = _.body;

            const param0 = params[0];
            if (params.length === 1 && param0 instanceof Identifier_1.default) renderIdentifier_1.default(param0);else renderUtil_1.paren(params, renderPattern_1.default);
            context_1.o('=>');
            renderBlockOrExpression(body);
        } else if (_ instanceof Expression_1.AssignmentExpression) {
            const left = _.left;
            const operator = _.operator;
            const right = _.right;

            renderPatternOrMemberExpression(left);
            context_1.o(operator);
            renderExpression(right);
        } else if (_ instanceof Expression_1.BinaryExpression) {
            const left = _.left;
            const operator = _.operator;
            const right = _.right;

            context_1.o('(');
            renderExpression(left);
            context_1.o(operator === 'instanceof' ? ' instanceof ' : operator);
            renderExpression(right);
            context_1.o(')');
        } else if (_ instanceof Expression_1.CallExpression) {
            const callee = _.callee;
            const args = _.arguments;

            if (callee instanceof Function_1.ArrowFunctionExpression) {
                context_1.o('(');
                renderExpression(callee);
                context_1.o(')');
            } else renderExpressionOrSuper(callee);
            renderUtil_1.paren(args, renderExpressionOrSpread);
        } else if (_ instanceof Class_1.ClassExpression) renderClass_1.renderClassNoLoc(_);else if (_ instanceof Expression_1.ConditionalExpression) {
            const test = _.test;
            const consequent = _.consequent;
            const alternate = _.alternate;

            context_1.o('(');
            renderExpression(test);
            context_1.o('?');
            renderExpression(consequent);
            context_1.o(':');
            renderExpression(alternate);
            context_1.o(')');
        } else if (_ instanceof Function_1.FunctionExpression) renderFunction_1.renderFunctionNoLoc(_);else if (_ instanceof Identifier_1.default) renderIdentifier_1.renderIdentifierNoLoc(_);else if (_ instanceof Literal_1.default) renderLiteral_1.renderLiteralNoLoc(_);else if (_ instanceof Expression_1.LogicalExpression) {
            const left = _.left;
            const operator = _.operator;
            const right = _.right;

            context_1.o('(');
            renderExpression(left);
            context_1.o(operator);
            renderExpression(right);
            context_1.o(')');
        } else if (_ instanceof Expression_1.MemberExpression) renderMemberExpressionNoLoc(_);else if (_ instanceof Expression_1.MetaProperty) {
            const meta = _.meta;
            const property = _.property;

            renderIdentifier_1.default(meta);
            context_1.o('.');
            renderIdentifier_1.default(property);
        } else if (_ instanceof Expression_1.NewExpression) {
            const callee = _.callee;
            const args = _.arguments;

            context_1.o('new (');
            renderExpression(callee);
            context_1.o(')');
            renderUtil_1.paren(args, renderExpressionOrSpread);
        } else if (_ instanceof ObjectExpression_1.default) renderObjectExpression_1.renderObjectExpressionNoLoc(_);else if (_ instanceof Expression_1.SequenceExpression) renderUtil_1.interleave(_.expressions, renderExpression, ',');else if (_ instanceof TemplateLiteral_1.TaggedTemplateExpression) renderTemplateLiteral_1.renderTaggedTemplateExpressionNoLoc(_);else if (_ instanceof TemplateLiteral_1.default) renderTemplateLiteral_1.renderTemplateLiteralNoLoc(_);else if (_ instanceof Expression_1.ThisExpression) context_1.o('this');else if (_ instanceof Expression_1.UnaryExpression) {
            const operator = _.operator;
            const argument = _.argument;

            context_1.o(operator);
            context_1.o(' ');
            renderExpression(argument);
        } else if (_ instanceof Expression_1.UpdateExpression) {
            const prefix = _.prefix;
            const operator = _.operator;
            const argument = _.argument;

            if (prefix) {
                context_1.o(operator);
                renderExpression(argument);
            } else {
                renderExpression(argument);
                context_1.o(operator);
            }
        } else if (_ instanceof Expression_1.YieldLike) renderYieldLikeNoLoc(_);else throw util_1.badType(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderExpression;
    function renderBlockOrExpression(_) {
        if (_ instanceof Statement_1.BlockStatement) renderBlockStatement_1.default(_);else renderExpression(_);
    }
    function renderPatternOrMemberExpression(_) {
        if (_ instanceof Expression_1.MemberExpression) renderMemberExpression(_);else renderPattern_1.default(_);
    }
    function renderExpressionOrSpread(_) {
        if (_ instanceof Expression_1.default) renderExpression(_);else renderSpreadElement(_);
    }
    exports.renderExpressionOrSpread = renderExpressionOrSpread;
    function renderSpreadElement(_) {
        context_1.setAst(_);
        context_1.o('...');
        renderExpression(_.argument);
    }
    exports.renderSpreadElement = renderSpreadElement;
    function renderExpressionOrSuper(_) {
        if (_ instanceof Expression_1.default) renderExpression(_);else renderClass_1.renderSuper(_);
    }
    function renderMemberExpression(_) {
        context_1.setAst(_);
        renderMemberExpressionNoLoc(_);
    }
    function renderMemberExpressionNoLoc(_) {
        if (_ instanceof Expression_1.MemberExpressionPlain) {
            const object = _.object;
            const property = _.property;

            renderExpressionOrSuper(object);
            if (object instanceof Literal_1.LiteralNumber && object.value === (object.value | 0)) context_1.o('..');else context_1.o('.');
            renderIdentifier_1.default(property);
        } else if (_ instanceof Expression_1.MemberExpressionComputed) {
            const object = _.object;
            const property = _.property;

            renderExpressionOrSuper(object);
            context_1.o('[');
            renderExpression(property);
            context_1.o(']');
        } else throw util_1.badType(_);
    }
    function renderYieldLikeNoLoc(_) {
        if (_ instanceof Expression_1.YieldExpression) {
            const argument = _.argument;

            if (Op_1.nonNull(argument)) {
                context_1.o('(yield ');
                renderExpression(argument);
                context_1.o(')');
            } else context_1.o('(yield)');
        } else if (_ instanceof Expression_1.YieldDelegateExpression) {
            context_1.o('(yield* ');
            renderExpression(_.argument);
            context_1.o(')');
        } else throw util_1.badType(_);
    }
});
//# sourceMappingURL=renderExpression.js.map
