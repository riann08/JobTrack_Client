import React from "react";
import { withRouter, Link } from "react-router-dom"

class JobCard extends React.Component {
  //console.log(this.props);

  // TO Do: transofrm this into a stateful component (class)`
  // get all the jobs from the DB. (probably in componentdidmount)
  // set the state with the jobs from the db

  //get all job details from Dashboard

  render() {
    return (

      <div>
        <h2>Welcome to the job page</h2>
        <div>
          <div className="JobCard__header"><h2>{this.props.job.jobTitle}</h2>
            <p>{this.props.job.jobDescription}</p>
          </div>
          <p>{this.props.job.website}</p>
          <p>{this.props.job.contactPerson}</p>

          <Link to="/job/:id">
            See more...
          </Link>

          <Link to="/job/:id/edit">
            Edit
          </Link>

          <Link to="/job/:id/delete">
            Delete
          </Link>
        </div>
      </div>
    );


  }
}

export default withRouter(JobCard);