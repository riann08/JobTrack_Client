import React, { Component } from 'react'
import apiHandler from "../../api/apiHandler"
import {withRouter} from "react-router-dom";
//import { UserContext } from "../Auth/UserContext";

export class FormJobUpdate extends Component {
 state = {
    company: "",
    jobTitle: "",   
    jobDescription: "",
    contactPerson: { name: "", phone: "", email: "" },
    website: "",
    notes: "",
    status: "To apply for",
    cvSentDate: ""
  };

  componentDidMount() {
    console.log(this.props);
    const jobId = this.props.match.params.id;

    apiHandler.getJobInfo(jobId)
      .then((apiResponse) => {
       this.setState( {
        company: apiResponse.company,
        jobTitle: apiResponse.jobTitle,
        jobDescription: apiResponse.jobDescription,
        contactPerson: {name: apiResponse.contactPerson.name, 
          phone: apiResponse.contactPerson.phone, 
          email:apiResponse.contactPerson.email},
        website: apiResponse.website,
        notes: apiResponse.notes,
        cvSentDate: apiResponse.cvSentDate,
        status: apiResponse.status
       })
      })
      .catch((error) => {
        console.log(error);
      });
  }

//update
  handleChange = (event) => {
    const name = event.target.name;
    const defaultValue = event.target.defaultvalue;
    this.setState({
      [name]: defaultValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    
const jobId = this.props.match.params.id;

    apiHandler
      .updateJob(jobId, this.state )
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
        <form className="FormJob__form flex--column" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Company Name</label>
          </div>
          <div>
            <label htmlFor="">Job Title</label>
          </div>
          <div>
            <input onChange={this.handleChange} type="text" name="company" defaultValue={this.state.company} />
            <label htmlFor="">Job Description</label>
            <input onChange={this.handleChange} type="text" name="jobDescription" defaultValue={this.state.jobDescription} />
          </div>
            <input onChange={this.handleChange} type="string" name="jobTitle" defaultValue={this.state.jobTitle} />

          <div className="contact flex--column">
            <p>Contact person</p>
            <label htmlFor="">Name</label>
            <input onChange={this.handleChange} type="text" name="contactPerson.name" defaultValue={this.state.contactPerson.name} />

            <label htmlFor="">Phone number</label>
            <input onChange={this.handleChange} type="text" name="contactPerson.phone" defaultValue={this.state.contactPerson.phone} />
            <label htmlFor="">Email</label>
            <input onChange={this.handleChange} type="text" name="contactPerson.email" defaultValue={this.state.contactPerson.email} />
          </div>

          <div>
            <label>
              Notes
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange} />
            </label>
          </div>
          
          <div>
            <label>
              Select status:
          <select defaultValue={this.state.status} onChange={this.handleChange}>
                <option value="apply">To Apply For</option>
                <option value="sent">CV Sent </option>
                <option value="follow">To Follow Up</option>
                <option value="interview">For Interview</option>
                <option value="offer">For Job Offer</option>
                <option value="accepted">Job Accepted</option>
                <option value="rejected">Job Rejected</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="">CV sent on  </label>
            <input onChange={this.handleChange} type="date" name="cvSentDate" 
            defaultValue={this.state.cvSentDate} />
          </div>

          <button>Submit !</button>
        </form>
      </div>
    );
  }
}



export default withRouter(FormJobUpdate)
