import React from 'react'
import FormJob from "../components/Forms/FormJob";
import SearchBar from "../components/SearchBar";

function Dashboard() {
    return (

        <div className="Dashboard ">
            <h1>Welcome to your Dashboard.</h1>
            <SearchBar />
            <FormJob />
        </div>
    )
}

export default Dashboard

