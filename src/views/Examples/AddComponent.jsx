import React from "react";
class AddComponent extends React.Component {
  state = { title: "", salary: "" };
  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    //de trong 1 trong 2 thong tin se yeu cau nhap lai, validate du lieu
    if (!this.state.title || !this.state.salary) {
      alert("Missing require full information");
      return;
    }
    //goi tra lai ham tu component cha
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    //sau khi them vao arrJob thanh cong thi input se tra ve rong
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname"> Job Title: </label> <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />{" "}
        <br />
        <label htmlFor="lname"> Salary: </label> <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />{" "}
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />{" "}
      </form>
    );
  }
}
export default AddComponent;
