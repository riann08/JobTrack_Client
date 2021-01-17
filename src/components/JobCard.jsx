import React from "react";
import apiHandler from "../api/apiHandler";
import { withRouter } from "react-router-dom"

function JobCard() {
  console.log(this.props.jobs);
  
  return (



  // componentDidMount() {
  //   console.log(this.props);
  //   const jobId = this.props.params.id;
  //   apiHandler.getJobDetails(jobId)
  //     .then((apiResponse) => {
  //       setTimeout(() => {
  //         this.setState({
  //           job: apiResponse.data,
  //         });
  //       }, 1000);
  //     });
  // }


  
      <div>
        <h2>Welcome to the job page</h2>
        <div>
          <div className="JobCard__header"><h2>{this.props.jobs.jobTitle}</h2>
            <p>{this.props.jobs.jobDescription}</p>
          </div>
          <p>{this.props.jobs.website}</p>
          <p>{this.props.jobs.contactPerson}</p>
          <p>{this.props.jobs.notes}</p>
          <p>{this.props.jobs.status}</p>
          <p>{this.props.jobs.cvSentDate}</p>
        </div>
      </div>
    );
  }

export default withRouter(JobCard);