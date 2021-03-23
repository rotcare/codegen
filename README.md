# TypeScript 编译期代码生成

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
const someVar = "Hello"; // 有 generateForm 生成的代码
```

`codegen()` 类似 C/C++ 的宏，会在编译期被执行，并替换源代码。

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