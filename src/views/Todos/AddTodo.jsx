import React from "react";
//react toastify
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    id: "",
    title: "",
  };
  handleChange = (event) => {
    this.setState({
      id: Math.floor(Math.random() * 1001),
      title: event.target.value,
    });
  };
  createWork = () => {
    if (!this.state.title) {
      // if(undefined/null/empty) => false
      toast.success("Missing title's Todo!");
      return;
    }
    this.props.addNewWork({
      id: this.state.id,
      title: this.state.title,
    });
    this.setState({
      id: "",
      title: "",
    });
  };
  render() {
    // let { title } = this.state;
    // console.log(title);
    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChange(event)}
          />
          <button
            type="button"
            className="add"
            onClick={() => this.createWork()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;
