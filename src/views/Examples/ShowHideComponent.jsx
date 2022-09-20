import React from "react";
import "./Demo.scss";
class ShowHideComponent extends React.Component {
  /*
                  JSX luôn return 1 block (1 div lớn, 1 h3 lớn , fragment...);
                  luôn dùng arrow function
                */
  //key:value
  state = {
    showJobs: false,
  };
  toTrue = () => {
    this.setState({
      showJobs: true,
    });
  };
  toFalse = () => {
    this.setState({
      showJobs: false,
    });
  };
  //thay the ham tren bang 1 ham duy nhat
  // handeShowHide = () => {
  //   this.setState({
  //     showJobs: !this.state.showJobs,
  //   });
  // };
  handleOnclickDelete = (item) => {
    // console.log(item);
    this.props.deleteJob(item);
  };
  render() {
    // console.log(">>> Đây là props", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    // let { arrJob } = this.props;
    let { arrayJob } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs=true" : "showJobs=false";
    // console.log(check);
    return (
      <>
        {" "}
        {showJobs === false ? (
          <div className="show">
            <button className="btn-show" onClick={() => this.toTrue()}>
              {" "}
              Show{" "}
            </button>{" "}
          </div>
        ) : (
          <>
            <div className="job-lists">
              {" "}
              {arrayJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {" "}
                    {item.title} - {item.salary}${" "}
                    <button onClick={() => this.handleOnclickDelete(item)}>
                      X{" "}
                    </button>{" "}
                  </div>
                );
              })}{" "}
            </div>{" "}
            <div className="hide">
              <button onClick={() => this.toFalse()}> Hide </button>{" "}
            </div>{" "}
          </>
        )}{" "}
      </>
    );
  }
}
//function component khong dung duoc this, dung <=> dung hooks
//va du lieu chuyen sang component phai trung ten voi du lieu thang cha truyen sang, vd arrJob trung nhau
// const ChildComponent = (props) => {
//   console.log(props);
//   let { arrayJob } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {arrayJob?.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title}-{item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ShowHideComponent;
