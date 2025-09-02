import { Component } from "react";
import Timer from "./components/Timer";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Timer />
    )
  }
};

export default App;