## babel-plugin-remove-react-jsx-attribute

### Installation

```
npm install --save-dev babel-plugin-remove-react-jsx-attribute

yarn add -D babel-plugin-remove-react-jsx-attribute
```

### Introduction

This is useful to remove the JSX attribute which isn't necessary to transpile. For instance, You can easily remove 'data-testid' just for testing.

### Example

- input

```jsx
function Element() {
  return <div className="app" data-testid="custom-element" />;
}
```

- output

```jsx
function Element() {
  return <div className="app" />;
}
```

### Usage

Add plugin to `.babelrc` or `webpack.config.js babel options`
The format of attributes should be consist of string or regular expression.

```
plugins: [
  ...
  ["babel-plugin-remove-react-jsx-attribute", { attributes: ["data-testid",  /^(data-)/]}]
]
```
