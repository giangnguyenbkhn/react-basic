import axios from "axios";
import React from "react";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    userDetail: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      //id hay name, hay ... là định nghĩa bên Route sau dấu :
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        userDetail: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBack = () => {
    this.props.history.push("/user");
  };
  render() {
    let { userDetail } = this.state;
    let isEmptyObj = Object.keys(userDetail).length === 0;
    return (
      <div className="detail-user-container">
        <div className="title">Detail User {this.props.match.params.id}</div>
        {!isEmptyObj && (
          <>
            <div>
              User's name:{userDetail.first_name} {userDetail.last_name}
            </div>
            <div>User's email:{userDetail.email}</div>
            <div>
              <img src={userDetail.avatar} alt="" />
            </div>
            <div>
              <button
                className="handleBack"
                type="button"
                onClick={() => this.handleBack()}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default withRouter(DetailUser);
