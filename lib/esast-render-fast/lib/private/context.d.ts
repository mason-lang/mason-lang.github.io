import Node from 'esast/lib/Node';
import { RenderOptions } from '../render';
export declare function setUp(options: RenderOptions): void;
export declare function setUpSourceMap(inPath: string, outPath: string): void;
export declare function finish(): string;
export declare function finishWithSourceMap(): {
    code: string;
    sourceMap: string;
};
export declare function setAst(_: Node): void;
export declare function o(str: string): void;
export declare function oWithNewlines(str: string): void;
export declare function indent(): void;
export declare function unindent(): void;
export declare function nl(): void;
