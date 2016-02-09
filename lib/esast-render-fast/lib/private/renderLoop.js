(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Loop', 'esast/lib/Statement', 'op/Op', './context', './renderDeclaration', './renderExpression', './renderIdentifier', './renderStatement', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Loop_1 = require('esast/lib/Loop');
    var Statement_1 = require('esast/lib/Statement');
    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderDeclaration_1 = require('./renderDeclaration');
    var renderExpression_1 = require('./renderExpression');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderStatement_1 = require('./renderStatement');
    var util_1 = require('./util');
    function renderLoopNoLoc(_) {
        if (_ instanceof Loop_1.WhileStatement) {
            const test = _.test;
            const body = _.body;

            context_1.o('while(');
            renderExpression_1.default(test);
            context_1.o(')');
            renderStatement_1.default(body);
        } else if (_ instanceof Loop_1.DoWhileStatement) {
            const body = _.body;
            const test = _.test;

            context_1.o('do ');
            renderStatement_1.default(body);
            if (!(body instanceof Statement_1.BlockStatement)) context_1.o(';');
            context_1.o(' while(');
            renderExpression_1.default(test);
            context_1.o(')');
        } else if (_ instanceof Loop_1.ForStatement) {
            const init = _.init;
            const test = _.test;
            const update = _.update;
            const body = _.body;

            context_1.o('for(');
            if (Op_1.nonNull(init)) renderDeclaration_1.renderVariableDeclarationOrExpression(init);
            context_1.o(';');
            if (Op_1.nonNull(test)) renderExpression_1.default(test);
            context_1.o(';');
            if (Op_1.nonNull(update)) renderExpression_1.default(update);
            context_1.o(')');
            renderStatement_1.default(body);
        } else if (_ instanceof Loop_1.ForInOfStatement) {
            context_1.o('for(');
            renderDeclaration_1.renderVariableDeclarationOrIdentifier(_.left);
            context_1.o(_ instanceof Loop_1.ForOfStatement ? ' of ' : ' in ');
            renderExpression_1.default(_.right);
            context_1.o(')');
            renderStatement_1.default(_.body);
        } else throw util_1.badType(_);
    }
    exports.renderLoopNoLoc = renderLoopNoLoc;
    function renderBreakStatementNoLoc(_ref) {
        let label = _ref.label;

        context_1.o('break');
        if (Op_1.nonNull(label)) {
            context_1.o(' ');
            renderIdentifier_1.default(label);
        }
    }
    exports.renderBreakStatementNoLoc = renderBreakStatementNoLoc;
    function renderContinueStatementNoLoc(_ref2) {
        let label = _ref2.label;

        context_1.o('continue');
        if (Op_1.nonNull(label)) {
            context_1.o(' ');
            renderIdentifier_1.default(label);
        }
    }
    exports.renderContinueStatementNoLoc = renderContinueStatementNoLoc;
    function renderLabeledStatementNoLoc(_ref3) {
        let label = _ref3.label;
        let body = _ref3.body;

        renderIdentifier_1.default(label);
        context_1.o(':');
        renderStatement_1.default(body);
    }
    exports.renderLabeledStatementNoLoc = renderLabeledStatementNoLoc;
});
//# sourceMappingURL=renderLoop.js.map
