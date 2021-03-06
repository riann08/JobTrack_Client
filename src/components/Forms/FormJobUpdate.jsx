import React, { Component } from 'react'
import apiHandler from "../../api/apiHandler"
import { withRouter } from "react-router-dom";
//import { UserContext } from "../Auth/UserContext";

export class FormJobUpdate extends Component {
  state = {
    company: "",
    jobTitle: "",
    jobDescription: "",
    contactPerson: { name: "", phone: "", email: "" },
    website: "",
    notes: "",
    status: "CV Sent",
    cvSentDate: ""
  };

  componentDidMount() {
    const jobId = this.props.match.params.id;

    apiHandler.getJobInfo(jobId)
      .then((apiResponse) => {
        console.log(apiResponse);
        const job = apiResponse;
        this.setState({
          company: job.company,
          jobTitle: job.jobTitle,
          jobDescription: job.jobDescription,
          contactPerson_Name: job.contactPerson_Name,
          contactPerson_Phone: job.contactPerson_Phone,
          contactPerson_Email: job.contactPerson_Email,
          location: job.location,
          website: job.website,
          notes: job.notes,
          cvSentDate: job.cvSentDate,
          status: job.status
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //update
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();


    const jobId = this.props.match.params.id;

    apiHandler
      .updateJob(jobId, this.state)
      .then((apiResponse) => {
        console.log(apiResponse);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (

      <div className="FormJob flex--column">
        <h3>Edit Job Info</h3>

        <form className="FormJobUpdate flex--column" onSubmit={this.handleSubmit}>

          <label>Company Name</label>
          <input onChange={this.handleChange} type="text" name="company" value={this.state.company} />

          <label>Job Title</label>
          <input onChange={this.handleChange} type="string" name="jobTitle" value={this.state.jobTitle} />

          <label>Job Location</label>
          <input onChange={this.handleChange} type="text" name="location" value={this.state.location} />

          <label>Job Description</label>
          <input onChange={this.handleChange} type="text" name="jobDescription" value={this.state.jobDescription} />


          <div className="contact flex--column">
            <h4>Contact person</h4>
            <label>Name</label>
            <input onChange={this.handleChange} type="text" name="contactPerson_Name" value={this.state.contactPerson_Name} />

            <label>Phone number</label>
            <input onChange={this.handleChange} type="text" name="contactPerson_Phone" value={this.state.contactPerson_Phone} />

            <label>Email</label>
            <input onChange={this.handleChange} type="text" name="contactPerson_Email" value={this.state.contactPerson_Email} />
          </div>

          <label>Notes</label>
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange} />

          <label>Select status: </label>
          <select name="status" value={this.state.status} onChange={this.handleChange}>
            <option value="To Apply For">To Apply For</option>
            <option value="CV Sent ">CV Sent </option>
            <option value="To Follow-Up">To Follow Up</option>
            <option value="For Interview">For Interview</option>
            <option value="For Job Offer">For Job Offer</option>
            <option value="Accepted">Job Accepted</option>
            <option value="Rejected">Job Rejected</option>
          </select>

          {this.state.status.cvSentDate !== null && <div><label>CV sent on  </label>
            <input onChange={this.handleChange} type="date" name="cvSentDate"
              value={this.state.cvSentDate} /></div>}


          <button className="blueBtn addMargin">Submit !</button>
        </form>
      </div>
    );
  }
}



export default withRouter(FormJobUpdate)
