import Expression, { SpreadElement } from 'esast/lib/Expression';
export default function renderExpression(_: Expression): void;
export declare function renderExpressionOrSpread(_: Expression | SpreadElement): void;
export declare function renderSpreadElement(_: SpreadElement): void;
