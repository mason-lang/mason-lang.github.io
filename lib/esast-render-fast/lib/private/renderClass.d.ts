import { ClassBody, ClassDeclaration, ClassExpression, MethodDefinition, Super } from 'esast/lib/Class';
export declare function renderClassNoLoc(_: ClassDeclaration | ClassExpression): void;
export declare function renderClassBody(_: ClassBody): void;
export declare function renderMethodDefinition(_: MethodDefinition): void;
export declare function renderSuper(_: Super): void;
