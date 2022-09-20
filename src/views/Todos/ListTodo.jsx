import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
//react toastify
import { toast } from "react-toastify";
//import HOC
import Color from "../HOC/Color";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "doing homework",
      },
      {
        id: "todo2",
        title: "play game",
      },
      {
        id: "todo3",
        title: "walking",
      },
    ],
    editTodo: {},
  };
  addNewWork = (work) => {
    this.setState({
      listTodos: [...this.state.listTodos, work],
    });
    toast.success("Wow so easy");
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo,
    });
    toast.success("Delete Success");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //edit
    this.setState({
      editTodo: todo,
    });
    //save, khi nhấn save cần cập nhật lại listTodos
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        // xét editTodo bằng rỗng để nút save biến mất thành nút edit
        editTodo: {},
      });
      toast.success("Update Todo Success");
      return;
    }
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
    // console.log(this.state.editTodo);
  };
  render() {
    let { listTodos, editTodo } = this.state;
    // = let listTodos=this.state.listTodos;
    //isEmptyObj là biến dạng boolean, ==0 true, !==0 false
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(isEmptyObj);

    return (
      <>
        <p> Simple Todo App with giangnguyen </p>{" "}
        <div className="list-todo-container">
          <AddTodo addNewWork={this.addNewWork} />{" "}
          <div className="list-todo-content">
            {" "}
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {" "}
                    {/* isEmptyObj bằng rỗng nghĩa là chưa ấn vào nút edit */}{" "}
                    {isEmptyObj === true ? (
                      <span className="todo-name">
                        {" "}
                        {index + 1} - {item.title}{" "}
                      </span>
                    ) : (
                      <>
                        {" "}
                        {editTodo.id === item.id ? (
                          <span className="todo-name">
                            {" "}
                            {index + 1} -
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />{" "}
                          </span>
                        ) : (
                          <span>
                            {" "}
                            {index + 1} - {item.title}{" "}
                          </span>
                        )}{" "}
                      </>
                    )}{" "}
                    <button
                      type="button"
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}{" "}
                    </button>{" "}
                    <button
                      type="button"
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete{" "}
                    </button>{" "}
                  </div>
                );
              })}{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}
export default Color(ListTodo);
