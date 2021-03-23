/**
 * 把 TypeScript 的 AST 信息转成调用 gen 函数的参数值
 * 没有直接使用 babel 的 AST 数据结构，是为了方便用户独立构造
 * 在提供最终用户编程性的时候，Model 不是来自于 TypeScript 定义，而是由用户通过表单在运行时定义的
 */
export interface Model<T = any> {
    /**
     * @internal
     * 缓存使用
     */
    cacheHash: number;
    /**
     * 路径 + 类名
     */
    qualifiedName: string;
    /**
     * 类名
     */
    tableName: string;
    /**
     * 基类的名字，没有基类则为 undefined
     */
    archetype?: string;
    /**
     * class 上的 decorator。多个同名的 decorator 会合并为一个数组。
     */
    decorators: Record<string, any>;
    /**
     * 例如 p: string;
     */
    properties: ModelProperty[];
    /**
     * 例如 static p: string;
     */
    staticProperties: ModelProperty[];
    /**
     * 例如 m(): string {}
     */
    methods: ModelMethod[];
    /**
     * 例如 static m(): string {}
     */
    staticMethods: ModelMethod[];
}

/**
 * 类上定义的属性
 */
export interface ModelProperty {
    /**
     * 属性上标记的注解
     */
    decorators: Record<string, any>;
    /**
     * 属性名
     */
    name: string;
    /**
     * 属性的类型，如果没有标注类型则为 undefined
     */
    type?: string;
    /**
     * 是否标记了 readonly
     */
    readonly: boolean;
    /**
     * 例如 p = 'hello' 的 'hello' 部分
     */
    defaultValue?: string;
}

/**
 * 类上定义的方法
 */
export interface ModelMethod {
    /**
     * 方法上标记的注解
     */
    decorators: Record<string, any>;
    /**
     * 方法名
     */
    name: string;
    /**
     * 方法的参数列表
     */
    paramters: ModelMethodParameter[];
    /**
     * 方法的返回值类型，如果没有标注类型则为 undefined
     */
    returnType?: string;
}

/**
 * 方法的参数信息
 */
export interface ModelMethodParameter {
    /**
     * 参数名
     */
    name: string;
    /**
     * 参数的类型
     */
    type: string;
}

/**
 * gen 函数需要声明自己对哪些 Model 产生了依赖，比如
 * codegen((order: Model<Order>) => { return 'xxx'; })
 * 或者对所有的 Model 产生了依赖
 * codegen((...models: Model[]) => { return 'xxx'; })
 * @param gen 在编译期被执行，做代码生成，返回生成的代码
 */
export function codegen<T>(gen: (...models: Model[]) => T): T {
    throw new Error('code has not been generated yet');
}