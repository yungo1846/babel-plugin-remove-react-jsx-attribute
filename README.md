## babel-plugin-remove-react-jsx-attribute

### Installation

```
npm install --save-dev babel-plugin-remove-react-jsx-attribute

yarn add -D babel-plugin-remove-react-jsx-attribute
```

### Introduction

This is useful to remove jsx attribute which isn't not necessary to bundle your code. For Instance, You can easily remove 'data-testid' just for testing.

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

```
plugins: [
  ...
  ["babel-plugin-remove-react-jsx-attribute", { attributes: ["data-testid",  /^(data-)/]}]
]
```
