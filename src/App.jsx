import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import JobDetails from "./pages/JobDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import FormUpdateUser from "./components/Forms/FormUpdateUser";
import FormJobUpdate from "./components/Forms/FormJobUpdate";
import FormJob from "./components/Forms/FormJob";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/auth/logout" />

        {/* ProtectedRoute */}
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/job" component={Dashboard} />
        <ProtectedRoute exact path="/job/create" component={FormJob} />
        <ProtectedRoute exact path="/job/:id/edit" component={FormJobUpdate} />
        <ProtectedRoute exact path="/job/:id/delete" />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/profile/:id/edit" component={FormUpdateUser} />
        <ProtectedRoute exact path="/job/:id" component={JobDetails} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
