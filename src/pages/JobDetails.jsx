import React, { Component } from 'react'
import apiHandler from "../api/apiHandler"
import { withRouter, Link } from "react-router-dom"
import moment from "moment"

export class JobDetails extends Component {
    state = {
        job: {}
    }

    componentDidMount() {
        console.log(this.props);//add Id
        const jobId = this.props.match.params.id;

        apiHandler.getJobInfo(jobId)
            .then((responseFromApi) => {
                console.log(responseFromApi);

                this.setState({
                    job: responseFromApi
                });
            });
    }
    render() {

        if (!this.state.job) {
            return <div>Loading.....</div>
        }
        const formattedDate = moment(this.state.job.cvSentDate).format("MMM Do YYYY");
        return (
            <div className="FormJobUpdate flex--column">

                <img id="detailImg" src="/images/undraw_co-working_825n.svg" alt="" />
                {/* <div className="topCard">// */}
                <h1>{this.state.job.company}</h1>
                <h2>{this.state.job.jobTitle}</h2>
                <h3>{this.state.job.location}</h3>
                <hr />
                <p>Website: {this.state.job.website} </p>
                <p id="jobDesc">  Job Description: {this.state.job.jobDescription} </p>


                <h5>Contact Person: </h5>
                <div>   <h6>Name: {this.state.job.contactPerson_Name}  </h6>
                    <h6>Email: {this.state.job.contactPerson_Email}</h6>
                    <h6>Phone: {this.state.job.contactPerson_Phone}</h6>
                </div>


                <p id="notes">Notes: {this.state.job.notes}</p>
                <p>Status: {this.state.job.status}</p>


                <p>CV Sent Date: {formattedDate}</p>

                <button className="blueBtn addMargin">
                    <Link to={"/job/" + this.state.job._id + "/edit"} >
                        Edit</Link>
                </button>

            </div >
        )
    }
}

export default withRouter(JobDetails)
//export default JobDetails

