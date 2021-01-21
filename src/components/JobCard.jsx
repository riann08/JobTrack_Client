import React from "react";
import { withRouter, Link } from "react-router-dom"
// import apiHandler from "../api/apiHandler"


class JobCard extends React.Component {

  state = {
    jobs: [],
  };

  render() {
    if (!this.state.jobs) {
      return <div>Loading.....</div>;
    }
    return (

      <div className="JobCard flex--column" key={this.props._id}>
        <div>
          <div className="JobCard__header flex--column">
            <h3>{this.props.job.company}</h3>
            <h4>{this.props.job.jobTitle}</h4>
            <p>{this.props.job.location}</p>
            <hr />
          </div>


          <Link to={"/job/" + this.props.job._id}>
            See more...
          </Link>

          <div className="JobCard__buttonDiv flex--row"  >
            <button className="blueBtn"><Link to={"/job/" + this.props.job._id + "/edit"} >
              Edit
          </Link></button>

            <button id="deleteBtn" onClick={() => this.props.delete(this.props.job._id)}>
              Delete
                  </button>
          </div>



        </div>
      </div>
    );


  }
}

export default withRouter(JobCard);