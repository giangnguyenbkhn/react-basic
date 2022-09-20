import React from "react";

class MyComponent extends React.Component {
  /*
    JSX luôn return 1 block (1 div lớn, 1 h3 lớn , fragment...);
    luôn dùng arrow function
  */
  //key:value
  state = {
    name: "",
    age: 22,
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
      age: 23,
    });
  };

  handleClickButton = () => {
    alert("click me!");
  };
  render() {
    console.log(">>> call render", this.state);
    return (
      <>
        <div className="hello">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          Hello my component, my name is {this.state.name}
        </div>
        <div>Tuoi cua minh la {this.state.age}</div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me!</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
