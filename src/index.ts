// 把 TypeScript 的 AST 信息转成调用 gen 函数的参数值
// 没有直接使用 babel 的 AST 数据结构，是为了方便用户独立构造
// 在提供最终用户编程性的时候，Model 不是来自于 TypeScript 定义，而是由用户通过表单在运行时定义的
export interface Model<T = any> {
    cacheHash: number;
    // 路径 + 类名，用 path.basename 取得类名部分
    qualifiedName: string;
    // 类名
    tableName: string;
    // 基类的名字
    archetype?: string;
    // class 上的 decorator
    decorators: Record<string, any>;
    // p: string;
    properties: ModelProperty[];
    // static p: string;
    staticProperties: ModelProperty[];
    // m(): string {}
    methods: ModelMethod[];
    // static m(): string {}
    staticMethods: ModelMethod[];
}

export interface ModelProperty {
    decorators: Record<string, any>;
    name: string;
    type?: string;
    readonly: boolean;
    defaultValue?: string;
}

export interface ModelMethod {
    decorators: Record<string, any>;
    name: string;
    paramters: ModelMethodParameter[];
    returnType?: string;
}

export interface ModelMethodParameter {
    name: string;
    type: string;
}

// gen 函数需要声明自己对哪些 Model 产生了依赖，比如
// codegen((order: Model<Order>) => { return 'xxx'; })
// 或者对所有的 Model 产生了依赖
// codegen((...models: Model[]) => { return 'xxx'; })
export function codegen<T>(gen: (...models: Model[]) => T): T {
    throw new Error('code has not been generated yet');
}