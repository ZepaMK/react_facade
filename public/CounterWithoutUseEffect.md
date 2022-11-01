```
export default class UseEffectClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      calculation: 0,
    };
  }

  componentDidMount() {
    this.setState({ calculation: this.state.count * 2 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState({ calculation: this.state.count * 2 });
    }
  }

  render() {
    return (
        <div>
          <p className="border border-black p-4">
            count = {this.state.count}
          </p>
          <p className="border border-black mt-2 p-4">
            {this.state.count} x 2 = {this.state.calculation}
          </p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="border border-black p-2 mt-4"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
```
