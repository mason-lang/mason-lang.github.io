(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Class', 'esast/lib/Declaration', 'esast/lib/Expression', 'esast/lib/Pattern', 'esast/lib/Program', 'esast/lib/Statement', './renderClass', './renderDeclaration', './renderExpression', './renderPattern', './renderProgram', './renderStatement', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Class_1 = require('esast/lib/Class');
    var Declaration_1 = require('esast/lib/Declaration');
    var Expression_1 = require('esast/lib/Expression');
    var Pattern_1 = require('esast/lib/Pattern');
    var Program_1 = require('esast/lib/Program');
    var Statement_1 = require('esast/lib/Statement');
    var renderClass_1 = require('./renderClass');
    var renderDeclaration_1 = require('./renderDeclaration');
    var renderExpression_1 = require('./renderExpression');
    var renderPattern_1 = require('./renderPattern');
    var renderProgram_1 = require('./renderProgram');
    var renderStatement_1 = require('./renderStatement');
    var util_1 = require('./util');
    function renderAny(_) {
        if (_ instanceof Pattern_1.AssignmentProperty) renderPattern_1.renderAssignmentProperty(_);else if (_ instanceof Class_1.ClassBody) renderClass_1.renderClassBody(_);else if (_ instanceof Program_1.ImportSpecifierAbstract) renderProgram_1.renderImportSpecifierAbstract(_);else if (_ instanceof Program_1.ExportSpecifier) renderProgram_1.renderExportSpecifier(_);else if (_ instanceof Expression_1.default) renderExpression_1.default(_);else if (_ instanceof Class_1.MethodDefinition) renderClass_1.renderMethodDefinition(_);else if (_ instanceof Program_1.ModuleDeclaration) renderProgram_1.renderModuleDeclaration(_);else if (_ instanceof Program_1.default) renderProgram_1.default(_);else if (_ instanceof Expression_1.SpreadElement) renderExpression_1.renderSpreadElement(_);else if (_ instanceof Statement_1.default) renderStatement_1.default(_);else if (_ instanceof Class_1.Super) renderClass_1.renderSuper(_);else if (_ instanceof Statement_1.SwitchCase) renderStatement_1.renderSwitchCase(_);else if (_ instanceof Declaration_1.VariableDeclarator) renderDeclaration_1.renderVariableDeclarator(_);else if (Pattern_1.isPattern(_)) renderPattern_1.default(_);else throw util_1.badType(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderAny;
});
//# sourceMappingURL=renderAny.js.map
