# TypeScript 编译期代码生成

`codegen()` 类似 C/C++ 的宏，会在编译期被执行，并替换源代码。

```ts
import { codegen, Model } from '@rotcare/codegen';
import { Product } from './Product';
import { generateForm } from 'some-generator';

const someVar = codegen((product: Model<Product>) => {
    return generateForm(product);
})
```

在编译的时候，codegen 中的回调会被执行。假设 generateForm 返回了 "Hello" 字符串。那么这里就变成了

```ts
const someVar = "Hello"; // 由 generateForm 生成的代码
```

codegen 可以依赖多个 Model，也可以扫描项目中的所有 Model

```ts
const someVar = codegen((product: Model<Product>, order: Model<Order>) => {
    ...
})

const someVar = codegen((...allModels: Model[]) => {
    ...
})
```

这里引用的 Model 对象，由编译期解析 Class 的定义得出，比如

```ts
// in Some/Path/Order.ts
export class Order {
    public id: string;
    public totoal: number;
}
```

那么在 `order: Model<Order>` 里就可以拿到 `id` 和 `total` 这两个 properties。也就是编译期的类定义反射。

编译需要选择对应的编译工具链

* [@rotcare/project](https://github.com/rotcare/project)
* [@rotcare/project-esbuild](https://github.com/rotcare/project-esbuild)
* [@rotcare/register](https://github.com/rotcare/register)

# API

```
yarn add @rotcare/codegen
```

* [codegen](./src/index.ts)
* [Model](./src/index.ts)