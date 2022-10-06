import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/1.jpg";
//connect redux vs react, connect chinh la HOC
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //hàm push dùng để chuyển trang, phải dùng cùng với withRouter
    //   this.props.history.push("/todos");
    // }, 3000);
    //  console.log(this.props);
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    // console.log("check props", this.props);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div> Hello World from Homepage with giangnguyen </div>
        <img src={logo} alt="" />
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  <button
                    onClick={() => this.handleDeleteUser(item)}
                    type="button"
                    className=""
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          <button
            onClick={() => this.handleCreateUser()}
            type="button"
            className=""
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
//HOC: higher order component
// khi bọc 1 HOC vào component của chúng ta, withRouter là 1 HOC, thì component
//của chúng ta có đầy đủ thuộc tính của HOC đó(dạng props) + cái có cơ bản của component ban đầu, có thể check bằng this.props
// export default withRouter(Home);

//mapStateToProps chính là hàm để kết nối giữa react vs redux
//mapStateToProps truyền dữ liệu từ redux->react
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
//mapDispathToProps hàm này nhằm cập nhật dữ liệu cho redux từ react
//react->redux
//bắn ra 1 action, gửi về redux
const mapDispathToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => {
      dispatch({ type: "DELETE_USER", payload: userDelete });
    },
    addUserRedux: () => {
      dispatch({ type: "CREATE_USER" });
    },
  };
};
//cú pháp nhằm connect react với redux nằm trong component Home
export default connect(mapStateToProps, mapDispathToProps)(Color(Home));
