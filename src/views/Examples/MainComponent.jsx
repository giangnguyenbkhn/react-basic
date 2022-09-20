import React from "react";
import ShowHideComponent from "./ShowHideComponent";
import AddComponent from "./AddComponent";
class MainComponent extends React.Component {
  state = {
    arrJob: [
      {
        id: "abcJob1",
        title: "developer",
        salary: "500",
      },
      {
        id: "abcJob2",
        title: "tester",
        salary: "400",
      },
      {
        id: "abcJob3",
        title: "Project managers",
        salary: "1000",
      },
    ],
  };
  //function xu li khi submit job o trang addcomponent se them job vao arrJob
  addNewJob = (job) => {
    // console.log("check job", job);
    // console.log(this.state);
    // let currentJob=this.state.arrJob;
    // currentJob.push(job);
    this.setState({
      // arrJob:currentJob,
      arrJob: [...this.state.arrJob, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currentJob,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("prev state", prevState, "prev current", this.state);
  }
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        {/* state sẽ chỉ truyền được từ cha sang con, 
        còn fuction có thể truyền từ con sang cha */}
        <ShowHideComponent
          arrayJob={this.state.arrJob}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
export default MainComponent;
