import Node from 'esast/lib/Node';
export default function render(ast: Node, options?: RenderOptions): string;
export declare function renderWithSourceMap(ast: Node, inFilePath: string, outFilePath: string, options?: RenderOptions): {
    code: string;
    sourceMap: string;
};
export interface RenderOptions {
    ugly?: boolean;
}
