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

## 有状态组件
除了使用外部传入的数据以外 (通过 `this.props` 访问传入数据), 组件还可以拥有其内部的状态数据 (通过 `this.state` 访问状态数据)。 当组件的状态数据改变时， 组件会调用 `render()` 方法重新渲染。  
```
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

```

## 应用
使用 `props` 和 `state`, 我们可以创建一个简易的 `Todo` 应用。 下面这个示例中，我们使用 `state` 来保存现有的待办事项列表及用户的输入。 与此同时，我们也使用了内联的方法添加了事件处理函数，它们将通过事件代理被收集和调用。
```
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, mountNode);
```

## 在组件中使用第三方库
`React` 的使用非常灵活，并且提供了可以调用其他第三方框架或库的接口。下面这个示例就使用了一个用来渲染 `markdown `语法，名为 `remarkable` 的库。它可以实时转换渲染 `<textarea>` 里的内容。  
```
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, mountNode);
```