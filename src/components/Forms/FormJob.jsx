import React, { Component } from 'react'
import apiHandler from "../../api/apiHandler";
import Button from '@material-ui/core/Button';
import { UserContext } from "../Auth/UserContext";

export class FormJob extends Component {
  static contextType = UserContext;

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

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .createJob({
        company: this.state.company,
        jobTitle: this.state.jobTitle,
        jobDescription: this.state.jobDescription,
        contactPerson: {name :this.state.contactPerson.name, 
          phone: this.state.contactPerson.phone, 
          email :this.state.contactPerson.email},
        website: this.state.website,
        notes: this.state.notes,
        cvSentDate: this.state.cvSentDate,
        status: this.state.status
      })

      .then((apiResponse) => {
        console.log(apiResponse);
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
            <input onChange={this.handleChange} type="text" name="company" value={this.state.company} />
          </div>
          <div>
            <label htmlFor="">Job Title</label>
            <input onChange={this.handleChange} type="string" name="jobTitle" value={this.state.jobTitle} />
          </div>
          <div>
            <label htmlFor="">Job Description</label>
            <input onChange={this.handleChange} type="text" name="jobDescription" value={this.state.jobDescription} />
          </div>

          <div className="contact flex--column">
            <p>Contact person</p>
            <label htmlFor="">Name</label>
            <input onChange={this.handleChange} type="text" name="contactPerson.name" value={this.state.name} />

            <label htmlFor="">Phone number</label>
            <input onChange={this.handleChange} type="text" name="contactPerson.phone" value={this.state.phone} />
            <label htmlFor="">Email</label>
            <input onChange={this.handleChange} type="text" name="contactPerson.email" value={this.state.email} />
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
          <select value={this.state.status} onChange={this.handleChange}>
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
            <input onChange={this.handleChange} type="date" name="cvSentDate" value={this.state.cvSentDate} />
          </div>

          <Button variant="contained" color="primary">Submit !</Button>
        </form>
      </div>
    );
  }
}



export default FormJob
