(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './private/context', './private/renderAny'], factory);
    }
})(function (require, exports) {
    "use strict";

    var context_1 = require('./private/context');
    var renderAny_1 = require('./private/renderAny');
    function render(ast) {
        let options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        context_1.setUp(options);
        renderAny_1.default(ast);
        return context_1.finish();
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = render;
    function renderWithSourceMap(ast, inFilePath, outFilePath) {
        let options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

        context_1.setUp(options);
        context_1.setUpSourceMap(inFilePath, outFilePath);
        renderAny_1.default(ast);
        return context_1.finishWithSourceMap();
    }
    exports.renderWithSourceMap = renderWithSourceMap;
});
//# sourceMappingURL=render.js.map
