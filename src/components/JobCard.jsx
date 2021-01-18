import React from "react";
import { withRouter, Link } from "react-router-dom"
import apiHandler from "../api/apiHandler"

class JobCard extends React.Component {
  //console.log(this.props);

  // TO Do: transofrm this into a stateful component (class)`
  // get all the jobs from the DB. (probably in componentdidmount)
  // set the state with the jobs from the db

  //get all job details from 
  


state ={
 jobs: [],
};

//to review
 handleDelete = (id) => {
     apiHandler.deleteJob()
       .then((apiResponse) => {
         this.setState({
           jobs: this.state.jobs.filter((job) => this.state.jobs._id !== id),
         });
        

       })
       .catch((error) => {
         console.log(error);
       });
   };

  render() {
    return (

      <div>
        <div>
          <div className="JobCard__header" flex--column><h2>{this.props.job.jobTitle}</h2>
            <p>{this.props.job.jobDescription}</p>
            <hr/>
          </div>
          <p>{this.props.job.website}</p>
          <p>{this.props.job.contactPerson}</p>

          <Link to={"/job/" + this.props.job._id}>
            See more...
          </Link>

          <Link to={"/job/" + this.props.job._id + "/edit"} >
            Edit
          </Link>


          {/* to review */}
          <button onClick={() => this.handleDelete(this.props.job._id)}>
                    Delete
                  </button>
                 </div>
      </div>
    );


  }
}

export default withRouter(JobCard);