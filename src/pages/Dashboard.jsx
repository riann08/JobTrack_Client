import React from 'react'
import JobCard from "../components/JobCard";
//import SearchBar from "../components/SearchBar";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";


class Dashboard extends React.Component {

    state = {
        jobs: null,
    }

    componentDidMount() {
        console.log(this.props);
        apiHandler.getJobs()
            .then((responseFromApi) => {
                console.log(responseFromApi);

                this.setState({
                    jobs: responseFromApi,
                });
            });

        // //to review (get cards per user logged-in)
        // const userId = this.props.context.user._id
        // apiHandler.getUserInfo(userId) 
        // .then((responseFromApi.populate("user")) => {
        //     console.log(responseFromApi);

        //     this.setState({
        //         jobs: responseFromApi,
        //     });
        // // });
    }
    render() {

        if (this.state.jobs === null) {
            return <div>Loading...</div>
        }
        return (

            <div className="Dashboard ">
                <div className="Dashboard__search flex--row">
                    <h1>Welcome to your Dashboard.</h1>
                    {/* <SearchBar /> */}
                </div>;

                {this.state.jobs.map((job) =>
                    <JobCard job={job} />
                )
                }
            </div>

        )
    }
}

export default withUser(Dashboard)

