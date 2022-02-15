import React from "react";
import Classcomponent from "./Classcomponent";
import FunctComp from "./FunctComp"
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isFunctional: true,
      isClass: true,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Styling Using Functional and Class Component</h1>
        <button onClick={()=>this.setState({ isFunctional:!this.state.isFunctional })}> To see styling in Functional Component </button>
        <button onClick={()=>this.setState({ isClass: !this.state.isClass })}> To see styling in Class Component </button>
        {this.state.isFunctional ? <FunctComp /> : null}
        {this.state.isClass ? <Classcomponent /> : null}
      </div>
    );
  }
}
export default Home;