import React, { Component } from 'react'
import apiHandler from "../../api/apiHandler";
import { UserContext } from "../Auth/UserContext";

export class FormJob extends Component {
  static contextType = UserContext;

  state = {
    company: "",
    jobTitle: "",
    jobDescription: "",
    contactPerson_Name: "",
    contactPerson_Email: "",
    contactPerson_Phone: "",
    website: "",
    notes: "",
    status: "To Apply For",
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
        contactPerson_Name: this.state.contactPerson_Name,
        contactPerson_Phone: this.state.contactPerson_Phone,
        contactPerson_Email: this.state.contactPerson_Email,
        location: this.state.location,
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
          <label classname="FormJob__label" htmlFor="">Company Name *</label>
          <input classname="FormJob__input" className="FormJob__input" onChange={this.handleChange} type="text" name="company" value={this.state.company} />


          <label classname="FormJob__label" htmlFor="">Job Title *</label>
          <input classname="FormJob__input" onChange={this.handleChange} type="text" name="jobTitle" value={this.state.jobTitle} />

          <label classname="FormJob__label" htmlFor="">Job Location</label>
          <input onChange={this.handleChange} type="text" name="location" value={this.state.location} />

          <label classname="FormJob__label" htmlFor="">Job Description</label>
          <textarea onChange={this.handleChange} type="text" name="jobDescription" value={this.state.jobDescription} />

          <label>Website</label>
          <input classname="FormJob__input" name="website" type="text" value={this.state.website} onChange={this.handleChange} />

          <label>
            Notes
            </label>
          <textarea name="notes" value={this.state.notes} onChange={this.handleChange} />


          <label>
            <div className="contact flex--column">
              <p>Contact person</p>
              <label classname="FormJob__label" htmlFor="">Name</label>
              <input classname="FormJob__input" onChange={this.handleChange} type="text" name="contactPerson_Name" value={this.state.contactPerson_Name} />

              <label classname="FormJob__label" htmlFor="">Phone number</label>
              <input classname="FormJob__input" onChange={this.handleChange} type="text" name="contactPerson_Phone" value={this.state.contactPerson_Phone} />
              <label classname="FormJob__label" htmlFor="">Email</label>
              <input classname="FormJob__input" onChange={this.handleChange} type="text" name="contactPerson_Email" value={this.statecontactPerson_Email} />
            </div>

              Select status:
          <select name="status" value={this.state.status} onChange={this.handleChange}>
              <option value="To Apply For">To Apply For</option>
              <option value="CV Sent">CV Sent </option>
              <option value="To Follow-Up">To Follow Up</option>
              <option value="For Interview">For Interview</option>
              <option value="For Job Offer">For Job Offer</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
          </label>

          {this.state.status === "CV Sent" && (
            <div>
              <label classname="FormJob__label" htmlFor="">CV sent on  </label>
              <input classname="FormJob__input" onChange={this.handleChange} type="date" name="cvSentDate" value={this.state.cvSentDate} />
            </div>)}

          <p id="required"> * Required fields</p>
          <button className="blueBtn">Submit !</button>
        </form>
      </div >
    );
  }
}



export default FormJob
