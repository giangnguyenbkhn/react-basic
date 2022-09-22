import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
//phai cau hinh redux ngay tai file root(file ban dau)
//code lien quan den redux viet trong thu muc store
import { Provider } from "react-redux";
//provider ép được redux khởi động cùng react, riêng biệt,chạy song song
import { createStore } from "redux";
//createStore tạo ra 1 vùng dữ liệu store để nạp 1 thằng công nhân vào
import rootReducer from "./store/reducers/rootReducer";

const reduxStore = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
