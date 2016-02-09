(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'esast/lib/Loc', 'op/Op', 'source-map/dist/source-map.min', './util'], factory);
    }
})(function (require, exports) {
    "use strict";

    var Loc_1 = require('esast/lib/Loc');
    var Op_1 = require('op/Op');
    var source_map_min_1 = require('source-map/dist/source-map.min');
    var util_1 = require('./util');
    let strOut;
    let indentAmount;
    let indentStr;
    let usingSourceMaps;
    let curAst;
    let inFilePath;
    let sourceMap;
    let outLine;
    let outColumn;
    let lastMappedAst;
    let ugly;
    function setUp(options) {
        ugly = Boolean(options.ugly);
        indentAmount = 0;
        setIndent();
        strOut = '';
        usingSourceMaps = false;
    }
    exports.setUp = setUp;
    function setUpSourceMap(inPath, outPath) {
        usingSourceMaps = true;
        inFilePath = inPath;
        sourceMap = new source_map_min_1.SourceMapGenerator({ file: outPath });
        outLine = Loc_1.Pos.start.line;
        outColumn = Loc_1.Pos.start.column;
        lastMappedAst = null;
    }
    exports.setUpSourceMap = setUpSourceMap;
    function finish() {
        const _ = strOut;
        freeMemory();
        return _;
    }
    exports.finish = finish;
    function finishWithSourceMap() {
        const _ = { code: strOut, sourceMap: sourceMap.toJSON() };
        freeMemory();
        return _;
    }
    exports.finishWithSourceMap = finishWithSourceMap;
    function freeMemory() {
        strOut = inFilePath = sourceMap = curAst = lastMappedAst = null;
    }
    function setAst(_) {
        curAst = _;
    }
    exports.setAst = setAst;
    function o(str) {
        strOut = strOut + str;
        if (usingSourceMaps) mapStr(str);
    }
    exports.o = o;
    function oWithNewlines(str) {
        const parts = str.split('\n');
        o(parts[0]);
        for (let i = 1; i < parts.length; i = i + 1) {
            strOut = `${ strOut }\n`;
            mapNewLine();
            o(parts[i]);
        }
    }
    exports.oWithNewlines = oWithNewlines;
    const indentStrs = [''];
    function setIndent() {
        indentStr = indentStrs[indentAmount];
        while (indentStr === undefined) {
            indentStrs.push(`${ util_1.last(indentStrs) }\t`);
            indentStr = indentStrs[indentAmount];
        }
    }
    function indent() {
        if (!ugly) {
            indentAmount = indentAmount + 1;
            setIndent();
        }
    }
    exports.indent = indent;
    function unindent() {
        if (!ugly) {
            indentAmount = indentAmount - 1;
            setIndent();
        }
    }
    exports.unindent = unindent;
    function nl() {
        if (!ugly) {
            strOut = `${ strOut }\n${ indentStr }`;
            if (usingSourceMaps) mapNewLine();
            outColumn = outColumn + indentAmount;
        }
    }
    exports.nl = nl;
    function mapStr(str) {
        if (curAst !== lastMappedAst) {
            var _curAst = curAst;
            const loc = _curAst.loc;

            if (Op_1.nonNull(loc)) {
                sourceMap.addMapping({
                    source: inFilePath,
                    original: loc.start,
                    generated: new Loc_1.Pos(outLine, outColumn)
                });
                lastMappedAst = curAst;
            }
        }
        outColumn = outColumn + str.length;
    }
    function mapNewLine() {
        outLine = outLine + 1;
        outColumn = Loc_1.Pos.start.column;
        lastMappedAst = null;
    }
});
//# sourceMappingURL=context.js.map
