import React from 'react'
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";


class Dashboard extends React.Component {
    state = {
        jobs: [],
    }

    componentDidMount() {
        console.log(this.props);
        apiHandler.getJobs()
            .then((responseFromApi) => {
                console.log(responseFromApi);

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
        console.log(this.props)
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
        status.forEach(statu => jobsByStatus.push({
            status: statu,
            jobs: filteredJobs.filter(job => job.status === statu)
        }))

        return (

            <div className="Dashboard grid-container">
                <div className="Dashboard__search flex--row">
                    <h1>Welcome to your Dashboard.</h1>
                    <SearchBar />
                </div>;
                <div className="Dashboard__main flex--column">

                    {/* {filteredJobs.map((job) =>
                        <div key={job._id+"-column"}>
                            <JobCard job={job} />
                            </div>
                    )} */}
                    {jobsByStatus.map((column) =>
                        <div key={column.status}>
                            <h1>{column.status}</h1>

                            {column.jobs.map(job => <JobCard key={job._id} job={job} />)}
                        </div>
                    )}

                </div>
            </div>

        )
    }

}
export default withUser(Dashboard);

