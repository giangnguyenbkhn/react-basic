import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //hàm push dùng để chuyển trang, phải dùng cùng với withRouter
    //   this.props.history.push("/todos");
    // }, 3000);
    console.log(this.props);
  }
  render() {
    console.log("check props", this.props);
    return <div> Hello World from Homepage with giangnguyen </div>;
  }
}
//HOC: higher order component
// khi bọc 1 HOC vào component của chúng ta, withRouter là 1 HOC, thì component
//của chúng ta có đầy đủ thuộc tính của HOC đó(dạng props) + cái có cơ bản của component ban đầu, có thể check bằng this.props
// export default withRouter(Home);
export default Color(Home);
