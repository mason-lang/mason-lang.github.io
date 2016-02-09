import Op from 'op/Op';
export declare function interleave<A>(asts: Array<A>, render: (ast: A) => void, str: string): void;
export declare function paren<A>(asts: Array<A>, render: (ast: A) => void): void;
export declare function block<A>(blockLines: Array<A>, lineSeparator: Op<string>, render: (ast: A) => void): void;
export declare function lines<A>(lines: Array<A>, lineSeparator: Op<string>, render: (ast: A) => void): void;
