import React, { Component } from 'react'
import apiHandler from "../../api/apiHandler";
import { UserContext } from "../Auth/UserContext";

export class FormJob extends Component {
  static contextType = UserContext;

  state = {
    company: "",
    jobTitle: "",
    jobDescription: "",
    contactPerson_Name:"",
    contactPerson_Email: "",
    contactPerson_Phone: "",
    website: "",
    notes: "",
    status: "",
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
        contactPerson_Name :this.state.contactPerson_Name, 
        contactPerson_Phone: this.state.contactPerson_Phone, 
        contactPerson_Email :this.state.contactPerson_Email,
        website: this.state.website,
        notes: this.state.notes,
        cvSentDate: this.state.cvSentDate,
        status: this.state.status
      })

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
            <input onChange={this.handleChange} type="text" name="contactPerson_Name" value={this.state.contactPerson_Name} />

            <label htmlFor="">Phone number</label>
            <input onChange={this.handleChange} type="text" name="contactPerson_Phone" value={this.state.contactPerson_Phone} />
            <label htmlFor="">Email</label>
            <input onChange={this.handleChange} type="text" name="contactPerson_Email" value={this.statecontactPerson_Email} />
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
          <select name ="status" value={this.state.status} onChange={this.handleChange}>
                <option value="To Apply For">To Apply For</option>
                <option value="CV Sent">CV Sent </option>
                <option value="To Follow-Up">To Follow Up</option>
                <option value="For Interview">For Interview</option>
                <option value="For Job Offer">For Job Offer</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="">CV sent on  </label>
            <input onChange={this.handleChange} type="date" name="cvSentDate" value={this.state.cvSentDate} />
          </div>

          <button>Submit !</button>
        </form>
      </div>
    );
  }
}



export default FormJob
