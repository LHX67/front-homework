# 第二次作业：用户注册页面

## 作业内容

使用 HTML5 综合运用**列表、表格、表单**三大模块知识，制作一个完整的"用户注册"页面。

## 文件结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 主页面文件（页面结构 + 表单 + 表格 + 列表） |
| `style.css` | 页面样式（布局、配色、响应式） |
| `script.js` | 表单数据收集与验证脚本 |

## 使用到的标签

- **语义化结构**：`<header>`、`<main>`、`<aside>`、`<section>`、`<footer>`、`<h1>`、`<h2>`
- **列表**：`<ul>`（注册须知）、`<ol>`（注册步骤）、`<dl>`（常见问题）
- **表格**：`<table>`、`<thead>`、`<tbody>`、`<th>`、`<td>`，并使用 `colspan`、`rowspan` 合并单元格
- **表单**：`<form>`（action + method）、`<input>`（text / password / radio / checkbox / file / email / tel / date）、`<select>` + `<option>`（默认选中）、`<textarea>`、`<button>`（submit / reset）、`<label>`（for+id 与包裹式两种用法）、`<fieldset>` + `<legend>`

## 功能说明

- 用户名、邮箱、手机号为必填项（`required` 属性）
- 手机号通过 `pattern="[0-9]{11}"` 正则校验
- 密码与确认密码一致性校验（JavaScript 实时提示）
- 密码输入框支持"显示 / 隐藏"切换
- 提交时通过 `FormData` 收集全部数据，并在 **Console 面板**打印
- 城市下拉框默认选中"长沙"（`selected`）
- 头像支持多图选择（`multiple`）

## 遇到的困难及解决方法

- **问题**：两个相同 `name` 的 checkbox（兴趣爱好多选）在收集数据时互相覆盖。
  **解决**：遍历 `FormData` 时对同名键做判断，自动合并为数组。
- **问题**：表单提交会刷新页面，无法在 Console 查看数据。
  **解决**：监听 `submit` 事件并使用 `event.preventDefault()` 阻止默认提交。

## 运行方式

1. 用 VS Code + Live Server 打开 `index.html`，或直接双击在 Chrome 中打开。
2. 按 `F12` 打开 DevTools → **Console** 面板。
3. 填写表单并点击「注册」，即可在 Console 中查看收集到的数据。

> 说明：`form` 的 `action="register.php"` 为示例后端地址，接入真实后端时替换即可。
