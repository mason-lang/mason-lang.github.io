(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'op/Op', './context', './renderBlockStatement', './renderIdentifier', './renderPattern', './renderUtil'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Op_1 = require('op/Op');
    var context_1 = require('./context');
    var renderBlockStatement_1 = require('./renderBlockStatement');
    var renderIdentifier_1 = require('./renderIdentifier');
    var renderPattern_1 = require('./renderPattern');
    var renderUtil_1 = require('./renderUtil');
    function renderFunctionNoLoc(_) {
        const id = _.id;
        const params = _.params;
        const body = _.body;
        const async = _.async;
        const generator = _.generator;

        if (async) context_1.o('async ');
        context_1.o('function');
        if (generator) context_1.o('*');
        if (Op_1.nonNull(id)) {
            context_1.o(' ');
            renderIdentifier_1.default(id);
        }
        renderUtil_1.paren(params, renderPattern_1.default);
        renderBlockStatement_1.default(body);
    }
    exports.renderFunctionNoLoc = renderFunctionNoLoc;
});
//# sourceMappingURL=renderFunction.js.map
