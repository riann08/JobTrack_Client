
import React from 'react'
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";

class Dashboard extends React.Component {
    state = {
        jobs: [],
        // searchByCompanyName:""
    }
    // handleSearch = (event) => {
    //    this.setState({searchByCompanyName:event.target.value}) 
    
    handleDelete = (id) => {
        // console.log(this.props);
       
          apiHandler.deleteJob(id)
            .then((apiResponse) => {
              this.setState({
                jobs: this.state.jobs.filter((job) => job._id !== id),
              });
            })
            .catch((error) => {
              console.log(error);
            });
        };
    componentDidMount() {
        // console.log(this.props);
        apiHandler.getJobs()
            .then((responseFromApi) => {
                // console.log(responseFromApi);
                this.setState({
                    jobs: responseFromApi,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.jobs === null) {
            return <div>Loading...</div>
        }
        // console.log(this.props)
        const filteredJobs = this.state.jobs.filter((job) => job.userId === this.props.context.user._id)
        // .filter(job=>job.company.includes(this.state.searchByCompanyName.toLowerCase()) || this.state.searchByCompanyName === "")
        const status = [
            "To Apply For",
            "CV Sent",
            "To Follow-Up",
            "For Interview",
            "For Job Offer",
            "Accepted",
            "Rejected",
        ]
        let jobsByStatus = []
        status.forEach(stage => jobsByStatus.push({
            status: stage,
            jobs: filteredJobs.filter(job => job.status === stage)
        }))
        return (
            <div className="Dashboard grid-container">
                <div className="Dashboard__search flex--row">
                    <h3>Welcome to your Dashboard.</h3>
                    <SearchBar search={this.handleSearch} value={this.state.searchByCompanyName} />
                </div>;
                <div className="Dashboard__main flex--column">
                 {jobsByStatus.map((column) =>
                        <div className="Dashboard__column" key={column.status}>
                            <h3>{column.status}</h3>
                            {column.jobs.map(job => <JobCard key={job._id} job={job} delete={this.handleDelete} 
                            />)}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default withUser(Dashboard);
