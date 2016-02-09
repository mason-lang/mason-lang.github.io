(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'op/Op', './context', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var util_1 = require('./util');
    function interleave(asts, render, str) {
        if (!util_1.isEmpty(asts)) {
            const maxI = asts.length - 1;
            for (let i = 0; i < maxI; i = i + 1) {
                render(asts[i]);
                context_1.o(str);
            }
            render(asts[maxI]);
        }
    }
    exports.interleave = interleave;
    function paren(asts, render) {
        context_1.o('(');
        interleave(asts, render, ',');
        context_1.o(')');
    }
    exports.paren = paren;
    function block(blockLines, lineSeparator, render) {
        if (util_1.isEmpty(blockLines)) context_1.o('{}');else {
            context_1.o('{');
            context_1.indent();
            context_1.nl();
            lines(blockLines, lineSeparator, render);
            context_1.unindent();
            context_1.nl();
            context_1.o('}');
        }
    }
    exports.block = block;
    function lines(lines, lineSeparator, render) {
        if (lines.length > 0) {
            const maxI = lines.length - 1;
            for (let i = 0; i < maxI; i = i + 1) {
                render(lines[i]);
                if (Op_1.nonNull(lineSeparator)) context_1.o(lineSeparator);
                context_1.nl();
            }
            render(lines[maxI]);
        }
    }
    exports.lines = lines;
});
//# sourceMappingURL=renderUtil.js.map
