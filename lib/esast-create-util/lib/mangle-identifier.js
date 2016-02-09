(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";

    function mangleIdentifier(name) {
        return exports.forbiddenNames.has(name) ? `_${ name }` : name.replace(/[^a-zA-Z0-9$_]/g, _ => `_${ _.charCodeAt(0) }`);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = mangleIdentifier;
    function needsMangle(name) {
        return exports.forbiddenNames.has(name) || !propertyNameOk(name);
    }
    exports.needsMangle = needsMangle;
    function propertyNameOk(name) {
        return name.search(/[^a-zA-Z0-9$_]/) === -1;
    }
    exports.propertyNameOk = propertyNameOk;
    function unmangle(name) {
        if (name[0] === '_') {
            const rest = name.slice(1);
            if (exports.forbiddenNames.has(rest)) return rest;
        }
        return name.replace(/_\d+/g, match => {
            const charCodeString = match.slice(1);
            const charCode = Number.parseInt(charCodeString, 10);
            const char = String.fromCharCode(charCode);
            return char === '\0' ? match : char;
        });
    }
    exports.unmangle = unmangle;
    exports.forbiddenNames = new Set(['abstract', 'arguments', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'function*', 'goto', 'if', 'implements', 'import', 'in', 'instanceOf', 'int', 'interface', 'label', 'long', 'module', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield']);
});
//# sourceMappingURL=mangle-identifier.js.map
