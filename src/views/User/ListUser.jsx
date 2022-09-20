import React from "react";
import axios from "axios";
import "./ListUser.scss";

//HOC
// import Color from "../HOC/Color";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = { listUsers: [] };
  async componentDidMount() {
    //cach 1
    //     axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //       console.log("check response", res.data.data);
    //     });
    //cach 2 su dung async va await de tranh viec xay ra bat dong bo vi viec thuc hien
    //lay data co the mat nhieu thoi gian
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
    // console.log(res.data.data);
  }
  handleViewDetailUser = (user) => {
    let id = user.id;
    this.props.history.push(`/user/${id}`);
  };
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers && listUsers.length > 0
            ? listUsers.map((item, index) => {
                return (
                  <div
                    className="child"
                    key={item.id}
                    onClick={() => this.handleViewDetailUser(item)}
                  >
                    {index + 1} - {item.first_name} {item.last_name}
                  </div>
                );
              })
            : []}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
