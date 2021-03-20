# codegen

把占位符替换为编译期的类型信息，或者根据类型信息生成的代码。使用了 `@rotcare/codegen` 的 TypeScript 项目，需要使用 `@rotcare/project` 的工具链转义为 JavaScript，而不能使用 ts-eager 等普通的转译工具。否则 codegen 的占位符不会被替换。
