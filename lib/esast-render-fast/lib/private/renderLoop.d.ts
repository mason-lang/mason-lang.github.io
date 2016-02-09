import Loop, { BreakStatement, ContinueStatement, LabeledStatement } from 'esast/lib/Loop';
export declare function renderLoopNoLoc(_: Loop): void;
export declare function renderBreakStatementNoLoc({label}: BreakStatement): void;
export declare function renderContinueStatementNoLoc({label}: ContinueStatement): void;
export declare function renderLabeledStatementNoLoc({label, body}: LabeledStatement): void;
