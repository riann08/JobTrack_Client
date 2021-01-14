import React from 'react'
import FormJob from "../components/Forms/FormJob";
import SearchBar from "../components/SearchBar";

function Dashboard() {
    return (
        <div>
            <h1>My Dashboard</h1>
            <SearchBar />
            <FormJob />
        </div>
    )
}

export default Dashboard

