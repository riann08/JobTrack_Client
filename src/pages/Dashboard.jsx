import React from 'react'
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";


class Dashboard extends React.Component {
    state = {
        jobs: [],
        user:[],
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

    //     apiHandler.getUsers()
    //         .then((usersFromApi) => {
    //             console.log(usersFromApi);

    //             this.setState({
    //                 jobs: usersFromApi,
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //           });
     }
    render() {

        if (this.state.jobs === null) {
            return <div>Loading...</div>
        }
        console.log(this.props)
        const filteredJobs = this.state.jobs.filter((job) => job.userId === this.props.context.user._id)

        return (

            <div className="Dashboard ">
                <div className="Dashboard__search flex--row">
                    <h1>Welcome to your Dashboard.</h1>
                    <SearchBar />
                </div>;
                <div className="Dashboard__main flex--column">

                    {filteredJobs.map((job) =>
                        <div key={job._id}>
                            <JobCard job={job} /></div>
                    )}

                </div>
            </div>

        )
    }

}
export default withUser(Dashboard);

