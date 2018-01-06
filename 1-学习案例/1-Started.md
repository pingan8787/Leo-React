## 组件
`React` 组件使用一个名为 `render()` 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为`JSX`. 输入的数据通过 `this.props` 传入 `render()` 方法。  
使用 `React` 的时候也可以不使用 `JSX` 语法 你可以在 `Babel REPL` 查看 `JSX` 是如何被渲染成原生 `JavaScript` 代码的。  
```
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
); 
```