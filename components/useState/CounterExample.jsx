import { useState } from "react";

class CounterOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return <p>{this.state.count}</p>;
  }
}

const CounterNew = () => {
    const [count, setCount] = useState(0)

    return <p>{count}</p>
}
