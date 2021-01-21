import React from "react";
import { withRouter, Link } from "react-router-dom"
import apiHandler from "../api/apiHandler"

class JobCard extends React.Component {

  state ={
 jobs: [],
};

handleDelete = (id) => {
   console.log(this.props);
  
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
    if (!this.state.jobs) {
      return <div>Loading.....</div>;}
    return (  

      <div className="JobCard flex--column" key={this.props._id}>
        <div>
          <div className="JobCard__header flex--column"><h3>{this.props.job.company}</h3>
          <h3>{this.props.job.jobTitle}</h3>
            <p>{this.props.job.jobDescription}</p>
            <hr/>
          </div>
          <p>{this.props.job.website}</p>
          <p>{this.props.job.status}</p>
          



          <Link to={"/job/" + this.props.job._id}>
            See more...
          </Link>

          <Link to={"/job/" + this.props.job._id + "/edit"} >
            Edit
          </Link>

        
          <button onClick={() => this.handleDelete(this.props.job._id)}>
                    Delete
                  </button>
      
          
          
                 </div>
      </div>
    );


  }
}

export default withRouter(JobCard);