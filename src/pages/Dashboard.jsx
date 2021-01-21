
import React from 'react'
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";

class Dashboard extends React.Component {
    state = {
        jobs: [],
        searchByCompanyName: ""
    }

    handleSearch = (event) => {
        const { value } = event.target;
        this.setState({
            searchByCompanyName: value,
        });
    };





    handleDelete = (id) => {


        apiHandler.deleteJob(id)
            .then((apiResponse) => {
                this.setState({
                    jobs: this.state.jobs.filter((job) => job._id !== id),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    componentDidMount() {

        apiHandler.getJobs()
            .then((responseFromApi) => {

                this.setState({
                    jobs: responseFromApi,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.jobs === null) {
            return <div>Loading...</div>
        }
        const filteredJobs = this.state.jobs.filter((job) => job.userId === this.props.context.user._id)

        const status = [
            "To Apply For",
            "CV Sent",
            "To Follow-Up",
            "For Interview",
            "For Job Offer",
            "Accepted",
            "Rejected",
        ]
        let jobsByStatus = []

        status.forEach(stage => jobsByStatus.push({
            status: stage,
            jobs: filteredJobs.filter(job => {

                return job.status === stage
            })
        }))


        console.log(jobsByStatus)
        return (
            <div className="Dashboard ">
                <div className="Dashboard__search flex--row">
                    <h3>Welcome to your Dashboard.</h3>
                    <SearchBar search={this.handleSearch} value={this.state.searchByCompanyName} />
                </div>;
                <div className="Dashboard__main grid-container">
                    {jobsByStatus.map((column) => {

                        return <div className="Dashboard__column" key={column.status}>
                            <h3>{column.status}</h3>
                            {column.jobs.map(job => <JobCard key={job._id} job={job} delete={this.handleDelete}
                            />)}
                        </div>
                    }
                    )}
                </div>
            </div>
        )
    }
}
export default withUser(Dashboard);
