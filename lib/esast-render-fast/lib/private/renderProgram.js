(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Expression', 'esast/lib/Program', 'esast/lib/Statement', './context', 'op/Op', './renderDeclaration', './renderExpression', './renderIdentifier', './renderLiteral', './renderStatement', './renderUtil', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Expression_1 = require('esast/lib/Expression');
    var Program_1 = require('esast/lib/Program');
    var Statement_1 = require('esast/lib/Statement');
    var context_1 = require('./context');
    var Op_1 = require('op/Op');
    var renderDeclaration_1 = require('./renderDeclaration');
    var renderExpression_1 = require('./renderExpression');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderLiteral_1 = require('./renderLiteral');
    var renderStatement_1 = require('./renderStatement');
    var renderUtil_1 = require('./renderUtil');
    var util_1 = require('./util');
    function renderProgram(_) {
        context_1.setAst(_);
        if (_ instanceof Program_1.Script) renderUtil_1.lines(_.body, ';', renderStatement_1.default);else if (_ instanceof Program_1.Module) renderUtil_1.lines(_.body, ';', renderStatementOrModuleDeclaration);else throw util_1.badType(_);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = renderProgram;
    function renderModuleDeclaration(_) {
        context_1.setAst(_);
        if (_ instanceof Program_1.ImportDeclaration) renderImportDeclarationNoLoc(_);else if (_ instanceof Program_1.ExportNamedDeclaration) {
            const declaration = _.declaration;
            const specifiers = _.specifiers;
            const source = _.source;

            context_1.o('export ');
            if (Op_1.nonNull(declaration)) renderDeclaration_1.default(declaration);else {
                context_1.o('{');
                renderUtil_1.interleave(specifiers, renderExportSpecifier, ',');
                context_1.o('}');
                if (Op_1.nonNull(source)) {
                    context_1.o(' from ');
                    renderLiteral_1.renderLiteralString(source);
                }
            }
        } else if (_ instanceof Program_1.ExportDefaultDeclaration) {
            context_1.o('export default ');
            renderDeclarationOrExpression(_.declaration);
        } else if (_ instanceof Program_1.ExportAllDeclaration) {
            context_1.o('export * from ');
            renderLiteral_1.renderLiteralString(_.source);
        } else throw util_1.badType(_);
    }
    exports.renderModuleDeclaration = renderModuleDeclaration;
    function renderImportDeclarationNoLoc(_ref) {
        let specifiers = _ref.specifiers;
        let source = _ref.source;

        context_1.o('import ');
        let def, namespace;
        const importSpecifiers = [];
        for (const s of specifiers) if (s instanceof Program_1.ImportDefaultSpecifier) {
            if (def === undefined) def = s;else throw new Error('Multiple default imports');
        } else if (s instanceof Program_1.ImportNamespaceSpecifier) {
            if (namespace === undefined) namespace = s;else throw new Error('Multiple namespace imports');
        } else if (s instanceof Program_1.ImportSpecifier) importSpecifiers.push(s);else throw util_1.badType(s);
        let needComma = false;
        if (def !== undefined) {
            renderImportDefaultSpecifier(def);
            needComma = true;
        }
        if (namespace !== undefined) {
            if (needComma) context_1.o(',');
            renderImportNamespaceSpecifier(namespace);
            needComma = true;
        }
        if (!util_1.isEmpty(importSpecifiers)) {
            if (needComma) context_1.o(',');
            context_1.o('{');
            renderUtil_1.interleave(importSpecifiers, renderImportSpecifier, ',');
            context_1.o('}');
        }
        context_1.o(' from ');
        renderLiteral_1.renderLiteralString(source);
    }
    function renderExportSpecifier(_) {
        context_1.setAst(_);
        const exported = _.exported;
        const local = _.local;
        const shorthand = _.shorthand;

        renderIdentifier_1.default(local);
        if (!shorthand) {
            context_1.o(' as ');
            renderIdentifier_1.default(exported);
        }
    }
    exports.renderExportSpecifier = renderExportSpecifier;
    function renderImportSpecifierAbstract(_) {
        if (_ instanceof Program_1.ImportSpecifier) renderImportSpecifier(_);else if (_ instanceof Program_1.ImportDefaultSpecifier) renderImportDefaultSpecifier(_);else if (_ instanceof Program_1.ImportNamespaceSpecifier) renderImportNamespaceSpecifier(_);else throw util_1.badType(_);
    }
    exports.renderImportSpecifierAbstract = renderImportSpecifierAbstract;
    function renderImportSpecifier(_) {
        context_1.setAst(_);
        const imported = _.imported;
        const local = _.local;
        const shorthand = _.shorthand;

        renderIdentifier_1.default(imported);
        if (!shorthand) {
            context_1.o(' as ');
            renderIdentifier_1.default(local);
        }
    }
    function renderStatementOrModuleDeclaration(_) {
        if (_ instanceof Statement_1.default) renderStatement_1.default(_);else renderModuleDeclaration(_);
    }
    function renderImportDefaultSpecifier(_) {
        context_1.setAst(_);
        renderIdentifier_1.default(_.local);
    }
    function renderImportNamespaceSpecifier(_) {
        context_1.setAst(_);
        context_1.o('* as ');
        renderIdentifier_1.default(_.local);
    }
    function renderDeclarationOrExpression(_) {
        if (_ instanceof Expression_1.default) renderExpression_1.default(_);else renderDeclaration_1.default(_);
    }
});
//# sourceMappingURL=renderProgram.js.map
