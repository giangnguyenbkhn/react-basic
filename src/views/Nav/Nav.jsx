import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink
          to="/"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          exact={true}
        >
          Home{" "}
        </NavLink>{" "}
        <NavLink
          to="/todos"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          Todos{" "}
        </NavLink>{" "}
        <NavLink
          to="/about"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          About{" "}
        </NavLink>{" "}
        <NavLink
          to="/user"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          Users{" "}
        </NavLink>{" "}
      </div>
    );
  }
}
export default Nav;
