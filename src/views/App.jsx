import logo from "./logo.svg";
import "./App.scss";
// import MainComponent from "./Examples/MainComponent.js";
import ListTodo from "./Todos/ListTodo";
import MainComponent from "./Examples/MainComponent";
import Home from "./Examples/Home";
import Nav from "./Nav/Nav";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// react co 2 loai component:class component/function component(function, arrow)
//function App(){} va const App = () => {};
//function component dung khi component k can phai xu li logic, class component nguoc lai
//

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>{" "}
            <Route path="/todos">
              <ListTodo />
            </Route>{" "}
            <Route path="/about">
              <MainComponent />
            </Route>{" "}
            <Route path="/user" exact>
              <ListUser />
            </Route>{" "}
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>{" "}
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>{" "}
    </Router>
  );
}

export default App;
