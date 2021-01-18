import React from 'react'
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import apiHandler from "../api/apiHandler";

class Dashboard extends React.Component {

    state = {
        jobs: null,
    }

    componentDidMount() {

        apiHandler.getJobs()
               .then((responseFromApi) => {
                console.log(responseFromApi);
                
                    this.setState({
                        jobs: responseFromApi,
                    });
                            });
    }
 
// transofrm this into a stateful component (class)`
    // get all the jobs from the DB. (probably in componentdidmount)
    // set the state with the jobs from the db
render(){
return (
    
        <div className="Dashboard ">
            <div className="Dashboard__search flex--row">
                <h1>Welcome to your Dashboard.</h1>
                <SearchBar />
            </div>;

            {this.state.jobs.map((job) => 
                     <JobCard job={job}/>
                     )
            }
        </div>
    
)
}
}

export default Dashboard

