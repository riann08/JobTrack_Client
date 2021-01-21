import React, { Component } from 'react'
import apiHandler from "../api/apiHandler"
import { withRouter, Link } from "react-router-dom"

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
            return <div>Loading.....</div>;
        }
        return (
            <div className="JobDetails flex--column">
                <h1>{this.state.job.company}</h1>
                <h2>{this.state.job.company}</h2>
                <p>{this.state.jobTitle}</p>
                <p>{this.state.location}</p>

                <h3> Contact Person: </h3>
                <p>Name: {this.state.job.contactPerson_Name}  </p>
                <p>Email: {this.state.job.contactPerson_Email}</p>
                <p>Phone: {this.state.job.contactPerson_Phone}</p>
                <p>Website: {this.state.job.website} </p>
                <p>Notes: {this.state.job.notes}</p>
                <p>CV Sent Date: {this.state.job.cvSentDate}</p>
                <p>Status: {this.state.job.status}</p>

                <Link to={"/job/" + this.state.job._id + "/edit"} >
                    Edit
          </Link>
            </div>
        )
    }
}

export default withRouter(JobDetails)
//export default JobDetails

