(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Loop', 'esast/lib/Statement', 'op/Op', './context', './renderBlockStatement', './renderDeclaration', './renderExpression', './renderPattern', './renderLoop', './renderUtil'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Loop_1 = require('esast/lib/Loop');
    var Statement_1 = require('esast/lib/Statement');
    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderBlockStatement_1 = require('./renderBlockStatement');
    var renderDeclaration_1 = require('./renderDeclaration');
    var renderExpression_1 = require('./renderExpression');
    var renderPattern_1 = require('./renderPattern');
    var renderLoop_1 = require('./renderLoop');
    var renderUtil_1 = require('./renderUtil');
    function renderStatement(_) {
        context_1.setAst(_);
        if (_ instanceof Statement_1.BlockStatement) renderBlockStatement_1.renderBlockStatementNoLoc(_);else if (_ instanceof Loop_1.BreakStatement) renderLoop_1.renderBreakStatementNoLoc(_);else if (_ instanceof Loop_1.ContinueStatement) renderLoop_1.renderContinueStatementNoLoc(_);else if (_ instanceof Statement_1.DebuggerStatement) context_1.o('debugger');else if (_ instanceof Statement_1.EmptyStatement) {} else if (_ instanceof Statement_1.ExpressionStatement) renderExpression_1.default(_.expression);else if (_ instanceof Statement_1.IfStatement) {
            const test = _.test;
            const consequent = _.consequent;
            const alternate = _.alternate;

            context_1.o('if(');
            renderExpression_1.default(test);
            context_1.o(')');
            renderStatement(consequent);
            if (Op_1.nonNull(alternate)) {
                if (!(consequent instanceof Statement_1.BlockStatement)) context_1.o(';');
                context_1.o(' else ');
                renderStatement(alternate);
            }
        } else if (_ instanceof Loop_1.LabeledStatement) renderLoop_1.renderLabeledStatementNoLoc(_);else if (_ instanceof Loop_1.default) renderLoop_1.renderLoopNoLoc(_);else if (_ instanceof Statement_1.ReturnStatement) {
            const argument = _.argument;

            if (Op_1.nonNull(argument)) {
                context_1.o('return ');
                renderExpression_1.default(argument);
            } else context_1.o('return');
        } else if (_ instanceof Statement_1.SwitchStatement) {
            const discriminant = _.discriminant;
            const cases = _.cases;

            context_1.o('switch(');
            renderExpression_1.default(discriminant);
            context_1.o(')');
            renderUtil_1.block(cases, null, renderSwitchCase);
        } else if (_ instanceof Statement_1.ThrowStatement) {
            context_1.o('throw ');
            renderExpression_1.default(_.argument);
        } else if (_ instanceof Statement_1.TryStatement) {
            const block = _.block;
            const handler = _.handler;
            const finalizer = _.finalizer;

            context_1.o('try ');
            renderBlockStatement_1.default(block);
            if (Op_1.nonNull(handler)) renderCatchClause(handler);
            if (Op_1.nonNull(finalizer)) {
                context_1.o('finally');
                renderBlockStatement_1.default(finalizer);
            }
        } else renderDeclaration_1.renderDeclarationNoLoc(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderStatement;
    function renderSwitchCase(_) {
        context_1.setAst(_);
        const test = _.test;
        const consequent = _.consequent;

        if (Op_1.nonNull(test)) {
            context_1.o('case ');
            renderExpression_1.default(test);
        } else context_1.o('default');
        context_1.o(':');
        switch (consequent.length) {
            case 0:
                break;
            case 1:
                renderStatement(consequent[0]);
                break;
            default:
                context_1.indent();
                context_1.nl();
                renderUtil_1.lines(consequent, ';', renderStatement);
                context_1.unindent();
        }
    }
    exports.renderSwitchCase = renderSwitchCase;
    function renderCatchClause(_) {
        context_1.setAst(_);
        const param = _.param;
        const body = _.body;

        context_1.o('catch(');
        renderPattern_1.default(param);
        context_1.o(')');
        renderBlockStatement_1.default(body);
    }
    exports.renderCatchClause = renderCatchClause;
});
//# sourceMappingURL=renderStatement.js.map
