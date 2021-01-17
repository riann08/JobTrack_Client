import React, { Component } from "react";
import { UserContext } from "../Auth/UserContext";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import Button from '@material-ui/core/Button';


class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
      
      <form className="flex--column" onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleChange} value={this.state.email} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} />
        <Button variant="contained" color="primary">Submit</Button>
      </form>

    );
  }
}

export default withRouter(FormSignin);
