class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    // console.log(event.target.value);
    // console.log(event.target);
    // console.log(event);
    this.setState({
      value: event.target.value
    })
  }

  handleResetClick() {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <input value={this.state.value} placeholder="Type text..." onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleResetClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
