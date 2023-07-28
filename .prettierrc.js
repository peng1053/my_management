module.exports = {
  // 单行最大长度
  printWidth: 100,
  // 设置编辑器每一个水平缩进的空格数
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 在句尾添加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 末尾不需要有逗号 none es5 all
  trailingComma: "es5",
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
  bracketSpacing: false,
  // 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，不需要括号 always avoid
  arrowParens: "always",

  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf. 与 `.editorconfig` 保持一致设置
  endOfLine: "lf",
};
