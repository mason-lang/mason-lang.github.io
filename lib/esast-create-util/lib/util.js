(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Declaration', 'esast/lib/Expression', 'esast/lib/Identifier', 'esast/lib/Literal', 'esast/lib/Statement', './mangle-identifier'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Declaration_1 = require('esast/lib/Declaration');
    var Expression_1 = require('esast/lib/Expression');
    var Identifier_1 = require('esast/lib/Identifier');
    var Literal_1 = require('esast/lib/Literal');
    var Statement_1 = require('esast/lib/Statement');
    var mangle_identifier_1 = require('./mangle-identifier');
    function identifier(name) {
        return new Identifier_1.default(mangle_identifier_1.default(name));
    }
    exports.identifier = identifier;
    function loc(ast, loc) {
        ast.loc = loc;
        return ast;
    }
    exports.loc = loc;
    function member(object, propertyName) {
        return mangle_identifier_1.propertyNameOk(propertyName) ? new Expression_1.MemberExpressionPlain(object, new Identifier_1.default(propertyName)) : new Expression_1.MemberExpressionComputed(object, new Literal_1.LiteralString(propertyName));
    }
    exports.member = member;
    function propertyIdOrLiteral(propertyName) {
        return mangle_identifier_1.propertyNameOk(propertyName) ? new Identifier_1.default(propertyName) : new Literal_1.LiteralString(propertyName);
    }
    exports.propertyIdOrLiteral = propertyIdOrLiteral;
    function toLineContent(ast) {
        return ast instanceof Statement_1.default || ast instanceof Declaration_1.default ? ast : new Statement_1.ExpressionStatement(ast);
    }
    exports.toLineContent = toLineContent;
});
//# sourceMappingURL=util.js.map
